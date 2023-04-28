import express from 'express';
import mongoose from 'mongoose'
mongoose.set('strictQuery', false);

const app = express();

mongoose.connect('mongodb://host.docker.internal:27017/test')
  .then((r) => console.log('Connected to MongoDB'))
  .catch((e) => console.log('Failed to connect to MongoDB'))

  const ProductsSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    about: {
        type: String,
        required: true,
        default: ''
    }
});
const Products = mongoose.model('Products', ProductsSchema)


app.get("/", async (req, res) => {
  await Products.find({}).sort({item: 1})
    .then((data) => {res.status(200).json(data)})
    .catch((error) => res.status(400).json(error));
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});