import React from 'react'
import s from './Header.module.css'

const Header = () => {
  return (
    <div>
       <header className={s.header}>
                <div className={s.body}>
                    <h1>Корзина</h1>
                    <img src="/img/glasses.png" alt="" />
                </div>
        </header>
    </div>
  )
}

export default Header
