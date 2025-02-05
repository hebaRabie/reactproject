import React from 'react'
import styles from './Contact.module.css'
import SharedStructure from '../SharedStructure/SharedStructure'
import { FaStar } from "react-icons/fa";
export default function Contact() {
  return (
    <div className='light-bg text-dark bg-light text-center flex-grow-1 pt-5 mt-5 align-self-stretch con body'>
      <h2 className='dark-heading text-uppercase fw-bold fs-1 '>Contact Section</h2>
      <SharedStructure customColor={`line-dark`} starColor={`star-dark`}/>
      <div className="container  ">
        <div className="w-50 mx-auto d-flex flex-column mt-5">
          <div className="form-floating mb-4  ">
      <input type="text" className="form-control border-0 border-bottom" id="name" placeholder="name@example.com"/>
      <label htmlFor="name">UserName</label>
</div>
        <div className="form-floating mb-4  ">
      <input type="number" className="form-control border-0 border-bottom" id="age" placeholder="name@example.com"/>
      <label htmlFor="age">UserAge</label>
</div>
        <div className="form-floating mb-4  ">
      <input type="email" className="form-control border-0 border-bottom" id="user" placeholder="name@example.com"/>
      <label htmlFor="email">UserEmail</label>
</div>
        <div className="form-floating mb-4  ">
      <input type="password" className="form-control border-0 border-bottom" id="pass" placeholder="name@example.com"/>
      <label htmlFor="pass">UserPassword</label>
</div>
<div className="btn btn-bg text-white ">Send Message</div>
        </div>
        
      </div>
      
    </div>
  )
}
