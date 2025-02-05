import React from 'react'
import { FaStar } from "react-icons/fa";
export default function SharedStructure({customColor, starColor}) {
  return (
    <div className='d-flex justify-content-center align-items-center pt-5'>
        <div className={`line ${customColor}`}></div>
       <FaStar className={`${starColor} mx-3 fs-3`} />
        <div className={`line ${customColor}`}></div>

    </div>
  )
}
