import { Document, Schema, model } from "mongoose";

export interface IProduct extends Document {
  productName: string;
  productImage: string;
  productDescription: string;
  productCategory: string;
  productQuantity: number;
  productExpectedSale: number;
  productPrice: number;
  totalSoldQty: number;
  cost:number;
}

const Product = new Schema<IProduct>({
  productName: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productQuantity: {
    type: Number,
    required: true,
  },
  productExpectedSale: {
    type: Number,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  totalSoldQty: {
    type: Number,
    required: true,
  },
  cost:{
    type:Number,
  }
});

module.exports = model("Product", Product);
