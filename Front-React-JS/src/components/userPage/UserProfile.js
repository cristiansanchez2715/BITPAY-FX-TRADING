import React from 'react'
// import { useBeforeUnload } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import Settings from './Settings'


function UserProfile({setDataUser, dataUser}) {
let [profielPicture, setProfilePicture] = useState()

    useEffect(() => {
        console.log(dataUser)
    }, [dataUser])

  return (

<div className='container-profile' style={{display: "flex", flexDirection: "row"}}>
    <div className='card-profile'>
        <h1>INVERSOR {dataUser.id}</h1>
        <div className='container-img'>
        <img src='' alt='Imagen Profile'className='profile-img' ></img>
        <button type='file'></button>
        </div>
        <h1 className='title-profile'>Nombre: {dataUser.name}</h1>
        <h1 className='user-profile'>Usuario: {dataUser.user}</h1>
        <p>Email: {dataUser.email}</p>
        <p>Presentacion: {dataUser.description}</p>
    </div>
<React.Fragment>
  <Settings setDataUser={setDataUser} dataUser={dataUser}></Settings>
</React.Fragment>

    </div>
  )
}

export default UserProfile