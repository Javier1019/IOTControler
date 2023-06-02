# IoT Dashboard

This is a simple Internet of Things (IoT) dashboard built with React.js, Express.js, and MongoDB. It allows you to control and monitor multiple IoT devices, such as Raspberry Pi's and Arduinos.

## Structure

The project consists of three main parts:

1. The IoT devices, which periodically send a heartbeat to the server and can execute commands sent from the server.

2. The server, which is built with Node.js, Express.js, and MongoDB. It tracks the online status of each device and sends commands to them.

3. The dashboard, which is a React.js application that displays the status of each device and allows the user to send commands.

## Setup

### Server

To set up the server:

1. Navigate to the `server` directory.
2. Install dependencies with `npm install`.
3. Set up your environment variables in a `.env` file. See `.env.example` for required variables.
4. Run the server with `npm start`.

### IoT Devices

To set up a Raspberry Pi device:

1. Navigate to the `device` directory.
2. Install dependencies with `pip install -r requirements.txt`.
3. Run the device script with `python device.py`.

To set up an Arduino device:

1. Open `device.ino` with the Arduino IDE.
2. Modify the `ssid`, `password`, `serverUrl`, and `deviceId` variables with your WiFi credentials, the server's URL, and a unique ID for the device.
3. Upload the script to the Arduino.

### Dashboard

To set up the dashboard:

1. Navigate to the `dashboard` directory.
2. Install dependencies with `npm install`.
3. Run the dashboard with `npm start`.

## Usage

Once all parts are set up and running, you should be able to:

- See the status of each device on the dashboard, including the device's IP address and the status of each GPIO pin.
- Toggle each pin on or off by clicking the corresponding button.
- Send a script to a device by entering it into the input box and clicking "Send Script".