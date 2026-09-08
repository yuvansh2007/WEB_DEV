const express = require("express");
const app = express();

//Use of query params
//Example http://localhost:3000/?q=21312321312
app.get("/", (req, res) => {
  // request.query is an object keys depend on the key value provided URL
  const q = req.query.q;
  res.send(`Hi, ${q}`);
});

// Use of params in route for dynamic routing
//Example http://localhost:3000/user/11/profile
app.get("/user/:id/profile", (req, res) => {
  // request.params is an object keys depend on the key provided in route
  const id = req.params.id;
  res.send(`Hey From USER id = ${id}`);
});

//parses incoming body and adds it to request so that we can access it
app.use(express.json()); //this when sending raw json
app.use(express.urlencoded({ extended: true })); // this for sending x-www-form-urlencoded

app.post("/customer", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("this is post method");
});

app.put("/put-customer", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("this is PUT method");
});

app.patch("/patch-customer", (req, res) => {
  const body = req.body;
  console.log(body);
  res.send("this is PATCH method");
});

app.delete("/delete-customer/:name", (req, res) => {
  const name = req.params.name;
  console.log(`NAME TO DELETE ${name}`);
  res.send("this is DELETE method");
});

app.listen(3000, () => {
  console.log("Server started, http://localhost:3000/");
});