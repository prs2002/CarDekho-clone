import mongoose from "mongoose";

const newCarSchema = new mongoose.Schema({

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
    priceRange: [
        {
          variant: { type: String, required: true },
          price: { type: Number, required: true },
        }
      ],
},{
    timestamps: true,
});

const NewCar = mongoose.model("NewCar", newCarSchema);

export default NewCar;