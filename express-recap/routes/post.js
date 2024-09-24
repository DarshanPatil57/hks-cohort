const express = require("express");
const {
  getPosts,
  getSinglePosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const router = express.Router();

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getSinglePosts);

//   new post
router.post("/", createPost);

// Update post
router.put("/:id", updatePost);

// Delete post
router.delete("/:id", deletePost);

module.exports = router;
