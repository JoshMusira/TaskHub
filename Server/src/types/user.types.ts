import { Request } from "express";
import { string } from "joi";

export interface RegisterRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}
export interface LoginRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}

export interface User {
  userID: string | number;
  username: string;
  password: string;
}

export interface UserInfo {
  userID: string;
  username: string;
  password: string;
  iat: number;
  exp: number;
}