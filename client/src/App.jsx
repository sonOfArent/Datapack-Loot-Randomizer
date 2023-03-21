import { useState } from 'react'

import './App.css'
import './minecraftia.css'

import Slot from './components/Slot/Slot'
import Window from './components/Window/Window'

function App() {

  /*
      My first course of action should be to create the area where selecting things happens, as well as deciding the rest of the layout.
    I already know I want to make the site utilize minecraft hud elements. For instance, every box I can select I'd like it to use the inventory square look (I'll call them "slots". they'll take in an image and a name, and ). I think the way I'll accomplish that is by tweaking the border and background until it looks pretty similar.

    I need a section to choose participating items, a section to choose participating blocks, and a section to choose participating mobs. I think the way I'll want to organize them is much in the same way as the creative inventory, having tabs for each thing. For now, though, I'll just work on the functionality and "necessary" css before the fancy stuff.

    For every section (Or "window" as I'll call them from here on), I'll need it to be its own div with its own items, selections, and filter options. ("Choose all", "Choose None", etc.) This smells of repeated use and therefore component use.

    I'll also need every currently activated slot to be highlighted as the "hover" color.

    All current settings will be on the right hand side, so maybe I should separate the slots sections from the "settings" section.

    TODO: For each png in each folder, create a slot given the address to that png as a parameter.

  */

  return (
    <div className="App">
      <div className="Slot-windows">
        <Window type="Items"> 
          <Slot image="" isEnabled={true} />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
        </Window>
        <Window type="Blocks">
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
          <Slot />
        </Window>
        <Window type="Mobs">
          <Slot />
          <Slot />
          <Slot />
        </Window>
      </div>
      <div className="Settings-window">
        Settings box
      </div>
    </div>
  )
}

export default App
