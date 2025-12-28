import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      name: "aryan",
      age: 21,
      city: "delhi",
    },
    {
      name: "john",
      age: 25,
      city: "new york",
    },
    {
      name: "maria",
      age: 30,
      city: "los angeles",
    },
    {
      name: "li",
      age: 28,
      city: "beijing",
    },
    {
      name: "lissy",
      age: 18,
      city: "India",
    },
    {
      name: "pissy",
      age: 18,
      city: "China",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
