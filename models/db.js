async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const mysql = require("mysql2/promise");
  const connection = await mysql.createConnection(
    "mysql://root:mynewpassword@localhost:3306/db_smt"
  );
  // console.log("Conectou nooo MySQL!");
  global.connection = connection;
  return connection;
}

connect();

async function selectPadrao() {
  const conn = await connect();
  const [rows] = await conn.query("select * from tb_temp_humi LIMIT 30;");
  return rows;
}

module.exports = { selectPadrao };
