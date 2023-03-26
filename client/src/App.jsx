import React, { useState, useEffect, useRef } from 'react'

import './App.css'
import './minecraftia.css'

import Slot from './components/Slot/Slot'
import Window from './components/Window/Window'
import ItemGallery from './components/ImageGallery/ItemGallery'

// #TODO: generate files like ItemGallery for BlockGallery and MobGallery. I would do it now but by god I need to sleep.

function App() {

  return (
    <div className="App">
      <div className="Slot-windows">
        <Window type="Items">
          <ItemGallery /> 
        </Window>
        <Window type="Blocks">
        </Window>
        <Window type="Mobs">

        </Window>
      </div>
      <div className="Settings-window">
        Settings box
      </div>
    </div>
  )
}

export default App
