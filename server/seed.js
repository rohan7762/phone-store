require("dotenv").config();

const connectDB = require("./config/db");
const Product = require("./models/Product");

const createProduct = async () => {
  await connectDB();

  const product = await Product.create({
    name: "Google Pixel 9",
    brand: "Google",
    price: 89999,
    description: "A modern Google Pixel smartphone.",
    images: [
      "https://example.com/pixel9.jpg"
    ],
    specifications: {
      RAM: "12GB",
      Storage: "256GB",
      Display: "6.3 inch",
      Processor: "Google Tensor G4",
      Battery: "4700mAh"
    },
    stock: 10,
    category: "Smartphone",
    rating: 4.5
  });

  console.log("Product created:");
  console.log(product);

  process.exit(0);
};

createProduct();