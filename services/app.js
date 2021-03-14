const MongoLib = require("../lib/mongo");

function getQuerySearch(tags) {
  let query = {};
  for (const field in tags) {
    if (field !== "limit" && field !== "fields") {
      query[field] = { $regex: `.*${tags[field]}.*` };
    }
  }
  return query;
}

function getQueryFields(fields) {
  let query = {};
  for (let i = 0; i < fields.length; i++) {
    query[fields[i]] = 1;
  }
  return query;
}

class AppService {
  constructor(collection) {
    this.collection = collection;
    this.mongoDB = new MongoLib();
  }

  async getAllData(tags, limit) {
    const query = tags && getQuerySearch(tags);
    const { fields } = tags;
    const queryFields = fields ? getQueryFields(fields.split(" ")) : {};

    const data = await this.mongoDB.getAll(
      this.collection,
      query,
      limit,
      queryFields
    );
    return data || [];
  }

  async getData(dataId) {
    const data = await this.mongoDB.get(this.collection, dataId);
    return data || {};
  }

  async createData(data) {
    const createDataId = await this.mongoDB.create(this.collection, data);
    return createDataId;
  }

  async updateData({ dataId, data }) {
    const updatedData = await this.mongoDB.update(
      this.collection,
      dataId,
      data
    );
    return updatedData;
  }

  async deleteData(dataId) {
    const deletedData = await this.mongoDB.delete(this.collection, dataId);
    return deletedData;
  }
}

module.exports = AppService;
