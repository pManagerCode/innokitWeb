const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); // 解决跨域问题

app.use(bodyParser.json({ limit: "10mb", extended: true })); // handle json data
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true })); // handle URL-encoded data
app.set("trust proxy", true);

//https://github.com/mysqljs/mysql
var mysql = require("mysql");
//https://github.com/mysqljs/mysql#pooling-connections
var conn = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Chen2Luo!!",
  database: "management",
});

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

//For sending email. https://juejin.im/post/5e17ea735188254d3c283b6d
app.use(cors());
app.use(express.static(__dirname + "/")); //静态目录

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;
  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  /////////////////////
  require("./file/file")(app);

  /////////////////////

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
