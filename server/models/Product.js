const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true,
    }, 

    brand: {
        type: String,
        required: true,
        trim: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    description: {
        type: String,
        required: true,
    },

    images: {
        type: [String],
        default: [],
    },

    specifications: {
        type: Map,
        of: String,
        default: {},
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },

    category: {
        type: String,
        required: true,
        default: "Smartphone",
    },

    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
},
{
    timestamps: true,
}    
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;