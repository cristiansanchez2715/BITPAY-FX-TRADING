import React from 'react'
// import { useBeforeUnload } from 'react-router-dom'
import { useEffect } from 'react'

function UserProfile({dataUser}) {

    useEffect(() => {
        console.log(dataUser)
    }, [dataUser])

  return (


    <div className='card-profile'>
        <h1>INVERSOR {dataUser.id}</h1>
        <div className='container-img'>
        <img src='' alt='Imagen Profile'className='profile-img' ></img>
        </div>
        <h1 className='title-profile'>Nombre: {dataUser.name}</h1>
        <h1 className='user-profile'>Usuario: {dataUser.user}</h1>
        <p>Email: {dataUser.email}</p>
        <p>Presentacion:</p>
    </div>
  )
}

export default UserProfile