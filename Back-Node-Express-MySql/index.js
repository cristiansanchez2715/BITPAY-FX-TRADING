const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const mysql = require("mysql2")

 
// MONTANDO API

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
res.send(`<h1>server montado</h1>`)
})

app.listen(port, () => {
    console.log("puerto escuchado")
})


// REGISTRO NUEVO USUARIO ENDPOINT
const connection = mysql.createConnection({
    host: 'localhost',
  user: 'root',
  password: 'spizamarillo2715',
  database: 'bitpaytrading'
})
console.log("hola")

connection.connect(err => {
    if(err){
        console.error("error en la conexion")
    }
    else {
        console.log("base de datos conectada")
    }
})


app.post("/UsersRegisters", (req, res) => {
    const newUser = req.body
 
    console.log("funciono")
    console.log(newUser)
 
 
   const sql = "INSERT INTO users (name, user, email, birthdate, gender, password) VALUES (?, ?, ?, ?, ?, ?)";
   
 
   connection.query(sql, [newUser.name, newUser.user, newUser.email, newUser.birthdate, newUser.gender, newUser.password], (err, results) => {
     if (err) {
       console.error('Error al insertar usuario en la base de datos:', err);
       res.status(500).send('Error al registrar el usuario');
     } else {
       console.log('Usuario registrado con éxito');
       res.send('Usuario registrado con éxito');
     }
   });
 })



// API PARA LA COMUNICACIÓN ENTRE EL FRONTEND Y LA BASE DE DATOS

app.get("/UsersRegisters/Frontend/Comunication", (req, res) => {
    
   const sql = "SELECT * FROM users"
connection.query(sql, (err, results) => {

    if(err){
        console.error("ha ocurrido un error en la conexion con la base de datos")
        res.status(500).send("error al obtener usuarios")
    }else {
        console.log("usuarios obtenidos")
        res.json(results)
    }
})
})

