import React from 'react';
import avatar from '../../assets/avataaars.svg'
import styles from './Home.module.css'
import SharedStructure from '../SharedStructure/SharedStructure'
import { ReactTyped } from "react-typed";
export default function Home() {
  return (
    <div className='text-center text-white py-5 mb-2'>
      { <img src={avatar} alt="" className={styles.customWidth}/> }
      <h1 className='fw-bold fs-1'>START FRAMEWORK</h1>
      <SharedStructure customColor='line-light'/>
      <ReactTyped  className='fs-5' strings={["Graphic Artist" , "Web Designer" , "Illustrator"]} typeSpeed={40} loop />
    </div>
  )
}

