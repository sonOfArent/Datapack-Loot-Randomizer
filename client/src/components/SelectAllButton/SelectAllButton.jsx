import React, { useEffect, useState } from 'react'
import './SelectAllButton.css'

const SelectAllButton = ({ allSelected = false }) => {
  
  const [isEnabled, setIsEnabled] = useState(false)
  const [allSelectedState, setAllSelectedState] = useState(allSelected)

  const handleClick = () => {
    setIsEnabled(!isEnabled)
    setAllSelectedState(!allSelectedState)
  }

  useEffect(() => {
    
  }, [isEnabled])

  return (
    <button className={`SelectAllButton`} onClick={() => handleClick()}>
      {allSelectedState ? "None" : "All"}
    </button>
  )
}

export default SelectAllButton