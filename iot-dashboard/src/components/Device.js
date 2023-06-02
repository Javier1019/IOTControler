import React from 'react';
import PinControl from './PinControl';

const Device = ({ device }) => {
  const { id, ip, pins } = device;

  return (
    <tr>
      <td>{id}</td>
      <td>{ip}</td>
      {pins.map(pin => <PinControl key={pin} pin={pin} deviceId={id} />)}
    </tr>
  );
};

export default Device;
