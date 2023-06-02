const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

router.post('/device/heartbeat', deviceController.heartbeat);
router.post('/device/:deviceId/pin/:pinId/:state', deviceController.controlPin);
router.post('/device/:deviceId/script/:scriptId', deviceController.runScript);

module.exports = router;
