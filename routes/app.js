const express = require("express");
const AppService = require("../services/app");

function appAPI(app, name) {
  const router = express.Router();
  app.use(`/api/${name}`, router);

  const appService = new AppService(name);

  router.get("/", async function (req, res, next) {
    const tags = req.query;
    const key = Object.keys(tags)[0];
    const value = Object.values(tags)[0];

    try {
      const data = await appService.getAllData(key, value);
      res.status(200).json({
        length: data.length,
        message: "Data listed",
        data,
      });
    } catch (error) {
      next(error);
    }
  });

  router.get("/:dataId", async function (req, res, next) {
    const { dataId } = req.params;

    try {
      const data = await appService.getData(dataId);
      res.status(200).json({
        data,
        message: "Data listed",
      });
    } catch (error) {
      next(error);
    }
  });

  router.post("/", async function (req, res, next) {
    const { body: data } = req;
    try {
      const createdData = await appService.createData(data);
      res.status(201).json({
        data: createdData,
        message: "Data created",
      });
    } catch (error) {
      next(error);
    }
  });
  router.put("/:dataId", async function (req, res, next) {
    const { dataId } = req.params;
    const { body: data } = req;

    try {
      const updatedData = await appService.updateData({ dataId, data });
      res.status(200).json({
        data: updatedData,
        message: "Data updated",
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:dataId", async function (req, res, next) {
    const { dataId } = req.params;
    try {
      const deletedData = await appService.deleteData(dataId);
      res.status(200).json({
        data: deletedData,
        message: "Data deleted",
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = appAPI;
