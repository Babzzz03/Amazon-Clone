const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51KrilsFqPsnFWplW8NRVd4i7qkgrVDYM7kBTmeNMmwyMJOgl6l2AQz2IoptIbifJhdxawwVK9jSjPTsBnzRDZMYY00RHiYsZuL')

const app = express();

app.use(cors({ origin: true
}));

app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world') );
app.post("/payments/create", async (request, response) => { 
     
    const total = request.query.total;

    console.log("payment request recieved BOOM", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
     
      
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
      
    });
    
    }
);


app.get("/ve", (request, response) =>
  response.status(200).send("helloooo worlllld")
);

exports.api = functions.https.onRequest(app);



// http://localhost:5001/challenge-9b5aa/us-central1/api
// http://localhost:5001/challenge-9b5aa/us-central1/api
// http://localhost:5001/challenge-9b5aa/us-central1/api