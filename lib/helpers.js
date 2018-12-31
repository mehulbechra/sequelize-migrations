// Dependencies
const Joi = require('joi');

// Container
const lib = {};

// Validation query for books
lib.validateBook = {
  body: {
    name: Joi.string().min(3).max(50).required(),
    year: Joi.string().required(),
  },
};

// Return price data based on year
lib.revisedBookData = (bookData) => {
  bookData.forEach((bookItem) => {
    if (bookItem.year < 2004) {
      // Offer 50% discount
      bookItem.price *= 0.5;
    } else {
      // Offer 20% discount
      bookItem.price *= 0.8;
    }
  });
  return bookData;
};

// Export
module.exports = lib;
