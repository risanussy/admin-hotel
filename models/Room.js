const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
  city: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: "night",
  },
  sumBooking: {
    type: Number,
    default: 0,
  },
  categoryId: {
    type: ObjectId,
    ref: "Category",
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],
  facilityId: [
    {
      type: ObjectId,
      ref: "Facility",
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Room", roomSchema);
