import React, { useState } from 'react'

function SingUp({ dataBD, setStatePrueba, setNewUsuario, newUsuario}) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
      setNewUsuario({
        ...newUsuario,
        [name]: value
      });
    
  };
  
  const handleSubmit = (e) => {
    if(newUsuario.password === newUsuario.passwordConfirm){
    e.preventDefault();


    // const dateParts = newUsuario.birthdate.split('--');
      // const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      // Actualiza la fecha en el objeto newUser
      // newUsuario.birthdate = formattedDate;
    // Aquí puedes agregar la lógica para manejar los datos del formulario
    console.log(newUsuario);
    setStatePrueba(true)
  }
    else{
      alert("password incorrect")
    }
  };

// comprobaciones relacionadas con la base de datos

const comprobacionUserUnico = () => {
if(dataBD.includes(newUsuario.user))  {
 alert("este usuario ya esta registrado") 

}
else{
  return true
}
}

const comprobacionCorreoUnico = () => {
if(dataBD.includes(newUsuario.email)){
  alert("este email ya esta registrado")
  
}
else{
  
  return true
}

}
 
const handleFormSubmit = (e) => {
  e.preventDefault();

  if (comprobacionCorreoUnico() && comprobacionUserUnico()) {
    handleSubmit(e);
  }
};

  return (
    <form onSubmit={handleFormSubmit} className="signup-form">
  <div className="signup-input-container">
    <label className="signup-label">Nombre:</label>
    <input
      type="text"
      name="name"
      placeholder="Escribe tu nombre"
      onChange={handleChange}
      value={newUsuario.name}
      className="signup-input"
    />
  </div>
  <div className="signup-input-container">
    <label className="signup-label">Nombre de usuario:</label>
    <input
      type="text"
      name="user"
      placeholder="Elige un nombre de usuario"
      onChange={handleChange}
      value={newUsuario.user}
      className="signup-input"
    />
  </div>
  <div className="signup-input-container">
    <label className="signup-label">Correo Electrónico:</label>
    <input
      type="email"
      name="email"
      placeholder="nombre@ejemplo.com"
      onChange={handleChange}
      value={newUsuario.email}
      className="signup-input"
    />
  </div>
  <div className="signup-input-container">
    <label className="signup-label">Fecha de Nacimiento:</label>
    <input
  type="date"
  name="birthdate"
  onChange={handleChange}
  value={newUsuario.birthdate}
  className="signup-input"
/>
  </div>
  <div className="signup-input-container">
    <label className="signup-label">Género:</label>
    <select
      type="text"
      name="gender"
      placeholder="Escribe tu género"
      onChange={handleChange}
      value={newUsuario.gender}
      className="signup-input"
    > 
    <option>Male</option>
    <option>Female</option>
    </select> 
  </div>
  <div className="signup-input-container">
    <label className="signup-label">Contraseña:</label>
    <input
      type="password"
      name="password"
      placeholder="Crea una contraseña segura"
      onChange={handleChange}
      value={newUsuario.password}
      className="signup-input"
    />
    <input
      type="password"
      name="passwordConfirm"
      placeholder="Confirma tu contraseña"
      onChange={handleChange}
      value={newUsuario.passwordConfirm}
      className="signup-input"
    />
  </div>
  <button type="submit" className="signup-button">Registrarse</button>
</form>
  )
}

export default SingUp


// // const sendUser = () => {
// // let theNewUser = {name: nameState, user: userState, email: emailState, birthday: birthDayState, gender: genderState, password: passwordState}
// //   setNewUsuario(theNewUser)
// // }

// const confirmPassword = (e) => {
//   if(passwordState === passwordConfirmState){
//     e.preventDefault()
//     sendUser()
//   }
//   else{
//     alert("las contraseñas no coinciden")
//   }
// }
