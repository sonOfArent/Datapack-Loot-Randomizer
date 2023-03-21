import { useState } from 'react'
import Slot from './components/Slot/Slot'
import './App.css'
import './minecraftia.css'

function App() {

  /*
      My first course of action should be to create the area where selecting things happens, as well as deciding the rest of the layout.
    I already know I want to make the site utilize minecraft hud elements. For instance, every box I can select I'd like it to use the inventory square look (I'll call them "slots". they'll take in an image and a name, and ). I think the way I'll accomplish that is by tweaking the border and background until it looks pretty similar.

    I need a section to choose participating items, a section to choose participating blocks, and a section to choose participating mobs. I think the way I'll want to organize them is much in the same way as the creative inventory, having tabs for each thing. For now, though, I'll just work on the functionality and "necessary" css before the fancy stuff.

  */

  return (
    <div className="App">
      <Slot />
      <Slot />
    </div>
  )
}

export default App
