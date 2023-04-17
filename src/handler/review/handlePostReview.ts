import { Request, Response } from "express";
import { z } from "zod";
import postReview from "../../db/postReview";

const postReviewSchema = z.object({
  name: z.string(),
  address: z.string(),
  review: z.string().max(280),
  isFavorited: z.boolean(),
  username: z.string(),
});

const handlePostReview = async (req: Request, res: Response) => {
  const data = postReviewSchema.parse(req.body);
  try {
    const review = await postReview(data);
    res.send({review});
  } catch (e) {
    return res.status(500).json({ error: "internal server error" });
  }
};

export default handlePostReview;
