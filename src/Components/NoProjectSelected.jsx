import React from 'react'

export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='project-select'>
       <div className="project-wrapper">
       <h2 style={{fontWeight: "bold", fontSize: "25px"}}>No Project Selected</h2>
        <p>Select s project or get started with a new one</p>
        <p>
            <button className='save' onClick={onStartAddProject}>Create a new project</button>
        </p>
       </div>
    </div>
  )
}
