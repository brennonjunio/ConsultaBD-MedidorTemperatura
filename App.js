const express = require("express");
const App = express();
const porta = 3001;
const routes = require("./routes/routes");
const { engine } = require("express-handlebars");

App.engine(
  "handlebars",
  engine({
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

App.set("view engine", "handlebars");
App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use("/", routes);
App.listen(porta, () => {
  console.log(`funcionando na porta: ${porta}`);
});
