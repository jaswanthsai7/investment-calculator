import React from 'react'
import logo from "../../assets/invest.png";
import '../../index.css'

export default function Header() {
  return (
    <div>
       <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  )
}
