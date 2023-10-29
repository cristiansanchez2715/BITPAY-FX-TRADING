import React from 'react'
import { useState } from 'react'

function Settings({setDataUser, dataUser}) {
  let [dataDescripcion, setDataDescripcion] = useState()

  const functionAddDescripcion = () => {
    // Envia la descripción al servidor
    fetch("http://localhost:4000/api/updateDescription", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: dataUser.id, description: dataDescripcion }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado del usuario con la nueva descripción
        setDataUser({ ...dataUser, description: dataDescripcion });
      });
  };



  return (
    <div>
       <h1>Settings</h1>
        <p>Deseas agregar una descripcion?</p>
        <textarea onChange={(e) => {
       setDataDescripcion(e.target.value)
        }}></textarea>
        <button onClick={functionAddDescripcion}>Add Descripcion</button>
    </div>
  )
}

export default Settings