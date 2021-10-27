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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})