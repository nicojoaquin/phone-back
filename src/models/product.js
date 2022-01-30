const {Schema, model} = require('mongoose');

const ProductSchema = new Schema(
  
  {
    nombre: {
      type: String,
      trim: true,
      required: true
    },

    precio: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },

    marca: {
      type: String,
      required: true
    },

    desc: {
      type: String,
      required: true
    },

    img: {
      type: String
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Product', ProductSchema);