const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IQvOYGZGX43o4mGhEWMTCu9V8YjAMocbDnOD2PBOMsKJ0aY7vThCvHV6CddtTFyQLIAQiuL5uLqAQwbPNXpVsKm00c6TKX8Y5"
);

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "try",
  });

  //   OK
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/react-ecommerce-aae81/us-central1/api
