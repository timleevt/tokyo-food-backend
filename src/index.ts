import express from "express";
import handleGetReviews from "./handler/review/handleGetReviews";
import handlePostReview from "./handler/review/handlePostReview";
import handleGetPlaceDetails from "./handler/places/handleGetPlaceDetails";

const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

const port = 5000;

app.get("/alive", (_, res) => {
  res.status(200).send("alive!");
});

// Reviews
app.get("/reviews", handleGetReviews);
app.post("/review", handlePostReview);

// Places
app.get("/place", handleGetPlaceDetails);

app.listen(port, () => console.log(`Running on port ${port}`));
