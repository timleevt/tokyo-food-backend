// import fetch from 'node-fetch';
import { Request, Response } from "express";
import axios from "axios";

require('dotenv').config();

const handleGetPlaceDetails = async (req: Request, res: Response) => {
  // TODO: validation
  const address = req.query.address;

  if (!address) {
    return res.send(400);
  }

  const data = await axios.get(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`,
    {
      params: {
        input: address,
        inputtype: "textquery",
        key: process.env.GOOGLE_MAPS_API,
        fields: "name,price_level,rating,geometry",
      },
    }
  );

  return res.send(data.data);
};

export default handleGetPlaceDetails;
