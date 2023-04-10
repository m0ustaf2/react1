
import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <div className={` ${style.back}`}>
      <div className="container">
       <div className="row py-5">
           <div className="col-md-4 text-center py-5">
               <h4>LOCATION</h4>
               <p>
               2215 John Daniel Drive
               <br />
               Clark, MO 65243
               </p>
           </div>
           <div className="col-md-4 text-center py-5">
               <h4>AROUND THE WEB</h4>
               <div className='d-flex justify-content-center '>
               <div className={style.social}>
                <i className={`fa-brands fa-facebook-f mt-3 fa-2x ${style.soicon}`  }></i>
                </div>
                <div className={`mx-2 gg ${style.social}`}>
                <i className={`fa-brands fa-twitter mt-3 fa-2x ${style.soicon}`}  ></i>
                </div>
                <div className={`mx-2 ${style.social}`}>
                <i className={`fa-brands fa-linkedin-in mt-3 fa-2x ${style.soicon} `  }></i>
                </div>
                <div className={style.social}>
                <i className={`fa-brands fa-dribbble mt-3 fa-2x ${style.soicon}`}></i>
                </div>
               </div>
           </div>
           <div className="col-md-4 text-center py-5">
               <h4>ABOUT FREELANCER</h4>
               <p>
               Freelance is a free to use, MIT
               <br />
               licensed Bootstrap theme created by Route
               </p>
           </div>
       </div>
      </div>
    </div>
    <div className={` ${style.end}`}>
       <div className="container text-center py-4">
          <small className='text-white'>Copyright © Your Website 2021</small>
       </div>
    </div>
    </>
  )
}
