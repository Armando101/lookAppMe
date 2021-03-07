const express = require("express");
const AppService = require("../services/app");

function appAPI(app) {
  const router = express.Router();
  app.use(`api/${app}`, router);

  const appService = new AppService();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;
    try {
      const data = await appService.getAllData(tags);
      res.status(200).json({
        data,
        message: "Data listed",
      });
    } catch (error) {
      next(eror);
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
    const { body: data } = req.body;
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
    const { body: data } = req.body;

    try {
      const updatedData = await appService.updateData(dataId, data);
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

exports.module = appAPI;
