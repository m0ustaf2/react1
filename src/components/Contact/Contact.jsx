
import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
  return (
    <>
    <div className={`container pt-5 `}>
   <h2 className={`text-center text-uppercase  mb-0 ${style.cont}`} >contact me</h2>
     <div className='d-flex justify-content-center align-items-center my-2'>
           <div className={style.line} ></div>
           <div className={`mx-3 ${style.star}`}>
           <i className="fa-solid fa-star"></i>
           </div>
           <div className={style.line}></div>
          </div>
     <div className="row  offset-3 ">
        <div className="col-md-8">
         <div>
         <input type="text" className={` ${style.name}`} required placeholder='Name' />
         <hr />
         </div>
        </div>
        <div className="col-md-8">
         <div>
         <input type="email" className={` ${style.name}`} required placeholder='Email Address' />
         <hr />
         </div>
        </div>
        <div className="col-md-8">
         <div>
         <input type="tel" className={` ${style.name}`} required placeholder='Phone Number' />
         <hr />
         </div>
        </div>
        <div className="col-md-8">
         <div>
         <textarea placeholder='Message' cols="175" className={` ${style.area}`}  rows="5"></textarea>
         <hr />
         </div>
        </div>
        <div className="col-md-8">
         <div>
         <button className="btn btn-success p-3 mb-5" type="submit">Send</button>
         </div>
        </div>
       
     </div>
   </div>
   </>
  )
}
