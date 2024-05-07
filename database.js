import { createPool } from "mysql2/promise";
import {
  DB_PASSWORD,
  HOST_NAME,
  DATABASE_NAME,
  USER_NAME,
  DB_PORT,
} from "./config.js";

export const pool = createPool({
  host: HOST_NAME,
  user: USER_NAME,
  password: DB_PASSWORD,
  database: DATABASE_NAME,
  port: DB_PORT,
});
