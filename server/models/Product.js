var mongoose = require('mongoose');

// Create the ProductSchema.
var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  }
});

// Export the model schema.
module.exports = ProductSchema;