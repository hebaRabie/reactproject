import React from 'react'
import SharedStructure from '../SharedStructure/SharedStructure'

export default function About() {
  return (
    <div className="text-center container text-white">
      
    <h2 className="fw-bold fs-1 text-uppercase py-5">about component</h2>
    <SharedStructure customColor={`line-light`}/>
    <div className="row">
      <div className="col-md-6 text-start fs-5"><div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div></div>
      <div className="col-md-6 text-start fs-5"><div>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</div></div>
      
    </div>
    </div>
  )
}
