'use strict';

const express = require("express");
const app = express();

var port = process.env.PORT || 3000;

var operations = {
  fatorial: function (n) {
    if (n < 2)
      return 1;
    return operations.fatorial(n - 1) * n;
  },
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  }
}

app.use(express.json());

app.get('/', function (req, res) {
  res.end("Hello World!");
});

app.post("/operations/fatorial", function (req, res) {
  const request = req.body;

  if (request.fatorial < 0)
    res.send("Erro");
  else {
    var result = { "fatorial": operations.fatorial(request.fatorial) }

    res.json(result);
  }
});

app.post("/operations/add", function (req, res) {
  const request = req.body;

  var result = { "soma": operations.add(request.soma[0], request.soma[1]) }

  res.json(result);
});

app.post("/operations/sub", function (req, res) {
  const request = req.body;

  var result = { "sub": operations.sub(request.sub[0], request.sub[1]) }

  res.json(result);
});

app.listen(port);
