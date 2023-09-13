import React from 'react'
import "./Card.css"

const Card = ({pokemon}) => {
  return (
    <div className='card'>
      <div className='cardImg'>
        <img src={pokemon.sprites.front_default}></img>
      </div>
      <div className='cardName'>{pokemon.name}</div>
      <div>タイプ</div>
      {pokemon.types.map((type)=>{
        return <div key={type.type.name}><span>{type.type.name}</span><span/></div>
      }
        )}
      <div className='cardInfo'>
      <div className='cardData'>
          <p className='title'>重さ：{pokemon.weight}</p>
        </div>
        <div className='cardData'>
          <p className='title'>高さ：{pokemon.hight}</p>
        </div>
        <div className='cardData'>
          <p className='title'>アビリティ：{pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
