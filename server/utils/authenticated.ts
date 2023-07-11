import type { EventHandler } from "h3";
import { verifyToken } from "../services/jwt";
import { DecodedToken, ROLE } from "../types";
import { User } from "~/server/models/User";

export const authenticated = (
  handler: EventHandler,
  role: string = ROLE.USER
) =>
  defineEventHandler(async (event) => {
    try {
      const authToken = event.node.req.headers.authorization;

      if (!authToken) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized access",
        };
      }

      const decodedToken: DecodedToken | null = verifyToken(authToken);

      if (!decodedToken) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized",
        };
      }

      // check if user exists in db
      const user = await User.findOne({ address: decodedToken.address });

      // if user is not present in db, return unauthorized
      if (!user) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized access",
        };
      }

      // if role is not same as user role, return unauthorized
      if (user?.role !== role) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized access",
        };
      }

      event.context.auth = { user: decodedToken };

      const response = await handler(event);

      return { response };
    } catch (err) {
      console.log("auth middleware error ", err);
      event.res.statusCode = 500;
      return {
        error: "Something went wrong at server!",
      };
    }
  });
