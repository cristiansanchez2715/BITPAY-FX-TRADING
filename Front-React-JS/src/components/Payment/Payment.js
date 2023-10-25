import React from 'react'

function Payment({products}) {
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
            <button>Buy</button>
            </div>
            </div>
        )
    })
}

    </div>
  )
}

export default Payment