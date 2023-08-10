import { UserInfo } from "./user.types";

export interface Task {
  name: string;
  // date: string;
  status: string
}

export interface TaskRequest {
  body?: {
    name: string;
    // date: string;
    status: string
  };
  user?: UserInfo
  params?: any 
}