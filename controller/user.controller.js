import { pool } from "../database.js";

export async function getUsers(req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUser(req, res) {
  const { name } = req.params;
  const filterName = "%" + name + "%";
  try {
    console.log(filterName);
    const [result] = await pool.query(
      "SELECT * FROM USERS WHERE USER_NAME LIKE ? ",
      filterName
    );
    res.json(result);
  } catch (error) {}
}

export async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const [result] = await pool.query(
      "DELETE FROM users WHERE USER_ID = ?",
      id
    );
    res.json(result);
  } catch (error) {}
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const { name, job } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE USERS SET USER_NAME = ?, USER_JOB =? WHERE USER_ID= ?",
      [name, job, id]
    );
    res.json(result);
  } catch (error) {}
}

export async function newUser(req, res) {
  const { name, job } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO USERS (USER_NAME, USER_JOB) VALUES(?, ?)",
      [name, job]
    );
    res.json(result);
  } catch (error) {}
}
