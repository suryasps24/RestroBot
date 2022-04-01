const express = require("express");
const webhook = require("../webhook/webhook");
const { dirname } = require("path");
const path = require("path");
const router = express.Router();
const webhookrouter = router.post("/restro", (req, res) => {
  webhook(req, res);
});
const testBot = router.get("/testbot", (req, res) => {
  res.sendFile(__dirname + "/demo1.html"); //Front End HTML DEMO PAGE
});
module.exports = { webhookrouter, testBot };
