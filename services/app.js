const MongoLib = require("../lib/mongo");

class AppService {
  constructor(collection) {
    this.collection = collection;
    this.mongoDB = new MongoLib();
  }

  async getAllData(key, value) {
    const query = key && { [key]: { $regex: `.*${value}.*` } };
    console.log("Query", query);
    const data = await this.mongoDB.getAll(this.collection, query);
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
