require("./EnvironmentSetup");
require("./MySqlSetup.js");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

let dist = {};

app.get("/", (req, res) => {
  // console.log("The request has come to ", process.pid);
  if (dist[process.pid]) {
    dist[process.pid] = dist[process.pid] + 1;
  } else {
    dist[process.pid] = 1;
  }
  res.send(`Hello World. Application is running on ${process.pid}`);
});

setTimeout(() => {
  console.log("dist", dist);
}, 50000)

app.post("/user", (req, res) => {
  let user = req.body;
  let {email, phone, name} = user;

  let query = `INSERT INTO users (name, email, phone) VALUES ("${name}", "${email}", "${phone}")`;

  db.query(query, user, (err, data) => {
    if (err) {
      throw err;
    }

    res.status(201).send({
      userId: data.insertId
    });
  });
});

app.get("/users/:id", (req, res) => {
  let {id} = req.params;

  let query = `SELECT * FROM users WHERE id=${id}`;

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.send(result);
  })
});

app.get("/users", (req, res) => {
  let {limit = 10} = req.query;

  let query = `SELECT * FROM users LIMIT ${limit}`;

  db.query(query, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
})

app.patch("/users/:id", (req, res) => {
  let {id} = req.params;
  let {name, phone, email} = req.body;

  let query = `UPDATE users SET
    ${name ? `name="${name}"`: ""} 
    ${phone ? `, phone="${phone}"` : "" } 
    ${email ? `, email="${email}" `: ""} 
    WHERE id=${id}`;

  db.query(query, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

app.delete("/users/:id", (req, res) => {
  let {id} = req.params;

  let query = `DELETE FROM users where id = ${id}`;

  db.query(query, (err, result) => {
    if (err) {
      throw err;
    }

    res.status(204).send()
  })
});


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
})

