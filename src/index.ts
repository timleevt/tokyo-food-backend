import * as dotenv from 'dotenv';
dotenv.config();
import express from "express";
import handleGetReviews from "./handler/review/handleGetReviews";
import handlePostReview from "./handler/review/handlePostReview";
import handleGetPlaceDetails from "./handler/places/handleGetPlaceDetails";
import handlePostUser from "./handler/user/handlePostUser";
import handlePostUserLogin from "./handler/user/handlePostUserLogin";

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

// User
// app.get("/user", handleGetUser);
app.post("/users", handlePostUser);
app.post("/users/login", handlePostUserLogin);

// Reviews
app.get("/reviews", handleGetReviews);
app.post("/review", handlePostReview);

// Places
app.get("/place", handleGetPlaceDetails);

app.listen(port, () => console.log(`Running on port ${port}`));
