import { Request, Response } from "express";
import { z } from "zod";
import bcrypt from "bcrypt";
import postUser from "../../db/postUser";

const postUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
});

const handlePostUser = async (req: Request, res: Response) => {
  const { username, password, email } = postUserSchema.parse(req.body);
  const isLocal = req.body.isLocal === "true";

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    await postUser({ username, hashedPassword, email, isLocal });
    res.sendStatus(200);
  } catch (e) {
    return res.status(500).json({ error: "internal server error" });
  }
};

export default handlePostUser;
