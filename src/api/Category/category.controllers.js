const db = require("../../../models/index");
const sequelizeObject = db.categories;
const { getDataFromRedis, setDataInRedis } = require("../../../config/redis.config");

// Create and Save a new ShemaDb
exports.create = async (req, res) => {
  /* Creating a new session in the database and then indexing it in Elasticsearch. */
  const body = req.body;
  await sequelizeObject
    .create(body)
    .then(async (data) => {
      try {
        //new elasticSearch().init("assures", "assures", [plainObject]);
        return res.send({ message: data });
      } catch (error) {
        return res.send({ message: error });
        //return handleMessage.errorResponse(req, res, error.message || "Some error occurred when sending email inscription.");
      }
    })
    .catch((err) => {
      return res.send({ message: error });
      //return handleMessage.errorResponse(req, res, err.message || "Some error occurred while creating the sequelizeObject.");
    });
};

exports.findAll = async (req, res) => {
  // Use Redis Caching (get)
  const REDIS_KEY = "categories";
  let results;
  let dataFromCache = false;
  const cachedResults = await getDataFromRedis(REDIS_KEY);
  if (cachedResults) {
    dataFromCache = true;
    results = JSON.parse(cachedResults);
    console.log("from cache");
    res.send(results);
  } else {
    await sequelizeObject
      .findAll()
      .then(async (data) => {
        await setDataInRedis(REDIS_KEY, data);
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};
