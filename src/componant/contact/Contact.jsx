import React, { Component } from 'react'
import style from './Contact.module.css'
export default class Contact extends Component {
  render() {
    return (
      <>
      <div className="container text-center py-5">
        <h2>CONTACT ME</h2>
        <div className='pt-3 d-flex justify-content-center'>
              <div className={`${style.firstLine}`}></div>
              <i class={`fa-solid fa-star fs-1`}></i>
              <div className={`${style.firstLine}`}></div>
        </div>
        <div className="row gy-4 pt-5">
            <div className="col-md-12">
                <input placeholder="Name" required="required" className='w-75 form-control m-auto' type="text" />
            </div>
            <div className="col-md-12">
                <input placeholder="Email Address" required="required" className='w-75 form-control m-auto' type="email" />
            </div>
            <div className="col-md-12">
                <input placeholder="Phone Number" required="required" className='w-75 form-control m-auto' type="text" />
            </div>
            <div className="col-md-12">
            <textarea className="form-control m-auto w-75" id="message" rows={5} placeholder="Message" required="required" />
            </div>
            <div className='col-md-5 d-flex justify-content-around'>
            <button className={`${style.myBtn} btn`} type='submit'>send</button>
            </div>
        </div>
      </div>
      </>
    )
  }
}
