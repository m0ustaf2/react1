import cabin from "../../image/cabin.png";
import cake from "../../image/cake.png";
import circus from "../../image/circus.png";
import game from "../../image/game.png";
import safe from "../../image/safe.png";
import submarine from "../../image/submarine.png";
import style from "./Portfolio.module.css";
import React, { useState } from "react";

export default function Portfolio() {
const [src, setSrc] = useState()
const [title, setTitle] = useState()

function openModal(e)
{
// console.log(e.target.getAttribute('src'));
setSrc(e.target.getAttribute('src'))
// console.log(e.target.getAttribute('title'));
setTitle(e.target.getAttribute('title'))
}

  return (
    <>
      <div className="container py-5">
        <h2 className={`text-center text-uppercase pt-3 mb-0 ${style.port}`}>
          Portfolio
        </h2>
        <div className="d-flex justify-content-center align-items-center my-4">
          <div className={style.line}></div>
          <div className={`mx-3 ${style.icon}`}>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className={style.line}></div>
        </div>
        <div className="row gy-5">
          <div onClick={openModal} data-bs-toggle="modal" data-bs-target="#exampleModal1"className={`col-md-4 moo `}>
            <div className={`position-relative`}>
              <img className="w-100 rounded-2" src={cabin} alt="" />

              <div title="cabin" src={cabin} className={` d-flex justify-content-center align-items-center position-absolute top-0 rounded-2  ${style.layer}`}>
               
                <i title="cabin" src={cabin} className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div  onClick={openModal} data-bs-toggle="modal" data-bs-target="#exampleModal1" className="col-md-4">
            <div className={`position-relative `}>
              <img className="w-100 rounded-2" src={cake} alt="" />
              <div title="cake" src={cake} className={` d-flex justify-content-center align-items-center position-absolute top-0 rounded-2  ${style.layer}`}>
                <i  title="cake" src={cake} className="fa-solid fa-plus fa-5x text-white"></i> 
              </div>
            </div>
          </div>
          <div onClick={openModal} data-bs-toggle="modal" data-bs-target="#exampleModal1" className="col-md-4">
            <div className={`position-relative `}>
              <img className="w-100 rounded-2" src={circus} alt="" />
              <div
              title="circus"
              src={circus}
                className={` d-flex justify-content-center align-items-center position-absolute top-0 rounded-2  ${style.layer}`}
              >
                <i title="circus" src={circus} className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div onClick={openModal}  data-bs-toggle="modal" data-bs-target="#exampleModal1" className="col-md-4">
            <div className={`position-relative `}>
              <img className="w-100 rounded-2" src={game} alt="" />
              <div  title="game" src={game} className={` d-flex justify-content-center align-items-center position-absolute top-0 rounded-2  ${style.layer}`}
              >
                <i title="game" src={game} className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div
          onClick={openModal}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            className="col-md-4"
          >
            <div className={`position-relative  `}>
              <img className="w-100 rounded-2" src={safe} alt="" />
              <div title="locked safe"src={safe} className={` d-flex justify-content-center align-items-center position-absolute top-0 rounded-2  ${style.layer}`}>
                <i title="locked safe"src={safe} className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
          <div
          onClick={openModal}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            className="col-md-4"
          >
            <div className={`position-relative `}>
              <img className="w-100 rounded-2" src={submarine} alt="" />
              <div
              title="submarine"
              src={submarine}
                className={` d-flex justify-content-center align-items-center position-absolute top-0 rounded-2  ${style.layer}`}
              >
                <i    title="submarine"
              src={submarine} className="fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal1" tabIndex="-1"aria-labelledby="exampleModalLabel"aria-hidden="true" >
        <div className="modal-dialog modal-xl p-5">
          <div className="modal-content">
            <i data-bs-dismiss="modal" aria-label="Close" type="button" className="ms-auto px-4 pt-2 fa-solid fa-xmark fa-3x text-success"></i>
            <div className="d-flex justify-content-center align-items-center flex-column p-3">
              <h1 id="exampleModalLabe l" className={` text-uppercase pt-3 mb-0 ${style.port}`}>
                {title}
              </h1>
              <div className={`mx-3 ${style.icon}`}>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="modal-body m-auto text-center">
              <img className="w-75 rounded-2" src={src} alt="" />
              <br />
              <br />
              <p className="text-center text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, sapiente sed, rerum sunt, eligendi dolore sit debitis
                facilis modi minus culpa nostrum. Eum excepturi ipsam voluptates
                possimus? Numquam, atque dolorum!
              </p>
            </div>
            <div className="d-flex justify-content-center py-4">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">
                <i className="fa-sharp fa-solid fa-xmark mx-2"></i>
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
