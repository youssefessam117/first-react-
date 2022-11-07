import React, { Component } from 'react'
import style from './footer.module.css'
export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className={`py-5 text-white ${style.mainFooter}`}>
        <div className="container">
            <div className={`row`}>
                <div className="col-md-4 text-center">
                    <h3>LOCATION</h3>
                    <p>
                    2215 John Daniel Drive
                    <br />
                    Clark, MO 65243
                    </p>
                </div>
                <div className="col-md-4 text-center ">
                    <h3>AROUND THE WEB</h3>
                    <div className="icon d-flex justify-content-center align-items-center">
                        <div className={`${style.iconCircle} rounded-circle`}><i class="fa-brands fa-facebook-f"></i></div>
                        <div className={`${style.iconCircle} rounded-circle`}><i class="fa-brands fa-twitter"></i></div>
                        <div className={`${style.iconCircle} rounded-circle`}><i class="fa-brands fa-linkedin-in"></i></div>
                        <div className={`${style.iconCircle} rounded-circle`}><i class="fa-solid fa-basketball"></i></div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <h3>ABOUT FREELANCER</h3>
                    <p>
                    Freelance is a free to use, MIT
                    <br />
                    licensed Bootstrap theme created by
                    <br />
                    Route
                    </p>
                </div>
            </div>
        </div>
      </footer>
      <div className={`text-white text-center py-4 ${style.secFooter}`}>
           <p>Copyright © Your Website 2021</p>
      </div>
      </>
    )
  }
}
