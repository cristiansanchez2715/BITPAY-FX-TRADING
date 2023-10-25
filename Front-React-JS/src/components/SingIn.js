import React from 'react'
import imgBitPay from '../assets/bitpay-simbol-removebg-preview.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SingIn({dataUser, setDataUser, setUserSesion, setVisibilityNavBar, dataBD, inputUsuarioLogIn, inputContraseñaLogIn, setVisibilitySignIn, setInputUsuarioLogIn, setInputContraseñaLogIn}) {

  const CaptureDataUsuario = (e) => {

    setInputUsuarioLogIn(e.target.value)
  }

  const CaptureDataContraseña = (e) => {

    setInputContraseñaLogIn(e.target.value)
  }

  const offVisibilitySignIn = () =>{
    setVisibilitySignIn(false)
  }

const functionConfimacionUser = (e) => {
  e.preventDefault()

const userPresent = dataBD.find((data) => {
  return data.user === inputUsuarioLogIn && data.password === inputContraseñaLogIn
})
if(userPresent){
  setUserSesion(userPresent.id)
  setVisibilityNavBar(true)
  setDataUser(userPresent)
  setVisibilitySignIn(false)
  console.log(dataUser)
  // 
}
else {
  alert("el usuario no esta registrado")
}

}


  return (
    <form className='sign-in-container' onSubmit={
      functionConfimacionUser
    }>
        <img className='img-bitpay' src={imgBitPay}></img>
        <p className='parrafo-signin'>Ingresa tu Usuario y Contraseña!</p>
    <div className='input-containers'>
<input placeholder='usuario'  className='input' onChange={CaptureDataUsuario}></input>
<input placeholder='contraseña' className='input' onChange={CaptureDataContraseña}></input>
</div>
<div className='btn-container'>
<button className='btn-log' type='submit'>Ingresar</button>
</div>
<div className='footer-login-container'>
<p className='footer-login'><span style={{color: "rgba(17, 0, 255, 0.35)"}}>No estas inscrito?</span><br></br> <Link to="/SingUp" style={{color: "orange", backgroundColor: "#111", borderRadius: "10px"}} onClick={offVisibilitySignIn}>Inscribete Aqui!</Link></p>
</div>


</form>
)
}

export default SingIn