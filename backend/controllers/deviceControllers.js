const Device = require('../models/device');
const axios = require('axios');
const { validate } = require('../utils/validate');

exports.heartbeat = async (req, res) => {
  validate(req.body, {
    id: "string|required",
    ip: "string|required|ip"
  });

  let device = new Device(req.body);

  device = await device.save();

  res.status(200).send('OK');
};

exports.controlPin = async (req, res) => {
  let { deviceId, pinId, state } = req.params;

  validate(req.params, {
    deviceId: "string|required",
    pinId: "string|required",
    state: "string|required|in:on,off"
  });

  const device = await Device.findOne({ id: deviceId });

  if (!device) {
    throw new Error('Device not found');
  }

  let response = await axios.post(`${device.ip}/pin/${pinId}/${state}`);
  res.json(response.data);
};

exports.runScript = async (req, res) => {
  let { deviceId, scriptId } = req.params;

  validate(req.params, {
    deviceId: "string|required",
    scriptId: "string|required",
  });

  const device = await Device.findOne({ id: deviceId });

  if (!device) {
    throw new Error('Device not found');
  }

  let response = await axios.post(`${device.ip}/script/${scriptId}`);
  res.json(response.data);
};
