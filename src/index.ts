import express from "express";

const app = new express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening: ${port}`)
});
