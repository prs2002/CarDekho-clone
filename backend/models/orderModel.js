import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    seller: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User",
    },
    orderItems: [
        {
            brand: { type: String, required: true },
            model: { type: Number, required: true },
            type: { type: String, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
            car: { type: mongoose.Schema.ObjectId,
                 required: true,
                ref: "Car",
            },
        }
    ],
    orderedAt: {
        type: Date,
    },
    isSold: {
        type: Boolean,
        required: true,
        default: false,
    },
    soldAt: {
        type: Date,
    },
},{
    timestamps: true,
});

const Order = mongoose.model("Order", orderSchema);

export default Order;