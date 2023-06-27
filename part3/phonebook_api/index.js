const express = require("express");
const morgan = require("morgan")
const cors = require("cors")

const app = express();

let data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(cors())
app.use(express.json());
// app.use(requestLogger)
morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan('tiny :body'))

app.get("/api/persons", (request, response) => {
  response.json(data);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const personData = data.filter((p) => p.id === id);

  response.json(personData.length > 0 ? personData[0] : {});
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  data = data.filter((p) => p.id !== id);

  response.status(204).end();
});
app.get("/info", (request, response) => {
  response.send(`<p>Phonebook has info for ${data.length} people <br/>
    ${new Date().toLocaleString()}</p>`);
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body) {
    return response.status(404).json({
      error: "content missing",
    });
  }

  const person = {
    id: Math.trunc(Math.random() * 10000000),
    name: body.name,
    number: body.number,
  };
  data.concat(person);

  response.json(person)
});
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
