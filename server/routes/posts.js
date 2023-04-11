import express from "express";
import { commentPost, getFeedPosts, getPostComments, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, commentPost);

/* GET COMMENTS ALONG WITH USERS */
router.get("/:id/comments", verifyToken, getPostComments);

export default router;
