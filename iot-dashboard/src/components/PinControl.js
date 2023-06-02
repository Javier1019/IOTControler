import React, { useState } from 'react';

const PinControl = ({ pin, deviceId }) => {
  const [state, setState] = useState('off');

  const toggleState = () => {
    const newState = state === 'off' ? 'on' : 'off';
    fetch(`http://localhost:5000/device/${deviceId}/pin/${pin}/${newState}`, { method: 'POST' }) // replace with your server's URL
      .then(() => setState(newState));
  };

  return <button onClick={toggleState}>{`Pin ${pin}: ${state}`}</button>;
};

export default PinControl;
