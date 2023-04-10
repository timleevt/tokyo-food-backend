// import fetch from 'node-fetch';
import { Request, Response } from "express";
import axios from "axios";

const handleGetPlaceDetails = async (req: Request, res: Response) => {
  const address =
    "Hitachino Brewing Lab, 1 Chome-２５-4 Kanda Sudacho, Chiyoda City, Tokyo, Japan";

  const data = await axios.get(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`,
    {
      params: {
        input: address,
        inputtype: "textquery",
        key: "GOOGLEMAPSKEYHERE",
        fields: "name,price_level,rating,geometry",
      },
    }
  );

  return res.send(data.data);
};

export default handleGetPlaceDetails;
