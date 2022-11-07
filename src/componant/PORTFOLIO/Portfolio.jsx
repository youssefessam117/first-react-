import React, { Component } from 'react'
import styles from './portfolio.module.css'
import pic1 from './img/cabin.png'
import pic2 from './img/cake.png'
import pic3 from './img/circus.png'
import pic4 from './img/game.png'
import pic5 from './img/safe.png'
import pic6 from './img/submarine.png'
export default class Portfolio extends Component {
  render() {
    return (
      <>
      <section className='text-center py-5'>
        <h2>PORTFOLIO</h2>
        <div className='pt-3 d-flex justify-content-center'>
              <div className={`${styles.firstLine} ${styles.lineColor}`}></div>
              <i class={`fa-solid fa-star fs-1`}></i>
              <div className={`${styles.firstLine}`}></div>
            </div>
            <div className="container">
                <div className="row pt-5 g-5">
                    <div className={`${styles.picBox} col-md-4`}>
                        <img className='w-100' src={`${pic1}`} alt="" />
                        <div className={`${styles.liar} d-flex justify-content-center align-items-center`}>
                        <i class="fa-solid fa-plus fs-1 text-white fw-bold"></i>
                        </div>
                    </div>
                    <div className={`${styles.picBox} col-md-4`}>
                        <img className='w-100' src={`${pic2}`} alt="" />
                        <div className={`${styles.liar} d-flex justify-content-center align-items-center`}>
                        <i class="fa-solid fa-plus fs-1 text-white fw-bold"></i>
                        </div>
                    </div>
                    <div className={`${styles.picBox} col-md-4`}>
                        <img className='w-100' src={`${pic3}`} alt="" />
                        <div className={`${styles.liar} d-flex justify-content-center align-items-center`}>
                        <i class="fa-solid fa-plus fs-1 text-white fw-bold"></i>
                        </div>
                    </div>
                    <div className={`${styles.picBox} col-md-4`}>
                        <img className='w-100' src={`${pic4}`} alt="" />
                        <div className={`${styles.liar} d-flex justify-content-center align-items-center`}>
                        <i class="fa-solid fa-plus fs-1 text-white fw-bold"></i>
                        </div>
                    </div>
                    <div className={`${styles.picBox} col-md-4`}>
                        <img className='w-100' src={`${pic5}`} alt="" />
                        <div className={`${styles.liar} d-flex justify-content-center align-items-center`}>
                        <i class="fa-solid fa-plus fs-1 text-white fw-bold"></i>
                        </div>
                    </div>
                    <div className={`${styles.picBox} col-md-4`}>
                        <img className='w-100' src={`${pic6}`} alt="" />
                        <div className={`${styles.liar} d-flex justify-content-center align-items-center`}>
                        <i class="fa-solid fa-plus fs-1 text-white fw-bold"></i>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      </>
    )
  }
}
