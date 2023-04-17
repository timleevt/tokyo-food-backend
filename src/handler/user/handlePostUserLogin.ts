import { Request, Response } from "express";
import { z } from "zod";
import getUserPw from "../../db/getUserPw";
import bcrypt from "bcrypt";

const postLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const handlePostUserLogin = async (req: Request, res: Response) => {
  const { username, password } = postLoginSchema.parse(req.body);
  const pwFromDb = await getUserPw({ username });
  if (username == null) {
    return res.status(400).send("Cannot find user");
  }

  if (pwFromDb == null) {
    return res.status(400).send("User could not be found");
  }

  try {
    if (await bcrypt.compare(password, pwFromDb)) {
      res.send("Success!");
    } else {
      res.status(500).send("Incorrect password");
    }
  } catch {
    res.status(500).send();
  }
};

export default handlePostUserLogin;
