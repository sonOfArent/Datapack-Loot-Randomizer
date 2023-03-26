import React, { useState, useEffect } from 'react'
import './Slot.css'

const Slot = ({ id, image, updateItemsEnabled }) => {

  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    updateItemsEnabled(id, isEnabled)
  }, [isEnabled])

  const handleEnabledChange = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <div className={`Slot ${isEnabled}`} onClick={() => handleEnabledChange()}>
      <div className="container image">
        <img src={image || ""} alt="" srcset="" key={image} />
      </div>
    </div>
  )
}

export default Slot