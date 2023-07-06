const app = require("./app");
var http = require("http");
require("dotenv").config();
/* app.get("/", (req, res) => {
  const fetched = axios.get("https://random-data-api.com/api/v2/users");
  fetched
    .then((result) => {
      //console.log(result.data);
      return res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
  //res.send("hello its mee");
}); */

/* app.get("/:id", (req, res) => {
  const id = req.params.id;
  const check = id.includes("+") || id.includes("-") || id.includes("*") || id.includes("/");
  if (check) {
    return res.status(200).send({ result: eval(id) });
  }
  return res.status(500).send({ error: "VALIDATION ERROR" });
}); */

/* console.log("*****************");
const dir = "./inputFolder";
var paths = fs.readdirSync(dir);
var files = [];
var objects = [];

paths.forEach((path) => {
  const nested = dir + "/" + path;
  files.push(nested);
});

files.forEach((file) => {
  let check = fs.statSync(file);
  if (check.isDirectory()) {
    var nestedPath = fs.readdirSync(file);
    files.push(file + "/" + nestedPath);
  } else {
    console.log("");
  }
});
console.log(files);
console.log("*****************"); */

var server = http.createServer(app);
/** SOCKET */
io = module.exports = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  //    transports :  ['websocket']
});
require("./socket/socket").__init__();

const db = require("./models");

try {
  db.sequelize.sync({ force: false }).then(async () => {
    app.listen(process.env.APP_PORT, console.log("Server started on port" + process.env.APP_PORT));
  });
} catch (error) {
  console.log("Failed to sync db: " + error);
}
