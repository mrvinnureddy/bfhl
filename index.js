const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome!! This app is working...</h1>");
});

app.post("/bfhl", (req, res) => {
  let { data } = req.body;
  if (!data) {
    res.status(400).json({
      is_success: false,
    });
    return;
  }
  let numbers = [];
  let alphabets = [];
  try {
    for (let i = 0; i < data.length; i++) {
      if (/^[A-Z]+$/i.test(data[i])) {
        alphabets.push(data[i]);
      } else {
        numbers.push(data[i]);
      }
    }
    let result = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers,
      alphabets,
    };
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({
      is_success: false,
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("App listening to PORT: ", PORT);
});
