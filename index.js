const express = require("express");
const app = express();
const { webhookrouter, testBot } = require("./route/route");
app.use(express.json());
app.use(webhookrouter);
app.use(testBot); // front end
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port ", port); //Server listening at mentioned Port.
});
