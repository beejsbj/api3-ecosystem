//  token payload interface
export interface JwtPayload {
  id: string;
  address: string;
  role: string;
}

// decoded token interface
export interface DecodedToken {
  id: string;
  address: string;
  role: string;
  iat: number;
  exp: number;
}
