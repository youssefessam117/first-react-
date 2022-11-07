import React, { Component } from 'react'
import style from '../home/style.module.css'
export default class About extends Component {
  render() {
    return (
        <>
        <section className={`text-center py-5 text-white ${style.color}`}>
            <div className="container">
                <h2 className='fs-1'>ABOUT</h2>
                <div className='pt-3 d-flex justify-content-center'>
              <div className={`${style.firstLine}`}></div>
              <i class={`fa-solid fa-star ${style.after_line}`}></i>
              <div className={`${style.firstLine}`}></div>
            </div>
            <div className="row py-4 justify-content-center gx-5">
                <div className="col-md-4 text-start">
                    <p className='fs-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-4 text-start">
                    <p className='fs-3'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            </div>
        </section>
        </>
    )
  }
}
