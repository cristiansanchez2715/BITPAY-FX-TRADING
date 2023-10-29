import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import BarNav from './components/BarNav';
import SingIn from './components/SingIn';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from 'react';
import SingUp from './components/SingUp';
import axios from 'axios';
import UserProfile from './components/userPage/UserProfile';
import Payment from './components/Payment/Payment';
import Transaccion from './components/Payment/Transaccion'


function App() {

  let [visibilitySignIn, setVisibilitySignIn] = useState(true)

  let[statePrueba, setStatePrueba] = useState(false)
 let [usuarios, setUsuarios] = useState([])
let [inputUsuarioLogIn, setInputUsuarioLogIn] = useState()
let [inputContraseñaLogIn, setInputContraseñaLogIn] = useState()
let [dataBD, setDataBD] = useState()
let[visibilityNavBar, setVisibilityNavBar] = useState(false)
let [userSesion, setUserSesion] = useState()
let [dataUser, setDataUser] = useState()

let[newUsuario, setNewUsuario] = useState({
  name: "", 
user: "", 
email: "", 
birthdate: null, 
gender: "",
 password: "",
 passwordConfirm: "",
 description: ""
})

const apiUrl = "http://localhost:4000/UsersRegisters"

// logica conexion con el backend
let sendDataToApi = () => {

axios.post(apiUrl, newUsuario)
.then(response => console.log(response.data))
.catch(error =>console.error(error))
setStatePrueba(false)

}


useEffect(() => {
  console.log(newUsuario)
},[statePrueba])




// logica traer datos de la base de datos
const getDataToBD = () => {

const urlBD = "http://localhost:4000/UsersRegisters/Frontend/Comunication"

fetch(urlBD)
.then(res => res.json())
.then(data => {
setDataBD(data)
console.log(dataBD)
}).catch(err => console.log(err))

}


// USEEFFECTS

useEffect(() => {
  // Realiza acciones basadas en los datos en dataBD aquí
  console.log(dataBD); // Aquí dataBD debería reflejar los datos actualizados
}, [dataBD]);
useEffect(sendDataToApi,[statePrueba])
useEffect(getDataToBD, [])
useEffect(() => {
  console.log(dataBD)
}, [dataBD])

useEffect(() => {
  setNewUsuario({
      name: '',
      user: '',
      email: '',
      birthdate: null,
      gender: '',
      password: '',
      passwordConfirm: '',
    });}, [statePrueba])

    useEffect(getDataToBD, [statePrueba])
// useEffect(() => {
//   console.log(dataUser)
// }, [userSesion])


// Logica Carrito De Compras

const products = [
  {name: "Inversion 1", description: "Invierte  50$ y lleve  550$", price: 50},
  {name: "Inversion 2", description: "Invierte  60$ y lleve  660$", price: 60},
  {name: "Inversion 3", description: "Invierte  70$ y lleve  770$", price: 70},
  {name: "Inversion 4", description: "Invierte  80$ y lleve  880$", price: 80},
  {name: "Inversion 5", description: "Invierte  90$ y lleve  990$", price: 90},
  {name: "Inversion 6", description: "Invierte  100$ y lleve  1100$", price: 100},
  {name: "Inversion 7", description: "Invierte  200$ y lleve  2200$", price: 200},
  {name: "Inversion 8", description: "Invierte  300$ y lleve 3300$", price: 300},
  {name: "Inversion 9", description: "Invierte  400$ y lleve  $4500$", price: 400},
  {name: "Inversion 10", description: "Invierte  500$ y lleve $5500 $", price: 500},
  {name: "Inversion 11", description: "Invierte  600$ y lleve $6600 $", price: 600},
  {name: "Inversion 12", description: "Invierte  700$ y lleve $7700 $", price: 700},
  {name: "Inversion 13", description: "Invierte  800$ y lleve $8800 $", price: 800},
  {name: "Inversion 14", description: "Invierte  900$ y lleve $9900 $", price: 900},

]




// Cerrar Sesion

const closeSesion = () => {
  setUserSesion(null)
  setVisibilityNavBar(false)
  setDataUser(null)

  setVisibilitySignIn(true)
}
// logica carrito de compras

const [totalCompra, setTotalCompra] = useState({name: "", description: "", price: 0})



  return (
    <div className="App">

      <Router>
      <BarNav closeSesion={closeSesion} userSesion={userSesion} visibilityNavBar={visibilityNavBar}></BarNav>
<Routes>

<Route path="/" element={<Home />}></Route>
<Route path="/SingUp" element={<SingUp  setVisibilitySignIn={setVisibilitySignIn} userSesion={userSesion} dataBD={dataBD} setStatePrueba={setStatePrueba} newUsuario={newUsuario} setNewUsuario={setNewUsuario} />}></Route>
<Route path="/Buys"></Route>
<Route path="/information"></Route>
<Route path={`/User/${userSesion}`} element={<UserProfile setDataUser={setDataUser} dataUser={dataUser} />}></Route>
<Route path='/Payments' element={<Payment setTotalCompra={setTotalCompra} totalCompra={totalCompra} products={products} />}></Route>
<Route path='/Payments/Transaccion/:item' element={<Transaccion />}></Route>
</Routes>

        
        {/* <Home></Home> */}
       {visibilitySignIn && <SingIn dataUser={dataUser} setDataUser={setDataUser} setUserSesion={setUserSesion} inputUsuarioLogIn={inputUsuarioLogIn} inputContraseñaLogIn={inputContraseñaLogIn} setVisibilityNavBar={setVisibilityNavBar} dataBD={dataBD} setVisibilitySignIn={setVisibilitySignIn} setInputUsuarioLogIn={setInputUsuarioLogIn} setInputContraseñaLogIn={setInputContraseñaLogIn}></SingIn>} 
      </Router>
      
    </div>
  );
}

export default App;
