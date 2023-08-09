import mssql from "mssql";
import { dbConfig } from "../config/Config";

export class Connection {
  private pool: Promise<mssql.ConnectionPool>;
  constructor() {
    this.pool = this.getConnection();//When this class is instantiated we call getConnection immediately
  }

  //   Creates the connection=>Function connecting to db
  getConnection(): Promise<mssql.ConnectionPool> {
    const pool = mssql.connect(dbConfig);
    return pool;
  }

    // Insert/Add params in the request
    createRequest(request: mssql.Request, params: { [x: string]: string }) {
      for (const key in params) {
        request.input(key, params[key]);
      }
      return request;
    }

    //   We will call this function through this class whenever we want to query using a procedure
  async executeProcedure(
    procedureName: string,
    params?: { [x: string]: string }
  ) {
    let pool = await this.pool;
    let request = pool.request();
    params ? (request = this.createRequest(request, params)) : request;
    return await request.execute(procedureName);
  }

}