import React from 'react'
import kfc from "../image/kfc.jpg"

function Card() {
  return (
    <div className='card' >
        <img alt='kfc' src={kfc}/>
        <h3>KFC, Krispy</h3>
        <h4>chicken</h4>
        <h4>4star  5$</h4>
    </div>
  )
}

export default Card;