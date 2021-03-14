const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.dbName = DB_NAME;
  }

  // Connection to database
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect((error) => {
          if (error) {
            console.error(error);
            reject(error);
          }
          console.log("Connected succesfully");
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoLib.connection;
  }

  // Crud
  /**
   * Regresa los registros dependiendo la query y el límite seleccionado
   * @param {string} collection colleción a la cuál se conectará la base de datos
   * @param {Object} query query la cuál hace match con los campos y encuentra registros
   * @param {number} limit limite de registros que se mostrarán
   * @param {Object} fields campos que se mostrarán
   * @returns {Array} datos que regresa
   */
  getAll(collection, query, limit = 0, fields = {}) {
    return this.connect().then((db) => {
      return db
        .collection(collection)
        .find(query)
        .project(fields)
        .limit(limit)
        .toArray();
    });
  }

  get(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((result) => {
        console.log(result);
        return result.insertedId;
      });
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }

  // Other services
}

module.exports = MongoLib;
