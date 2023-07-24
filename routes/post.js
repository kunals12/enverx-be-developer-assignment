const express = require("express");
const router = express();
const asyncWrapper = require("../middlewares/asyncWrapper");
const Post = require("../models/post");
const errorHandlerMiddleware = require("../middlewares/errorHandler");

router
  .route("/")
  .get(
    asyncWrapper(async (req, res) => {
      try {
        if (req.query.sortBy == "name") {
          console.log("sorting by name");
          const posts = await Post.find().sort({ title: 1 });
          res.status(200).json(posts);
        } else if (req.query.sortBy == "date") {
          console.log("sorting by date");
          const posts = await Post.find().sort({ createdAt: 1 });
          res.status(200).json(posts);
        } else {
          const posts = await Post.find();
          res.status(200).json({ posts });
        }
      } catch (error) {
        res.status(404).json({
          error: "Not Found",
        });
      }
    })
  )
  .post(
    asyncWrapper(async (req, res) => {
      try {
        // console.log(req.body);
        const { title, description } = req.body;
        const post = await Post.create({ title, description });
        res.status(201).json({
          post: post,
        });
      } catch (err) {
        // console.log(err);
        res.status(500).json({
          error: err,
        });
      }
    })
  );

router
  .route("/:id")
  .get(
    asyncWrapper(async (req, res) => {
      try {
        const id = req.params.id;
        const post = await Post.findById(id);
        if (!post) {
          res.status(404).json({
            error: "Post Not Found",
          });
        }

        res.status(200).json({ post });
      } catch (error) {
        errorHandlerMiddleware;
      }
    })
  )
  .put(
    asyncWrapper(async (req, res) => {
      try {
        const id = req.params.id;
        const { title, description } = req.body;
        const post = await Post.findByIdAndUpdate(
          id,
          { title, description },
          { new: true }
        );

        if (!post) {
          res.status(404).json({
            error: "Post Not Found",
          });
        }

        res.status(200).json({ post });
      } catch (error) {
        errorHandlerMiddleware;
      }
    })
  )
  .delete(
    asyncWrapper(async (req, res) => {
      const id = req.params.id;
      const post = await Post.findByIdAndDelete(id);

      if (!post) {
        return res.status(404).json({ msg: "No post found to delete" });
      }

      res.status(200).json({ deletedPost: post });
    })
  );

module.exports = router;
