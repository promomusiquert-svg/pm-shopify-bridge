import express from "express";

const app = express();
app.use(express.json({ type: "*/*" }));

app.get("/", (_, res) => res.send("alive"));

app.post("/webhook/shopify", (req, res) => {
  console.log("WEBHOOK RECU");
  console.log("Order name:", req.body?.name);
  console.log("Line items:", req.body?.line_items);
  res.status(200).send("ok");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
