import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send({
    message: "Hello World!"
  });
});

const portNumber = 8000;

app.listen(portNumber, () => {
  console.log(`Server running on port ${portNumber}`);
});


// ESM syntax is supported.
// export {}