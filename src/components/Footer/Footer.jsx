import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='text-white text-center'>
<div className={`upper-footer  p-5 ${styles.bgupperfooter}`}>
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="footer-item">
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="footer-item">
          <h4>AROUND THE WEB</h4>
          <ul className='list-unstyled d-flex justify-content-center'>
          <li><a href="" className={`ms-3 text-white ${styles.roundedCircle}`}><FaFacebook/></a></li>
            <li><a href="" className={`ms-3 text-white ${styles.roundedCircle}`}>< FaTwitter/></a></li>
            <li><a href="" className={`ms-3 text-white ${styles.roundedCircle}`}><FaLinkedinIn/></a></li>
            <li><a href="" className={`ms-3 text-white ${styles.roundedCircle}`}><FaGlobe/></a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="footer-item">
          <h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          
        </div>
      </div>
    </div>
  </div>
</div>
<div className={`lower-footer p-4 ${styles.bglowerfooter}`}>
  <p>Copyright © Your Website 2021</p>
</div>
    </footer>
  )
}
