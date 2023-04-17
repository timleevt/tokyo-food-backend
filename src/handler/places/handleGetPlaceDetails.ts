// import fetch from 'node-fetch';
import { Request, Response } from "express";
import axios from "axios";

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
        key: "AIzaSyCyiQahOYzvywvYvXrPsftGUb5-srTFJJo",
        fields: "name,price_level,rating,geometry",
      },
    }
  );

  return res.send(data.data);
};

export default handleGetPlaceDetails;
