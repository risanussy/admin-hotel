const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const facilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  roomId: {
    type: ObjectId,
    ref: "Room",
  },
});

module.exports = mongoose.model("Facility", facilitySchema);
