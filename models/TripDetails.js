const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    typeOfTrip: {
      type: Number,
    }, // String is shorthand for {type: String}
    start: {
      type: String,
      required: true,
    },
    startDateTime: {
      type: String,
    },
    destination: {
      type: String,
      required: true,
    },
    endDateTime: {
      type: String,
    },
    totalDistance: {
      type: Number,
      required: true,
    },
    kmCharges: {
      type: Number,
      required: true,
    },
    stayCharges: {
      type: Number,
    },
    tip: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    dieselCost: {
      type: Number,
      required: true,
    },
    tolls: {
      type: Number,
    },
    carMaintain: {
      type: Number,
    },
    fines: {
      type: Number,
    },
    misc: {
      type: Number,
    },
    commission: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Trip", TripSchema);
