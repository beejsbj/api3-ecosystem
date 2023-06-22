import jwt from "jsonwebtoken";
import { DecodedToken, JwtPayload } from "../types";

export const getToken = (
  payload: JwtPayload,
  expiry: string = "10 days"
): string | null => {
  try {
    const token = jwt.sign(payload, "_jwt_secret_here", {
      expiresIn: expiry,
    });

    return token;
  } catch (error) {
    console.log("generating token: ", error);
    return null;
  }
};

export const verifyToken = (token: string): DecodedToken | null => {
  try {
    const decoded = jwt.verify(token, "_jwt_secret_here");

    if (!decoded) {
      console.log("token verification failed");
      return null;
    }
    const decodedToken = decoded as DecodedToken;

    return decodedToken;
  } catch (error) {
    console.log("verifying token: ", error);
    return null;
  }
};
