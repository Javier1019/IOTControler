import React, { useEffect, useState } from 'react';
import Device from './Device';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/devices') // replace with your server's URL
      .then(response => response.json())
      .then(setDevices);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>IP</th>
          <th>Pins</th>
        </tr>
      </thead>
      <tbody>
        {devices.map(device => <Device key={device.id} device={device} />)}
      </tbody>
    </table>
  );
};

export default DeviceList;
