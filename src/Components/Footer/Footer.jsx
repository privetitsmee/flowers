import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
        <p className={s.all}>Всего</p>
        <p className={s.totalPrice}>2040₽</p>
    </footer>
  )
}

export default Footer
