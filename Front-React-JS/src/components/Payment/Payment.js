import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

function Payment({products, totalCompra, setTotalCompra}) {


 const [visibilityBuy, setVisibilityBuy] = useState(false)

 
 useEffect(() => {
    console.log(totalCompra);
  }, [totalCompra]);

const buyCar = () => {
 return( 
    (
        <div className='container-card-buy' style={{display: "flex", flexDirection: "column"}}>
            <div className='card-buy' style={{display: "flex", flexDirection: "row"}}>
            <h1>{totalCompra.name}</h1>
            <p>{totalCompra.price}</p>
            </div>
            <div>
            <p>{totalCompra.description}</p>
            </div>
        </div>
    )
 )

}
 

    const sendToCar = () => {
         setTotalCompra(produc => ({...produc, 
            price: totalCompra.price,
            name: totalCompra.name,
        description: totalCompra.description}))
                 
    }
 
    const visibilityCarFunction = () => {
        setVisibilityBuy(!visibilityBuy)
    }
 
    return (
    <div className='container-card-buys'>
{
    products.map((pro, key) => {
        return(
            <div key={key} className='card-buys'>
                <div className='container-card-titledescript'> 
            <h3>{pro.name}</h3>
            <p>{pro.description}</p>
            </div>
            <div className='container-card-price'>
            <p>{pro.price}</p>
            <button onClick={sendToCar}>Buy</button>
            </div>
            </div>
        )
    })
}
<div>
    <button onClick={visibilityCarFunction}>View Car</button>


</div>

<div>
{visibilityBuy && buyCar()}
</div>
    </div>
  )
}

export default Payment