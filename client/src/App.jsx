import React, { useState, useEffect, useRef } from 'react'
import useEnabledState from './hooks/useEnabledState'

import './App.css'
import './minecraftia.css'

import Slot from './components/Slot/Slot'
import Window from './components/Window/Window'
import Settings from './components/Settings/Settings'

import ItemGallery from './components/ImageGallery/galleries/ItemGallery'
import BlockGallery from './components/ImageGallery/galleries/BlockGallery'
import MobGallery from './components/ImageGallery/galleries/MobGallery'


// #TODO: generate files like ItemGallery for BlockGallery and MobGallery. I would do it now but by god I need to sleep.

// I forgot to also upload the application to actually create the gallery data, so something else I will have to find.

function App() {

  const [itemsEnabled, updateItemsEnabled] = useEnabledState('itemsEnabled');
  const [blocksEnabled, updateBlocksEnabled] = useEnabledState('blocksEnabled');
  const [mobsEnabled, updateMobsEnabled] = useEnabledState('mobsEnabled');

  useEffect(() => {
    console.log(itemsEnabled, blocksEnabled, mobsEnabled)
  }, [itemsEnabled, blocksEnabled, mobsEnabled])

  return (
    <div className="App">
      <div className="Slot-windows">
        <Window type="Items">
          <ItemGallery updateItemsEnabled={updateItemsEnabled} />
        </Window>
        <Window type="Blocks">
          <BlockGallery updateBlocksEnabled={updateBlocksEnabled} />
        </Window>
        <Window type="Mobs">
          <MobGallery updateMobsEnabled={updateMobsEnabled} />
        </Window>
      </div>
      <div className="Settings-window">
        <Settings 
          itemsEnabled={itemsEnabled} 
          blocksEnabled={blocksEnabled} 
          mobsEnabled={mobsEnabled} 
          updateItemsEnabled={updateItemsEnabled} 
          updateBlocksEnabled={updateBlocksEnabled} 
          updateMobsEnabled={updateMobsEnabled} />
      </div>
    </div>
  )
}

export default App
