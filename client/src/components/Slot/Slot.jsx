import React, { useState, useEffect } from 'react'
import './Slot.css'

const Slot = ({ id, image, updateEnabled, dummy=false }) => {

  const [isEnabled, setIsEnabled] = useState(dummy ? true : false)

  useEffect(() => {
    updateEnabled(id, isEnabled)
  }, [isEnabled])

  const handleEnabledChange = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <div className={`Slot`} onClick={() => handleEnabledChange()}>
      <div className="container image">
        <img src={image || ""} alt="" srcSet="" key={image} />
      </div>
    </div>
  )
}

export const DummySlot = ({ id, image, updateEnabled }) => {

  const [isEnabled, setIsEnabled] = useState(true)

  useEffect(() => {
    updateEnabled(id, isEnabled)
  }, [isEnabled])

  const handleEnabledChange = () => {
    setIsEnabled(!isEnabled)
  }

  return (
    <div className={`Slot ${isEnabled}`} onClick={() => handleEnabledChange()}>
      <div className="container image">
        <img src={image || ""} alt="" srcSet="" key={image} />
      </div>
    </div>
  )
}

export default Slot