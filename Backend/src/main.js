const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMessage, getMessage } = require("./user");

app.get("/allchat", async (req, res) => {
  const list = await getMessage();
  res.json(list);
});

app.post("/addchat", async (req, res) => {
  console.log(req.body);
  const msg = req.body;
  await addMessage(msg);
  res.json({ mesagae: "chat added to table...." });
});

app.listen(4000, () => console.log("server started"));
