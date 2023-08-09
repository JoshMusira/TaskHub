import { Request } from "express";
import { string } from "joi";

export interface RegisterRequest extends Request {
  body: {
    username: string;
    password: string;
  };
}