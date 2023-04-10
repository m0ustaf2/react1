import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <>
      
    <div className={` py-5 ${style.back}`}>
    <div className={`container py-5 ${style.back}`}>
     <h2 className={`text-center text-uppercase  mb-0 ${style.port}`} >about</h2>
       <div className='d-flex justify-content-center align-items-center my-3'>
             <div className={style.line} ></div>
             <div className={`mx-3 ${style.icon}`}>
             <i className="fa-solid fa-star"></i>
             </div>
             <div className={style.line}></div>
            </div>
       <div className="row offset-3 py-5 ">
           <div className={`col-md-4 `}>
               <div className='paragraph'>
               <p className={style.lead}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
               </div>
           </div>
           <div className={`col-md-4 `}>
               <div>
               <p className={style.lead}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
               </div>
           </div>
       </div>
     </div>
    </div>
     </>
  )
}
