import React, { useState } from 'react'
import s from './Card.module.css'

const Card = ({title, color, colorDescr, price}) => {

    const [counter, setCounter] = useState(0)
    
  return (
    <div className={s.card}>
        <div className={s.body}>

            
                <p className={s.title}>{title}</p>

                <div className={s.whatColor}>
                    <p className={s.text}>{color}</p>
                    <div className={s.square}></div>

                    <p className={s.text}>{colorDescr}</p>
                </div>

                <div className={s.count}>
                    <button onClick={() => setCounter(counter - 1)}>-</button>
                    <div>{counter}</div>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                </div>
                <p className={s.price}>{price}</p>
                <img className={s.img} src="/img/trash.png" alt="" />
            
        </div>
    </div>
  )
}

export default Card
