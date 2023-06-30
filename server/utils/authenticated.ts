import type { EventHandler } from "h3";
import { verifyToken } from "../services/jwt";
import { DecodedToken } from "../types";

export const authenticated = (handler: EventHandler) =>
  defineEventHandler(async (event) => {
    try {
      const authToken = event.node.req.headers.authorization;

      if (!authToken) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized",
        };
      }

      const decodedToken: DecodedToken | null = verifyToken(authToken);

      if (!decodedToken) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized",
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
