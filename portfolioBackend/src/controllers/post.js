// Controller is how we handle the logic for interacting with our DB or fetching
import prisma from "../db/db";
import dotenv from "dotenv";

dotenv.config();

// Create a post controller
export const createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        user: {
          connect: { id: process.env.USER_ID },
        },
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
};
