import React, { useState, useEffect } from 'react'
import './Slot.css'

// It would be easier to check if the individual slot is clicked here instead of higher up the chain.

// I think the best course of action is to give each slot the ability to determine if it's enabled, and when submitted, a process above will check with every slot and see which were enabled and which were not.

const Slot = ({ image }) => {

  const [isEnabled, setIsEnabled] = useState(false)

  return (
    <div className={`Slot ${isEnabled}`} onClick={() => setIsEnabled(!isEnabled)}>
      <div className="container image">
        <img src={image || ""} alt="" srcset="" key={image} />
      </div>
    </div>
  )
}

export default Slot