const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemId: [
    {
      type: ObjectId,
      ref: "Item",
    },
  ],
  roomId: [
    {
      type: ObjectId,
      ref: "Room",
    },
  ],
});

module.exports = mongoose.model("Category", categorySchema);
