const { Number } = require("mongoose");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discon: {
    type: Number,
    required: true
  },
  kamar: {
    type: Number,
    required: true
  },
  bed: {
    type: String,
    required: true
  },
  tamu: {
    type: Number,
    required: true
  },
  sarapan: {
    type: Boolean,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    default: 'night'
  },
  sumBooking: {
    type: Number,
    default: 0
  },
  categoryId: {
    type: ObjectId,
    ref: 'Category'
  },
  imageId: [{
    type: ObjectId,
    ref: 'Image'
  }],
  featureId: [{
    type: ObjectId,
    ref: 'Feature'
  }],
  activityId: [{
    type: ObjectId,
    ref: 'Activity'
  }]
})

module.exports = mongoose.model('Item', itemSchema)