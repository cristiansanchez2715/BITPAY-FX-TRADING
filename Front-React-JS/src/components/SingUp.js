import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function SingUp({setVisibilitySignIn, dataBD, setStatePrueba, setNewUsuario, newUsuario, userSesion}) {
let [userUnique, setUserUnique] = useState(true)
let [emailUnique, setEmailUnique] = useState(true)
  

const navegar = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
      setNewUsuario({
        ...newUsuario,
        [name]: value
      });
    
  };
  
  const handleSubmit = (e) => {
    if(newUsuario.password === newUsuario.passwordConfirm){
    if(userUnique && emailUnique){
      e.preventDefault();
console.log(newUsuario);
    setStatePrueba(true)
    navegar("/") 
    alert("usuario registrado con exito")
    setVisibilitySignIn(true)
  }}
    else{
      alert("password incorrect")
    }
  };


const comprobacionUserUnico = () => {
  if (!dataBD || dataBD.length === 0) {
    return true; // No hay usuarios registrados, se puede continuar
  }
  
  const userExist = dataBD.some((user) => user.user === newUsuario.user);
  if (userExist) {
    alert("Este nombre de usuario ya está registrado");
    setUserUnique(false);
    return false; // No es un usuario único, no se puede continuar
  } else {
    setUserUnique(true);
    return true; // Es un usuario único, se puede continuar
  }
};

// Comprobación de correo electrónico único
const comprobacionCorreoUnico = () => {
  if (!dataBD || dataBD.length === 0) {
    return true; // No hay usuarios registrados, se puede continuar
  }
  
  const emailExist = dataBD.some((em) => em.email === newUsuario.email);
  if (emailExist) {
    alert("Este correo electrónico ya está registrado");
    setEmailUnique(false);
    return false; // No es un correo electrónico único, no se puede continuar
  } else {
    setEmailUnique(true);
    return true; // Es un correo electrónico único, se puede continuar
  }
};

// Manejo del formulario
const handleFormSubmit = (e) => {
  e.preventDefault();
  
  if (comprobacionUserUnico() && comprobacionCorreoUnico()) {
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
  onChange={(e) => {
    setNewUsuario({...newUsuario, birthdate: e.target.value})
  }}
  value={newUsuario.birthdate || ""}
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
// comprobaciones relacionadas con la base de datos

// const comprobacionUserUnico = () => {
//   if (dataBD && dataBD.length > 0) {
//     const userExist = dataBD.some((user) => user.user === newUsuario.user);
//     if (userExist) {
//       alert("Este usuario ya está registrado");
//       setUserUnique(false);
//     } else {
//       setUserUnique(true);
//       return true;
//     }
//   } else {
//     // Manejar el caso donde dataBD es undefined o vacío
//     return false;
//   }
// };



// const comprobacionCorreoUnico = () => {
//   if (dataBD && dataBD.length > 0) {
//     const emailExist = dataBD.some((em) => em.email === newUsuario.email);
//     if (emailExist) {
//       alert("Este email ya está registrado");
//       setEmailUnique(false);
//     } else {
//       setEmailUnique(true);
//     }
//   } else {
//     // Manejar el caso donde dataBD es undefined o vacío
//     return false;
//   }
// };


// const handleFormSubmit = (e) => {
//   e.preventDefault();

//   if (comprobacionUserUnico() === true) {
//     if(comprobacionCorreoUnico() === true){

//       handleSubmit(e);
//     }
   
//   }
// };
