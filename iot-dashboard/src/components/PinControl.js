import React, { useState } from 'react';
import { togglePin } from '../utils/api';

const PinControl = ({ pin, deviceId }) => {
  const [state, setState] = useState('off');

  const toggleState = async () => {
    const newState = state === 'off' ? 'on' : 'off';
    await togglePin(deviceId, pin, newState);
    setState(newState);
  };

  return <button onClick={toggleState}>{`Pin ${pin}: ${state}`}</button>;
};

export default PinControl;
