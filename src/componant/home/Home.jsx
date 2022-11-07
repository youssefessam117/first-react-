import React, { Component } from 'react'
import logo from './avataaars.svg'
import style from './style.module.css'

export default class Home extends Component {
  render() {
    return (
      <>
      <section className= {`${style.color} py-5 d-flex justify-content-center align-items-center px-3`}>
        <div className="py-5 text-center text-white">
           <img className = {`${style.img} py-5`} src={logo} alt="" />
           <h1 >START REACT</h1>
            <div className='py-4 d-flex justify-content-evenly align-items-center'>
              <div className={`${style.firstLine}`}></div>
              <i class={`fa-solid fa-star ${style.after_line}`}></i>
              <div className={`${style.firstLine}`}></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
      </>
    )
  }
}
