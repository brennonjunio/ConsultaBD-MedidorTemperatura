const db = require("../models/db");
class ControllerBd {
  static async busca(req, res) {
    const teste = await db.selectPadrao();
    res.render("index", {
      teste: teste,
    });
    return teste;
  }
}
module.exports = ControllerBd;
