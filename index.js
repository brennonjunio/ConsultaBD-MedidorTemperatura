//index.js

const q = async () => {
  const db = require("./models/db");
  // console.log("Teste conexão");
  // console.log("select * from tb_temp_humi LIMIT 10;");
  const teste = await db.selectPadrao();
  console.log(teste);
  return teste;
};
q();
