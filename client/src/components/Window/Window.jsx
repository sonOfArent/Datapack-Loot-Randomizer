import React from 'react'
import './Window.css'

const Window = ({ children, type }) => {
  return (
    <div className='Window'>
      {type && <div className="title">
        {type || "Title"}
      </div>}
      <div className="slots">
        {children}
      </div>
    </div>
  )
}

export default Window