import React, { useState, useEffect, useRef } from 'react'

import './App.css'
import './minecraftia.css'

import Slot from './components/Slot/Slot'
import Window from './components/Window/Window'
import ItemGallery from './components/ImageGallery/ItemGallery'

// #TODO: generate files like ItemGallery for BlockGallery and MobGallery. I would do it now but by god I need to sleep.

// I forgot to also upload the application to actually create the gallery data, so something else I will have to find.

function App() {

  const [itemsEnabled, setItemsEnabled] = useState({})

  const updateItemsEnabled = (key, newValue) => {
    setItemsEnabled(previous => ({
      ...previous,
      [key]: newValue
    }))
  }

  return (
    <div className="App">
      <div className="Slot-windows">
        <Window type="Items">
          <ItemGallery updateItemsEnabled={updateItemsEnabled} />
        </Window>
        <Window type="Blocks">
        </Window>
        <Window type="Mobs">

        </Window>
        <button onClick={() => console.log(itemsEnabled)}></button>
      </div>
      <div className="Settings-window">
        Settings box
      </div>
    </div>
  )
}

export default App
