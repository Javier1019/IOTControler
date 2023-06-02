const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  ip: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Device', deviceSchema);
