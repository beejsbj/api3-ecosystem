import type { EventHandler } from "h3";

export const authenticated = (handler: EventHandler) =>
  defineEventHandler(async (event) => {
    try {
      // validate token in header
      // set authenticated user in context
      const authToken = event.node.req.headers.authorization;
      console.log("token ", authToken);
      console.log("headers ", event.node.req.headers);
      if (!authToken) {
        event.res.statusCode = 401;
        return {
          error: "Unauthorized",
        };
      }
      //:TODO: verify token

      //   const token = authToken.split(" ")[1];
      //   const decodedToken = jwt.verify(token, config.JWT_SECRET);
      //   if (!decodedToken) {
      //     event.res.statusCode = 401;
      //     return {
      //       error: "Unauthorized",
      //     };
      //   }
      event.context.auth = { user: "auth checked" };

      const response = await handler(event);

      return { response };
    } catch (err) {
      console.log("auth middleware error ", err);
      return { err };
    }
  });
