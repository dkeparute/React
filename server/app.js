// SERVERIO IMPORTAS
const express = require('express')
const app = express()
const port = 3003
// SQL IMPORTAS
const mysql = require('mysql')
// CORSE PRADZIA
const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());
// CORSE PABAIGA

// MY SQL CONNECTION PRADZIA
const con = mysql.createConnection({
  host: "localhost",
  user: "zoo",
  password: "zoo",
  // butina prideti duomenu baze
  database: "zoo"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
// MY SQL CONNECTIONPABAIGA

//   ROUTINGAS - NUSAKOMAS SERVERIO KELIAS IR KAS IVYKS KAI NARSYKLE PATEKS I TA KELIA
app.get('/', (req, res) => {
  res.send('labas, ka tu? As tai nieko!')
})

// req  - stringinis objektas kuris ateina is narsykles

app.get('/labas/:id', (req, res) => {
  res.send(`labas ${req.params.id} tau`)
})

app.get('/test', (req, res) => {
  res.send(JSON.stringify({ test: 'OK' }))
})

//is duomenu bazes pasiimam visus gyvunus
app.get('/animals', (req, res) => {
  const sql = `
  SELECT *
  FROM animals
  `;
  // uzklausa atiduodama i conectiona ir uzklausiame jog pateiktu rezultatus, o jeigu randa klaida tegu meta tiesiai i veida 
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// Prideti gyvuna
// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);
app.post('/animals', (req, res) => {
  const sql = `
      INSERT INTO animals
      (name, type, weight, born)
      VALUES (?, ?, ?, ?)
  `;
  con.query(sql, [
    req.body.name,
    req.body.type,
    req.body.weight,
    req.body.born
  ], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// / Redaguoja gyvuna
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
app.put('/animals/:id', (req, res) => {
  const sql = `
        UPDATE animals
        SET name = ?, type = ?, weight = ?, born = ?
        WHERE id = ?
    `;
  con.query(sql, [
    req.body.name,
    req.body.type,
    req.body.weight,
    req.body.born,
    req.params.id
  ], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// Trina gyvuna
// DELETE FROM table_name
// WHERE some_column = some_value
app.delete('/animals/:id', (req, res) => {
  const sql = `
        DELETE FROM animals
        WHERE id = ?
        `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  })
})

// Randa visus skirtingus DISTINC gyvunu tipus:

app.get('/animals-type', (req, res) => {
  const sql = `
  SELECT DISTINCT type
  FROM animals
  `;
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// Rodo tik tam tikro tipo gyvunus:

app.get('/animals-filter/:type', (req, res) => {
  const sql = `
  SELECT *
  FROM animals
  WHERE TYPE =?
  `;
  con.query(sql, [req.params.type], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// paieska pagal varda
// SELECT column1, column2, ...
// FROM table_name
// WHERE columnN LIKE pattern;
app.get('/animals-name', (req, res) => {
  const sql = `
      SELECT *
      FROM animals
      WHERE name LIKE ?
  `;
  con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// statistika
app.get('/stats', (req, res) => {
  const sql = `
      select count(id) as count, sum(weight) as weight, avg(weight) as average
      FROM animals
  `;
  con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})
// grupine statistika

app.get('/group-stats', (req, res) => {
  const sql = `
  select count(id) as count, type
  from animals
  group by type
  order by count(id) desc, type
  `;
  con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
