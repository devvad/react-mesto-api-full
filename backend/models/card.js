/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const { isURL } = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validator: (v) => isURL(v, { require_protocol: true }),
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  likes: {
    type: mongoose.Schema.Types.Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});
module.exports = mongoose.model('card', cardSchema);
