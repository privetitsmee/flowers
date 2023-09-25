import React from 'react'
import s from './Busket.module.css'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'

const Busket = () => {

    const items = [
    {
        id: 1,
        title: 'Бумага Обёрточная (Номер товара)',
        color: 'Цвет:',
        colorDescr: '*Название цвета*',
        price: '1200₽'
    },
    {
        id: 2,
        title: 'Пластиковая *Название товара* (Номер Товара)',
        color: 'Цвет:',
        colorDescr: '*Название цвета*',
        price: '840₽'
    }
]

  return (
    <div className={s.container}>
        <div className={s.busket}>
           <Header/>
           {items.map((item) => (
                <Card key={item.id} title={item.title} color={item.color} colorDescr={item.colorDescr} price={item.price}/>
            ))}

            <Footer/>
        </div>
    </div>
  )
}

export default Busket
