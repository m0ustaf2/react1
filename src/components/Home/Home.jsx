import avatar from '../../image/avataaars.svg'
import style from './Home.module.css'
import React from 'react'
export default function Home() {
  return (
    <>
      <div className={` d-flex ${style.home}`}>
        <div className="container d-flex justify-content-center align-items-center">
        <div className="row ">
          <div className="col-md-12">
            <div className='text-center '>
             <img className='w-50' src={avatar} alt="avatar" />
             <h1 className={`text-white my-4 ${style.text}`}>START REACT</h1>
             <div className='d-flex justify-content-center align-items-center my-4'>
              <div className={style.line} ></div>
              <div className='text-white mx-2'>
              <i className="fa-solid fa-star"></i>
              </div>
              <div className={style.line}></div>
             </div>
             <p className={style.para}>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </>
  )
}
