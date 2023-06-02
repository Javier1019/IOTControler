import React, { useEffect, useState } from 'react';
import Device from './Device';
import { fetchDevices } from '../utils/api';

const DeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const getDevices = async () => {
      const data = await fetchDevices();
      setDevices(data);
    }

    getDevices();
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
