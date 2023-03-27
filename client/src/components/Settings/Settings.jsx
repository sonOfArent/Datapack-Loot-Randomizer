import React from 'react';
import Slot, { DummySlot } from '../Slot/Slot';
import Window from '../Window/Window';
import SelectAllButton from '../SelectAllButton/SelectAllButton';
import './Settings.css'

const Settings = ({ itemsEnabled, mobsEnabled, blocksEnabled, updateItemsEnabled, updateBlocksEnabled, updateMobsEnabled }) => {
  return (
    <div className='Settings'>
      <h2>Items {<SelectAllButton />}</h2>
      <Window>
        {Object.entries(itemsEnabled).map(([item, enabled]) => {
          if (enabled) {
            return <Slot type="item" id={item} image={item} key={item} updateEnabled={updateItemsEnabled} dummy={true} />;
          }
          return null;
        })}
      </Window>
      <h2>Blocks {<SelectAllButton />}</h2>
      <Window>
        {Object.entries(blocksEnabled).map(([block, enabled]) => {
          if (enabled) {
            return <Slot type="block" id={block} image={block} key={block} updateEnabled={updateBlocksEnabled} dummy={true} />;
          }
          return null;
        })}
      </Window>
      <h2>Mobs {<SelectAllButton />}</h2>
      <Window>
        {Object.entries(mobsEnabled).map(([mob, enabled]) => {
          if (enabled) {
            return <Slot type="mob" id={mob} image={mob} key={mob} updateEnabled={updateMobsEnabled} dummy={true} />;
          }
          return null;
        })}
      </Window>
      <h2>Other Settings</h2>
    </div>
  );
};

export default Settings;
