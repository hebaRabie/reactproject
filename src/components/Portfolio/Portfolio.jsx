import React from 'react'
import { useState } from "react"
import styles from './Portfolio.module.css'
import img1 from "../../assets/port1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"
import SharedStructure from '../SharedStructure/SharedStructure'
export default function Portfolio() {
  let [img,setImg]=useState()
  let [images,] = useState([
    {src:img1,id:"img1"},
    {src:img2,id:"img2"},
    {src:img3,id:"img3"},
    {src:img1,id:"img4"},
    {src:img2,id:"img5"},
    {src:img3,id:"img6"},
  ])
  function changeImg(img){
   
    console.log(img)
    setImg(img)
  }
  return (
    <>
    <div className='light-bg text-dark bg-light text-center flex-grow-1 pt-5 mt-5 align-self-stretch bg-white'>
      <h2 className='dark-heading text-uppercase fw-bold fs-2'>portfolio component</h2>
      <SharedStructure customColor={`line-dark`} starColor={`star-dark`}/>
    <div className="container">
      <div className="row g-3">
        {images.map((img)=><div key={img.id} className="col-md-4">
          <div id={img.id} className=" position-relative card" onClick={()=>changeImg(img.src)} >
            <img src={img.src} className="w-100 rounded"/>
            <div className=" position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center bg-blue rounded">
            <i className="fa-solid fa-plus fa-5x text-white"></i>
            </div>
          </div>
        </div>)}
       {img? <div className="d-flex align-items-center justify-content-center position-fixed z-3  m-0 top-0 start-0 end-0 bottom-0 bg-blue-trans" onClick={()=>changeImg()}>
          <img src={img} alt="" className="w-50 rounded" />
        </div>:null}
        
      </div>
    </div>
    </div>
    </>
  )
}