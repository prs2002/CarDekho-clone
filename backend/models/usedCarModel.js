import mongoose from "mongoose";

const usedCarSchema = new mongoose.Schema({

    buyer: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    model: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    engine: {
        type: number,
        required: true,
    },
    transmission: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
      },
    type: {
        type: String,
        required: true,
    },
    price: {
          type: Number,
          required: true,
          default: 0,
    },
    kmsDriven: {
        type: Number,
        required: true,
        default: 0,
    },
    age: {
        type: Number,
        required: true,
        default: 0,
    },
    city: {
        type: String,
        required: true,
        default: 0,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    isAvailable: {
        type: Boolean,
        required: true,
        default: false,
    },
},{
    timestamps: true,
});


const UsedCar = mongoose.model("UsedCar", usedCarSchema);

export default UsedCar;