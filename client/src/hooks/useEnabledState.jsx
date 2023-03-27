import { useState } from 'react';

const useEnabledState = (name) => {
  const [enabled, setEnabled] = useState({});

  const updateEnabled = (key, newValue) => {
    setEnabled(previous => ({
      ...previous,
      [key]: newValue
    }));
  };

  return [enabled, updateEnabled];
}

export default useEnabledState