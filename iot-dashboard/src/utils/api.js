export const fetchDevices = async () => {
  try {
    const response = await fetch('http://localhost:5000/devices'); // replace with your server's URL
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const togglePin = async (deviceId, pin, state) => {
  try {
    const response = await fetch(`http://localhost:5000/device/${deviceId}/pin/${pin}/${state}`, { method: 'POST' }); // replace with your server's URL
    return response;
  } catch (error) {
    console.error(error);
  }
}
