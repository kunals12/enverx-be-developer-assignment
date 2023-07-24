const express = require("express");
const router = express();
const asyncWrapper = require("../middlewares/asyncWrapper");

router
  .route("/")
  .get(
    asyncWrapper(async (req, res) => {
      res.status(200).json({
        res: "Getting all blog posts",
      });
    })
  )
  .post(
    asyncWrapper(async (req, res) => {
      res.status(200).json({
        res: "create blog posts",
      });
    })
  );

router
  .route("/:id")
  .get(
    asyncWrapper(async (req, res) => {
      res.status(200).json({
        res: "get blog post by id",
      });
    })
  )
  .put(
    asyncWrapper(async (req, res) => {
      res.status(200).json({
        res: "update blog post by id",
      });
    })
  )
  .delete(
    asyncWrapper(async (req, res) => {
      res.status(200).json({
        res: "delete blog post by id",
      });
    })
  );

module.exports = router;
