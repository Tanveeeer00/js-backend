import express from "express";
const app = express();

// app.use(express.static('dist'))  // bad practice! never use it

app.get("/", (req, res) => {
  res.send("<h1>For jokes go on jokes route</h1>");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "2nd joke",
      content: "This is a 2nd joke",
    },
    {
      id: 3,
      title: "3rd joke",
      content: "This is a 3rd joke",
    },
    {
      id: 4,
      title: "4th joke",
      content: "This is a 4th joke",
    },
    {
      id: 5,
      title: "5th joke",
      content: "This is a 5th joke",
    },
    {
      id: 6,
      title: "6th joke",
      content: "This is a 6th joke",
    },
    {
      id: 7,
      title: "7th joke",
      content: "This is a 7th joke",
    },
    {
      id: 8,
      title: "8th joke",
      content: "This is a 8th joke",
    },
    {
      id: 9,
      title: "9th joke",
      content: "This is a 9th joke",
    },
    {
      id: 10,
      title: "10th joke",
      content: "This is a 10th joke",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server serve on this port ${port}`);
});
