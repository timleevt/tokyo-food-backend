import { Request, Response } from "express";
import getReviews from "../../db/getReviews";

const handleGetReviews = async (_: Request, res: Response) => {
  return res.send(await getReviews());
};

export default handleGetReviews;
