// @flow
const { bookdb, authordb } = require('./../models/index');
const helpers = require('../lib/helpers');

// Container
const lib = {};

lib.createBook = async (ctx/* : Object */) => {
  try {
    const book = await bookdb
      .build({ name: ctx.request.body.name, year: ctx.request.body.year })
      .save();
    ctx.body = {
      success: true,
      data: book,
    };
  } catch (ex) {
    console.log('Error: ', ex);
  }
};

lib.getAllBooks = async (ctx/* : Object */) => {
  const bookData = await bookdb.findAll({
    order: [
      ['price','ASC']
    ]
  });
  console.log(bookData);
  const priceBookData = helpers.revisedBookData(bookData);
  ctx.body = {
    success: true,
    data: bookData,
  };
};

lib.getBook = async (ctx/* : Object */) => {
  const book = await bookdb.findAll({
    where: {
      id: ctx.params.id,
    },
  });
  if (book.length > 0) {
    ctx.body = { success: true, data: book };
  } else {
    ctx.status = 400;
    ctx.body = { success: false };
  }
};

lib.updateYear = async (ctx/* : Object */) => {
  const book = await bookdb.findAll({
    where: {
      id: ctx.params.id,
    },
  });
  if (book.length > 0) {
    await bookdb.update({
      year: ctx.request.body.year,
    }, {
      where: { id: ctx.params.id },
    });
    ctx.body = { success: true };
  } else {
    ctx.status = 400;
    ctx.body = { success: false };
  }
};

lib.deleteBook = async (ctx/* : Object */) => {
  const book = await bookdb.destroy({
    where: {
      id: ctx.params.id,
    },
  });
  if (book) {
    ctx.body = { success: true };
  } else {
    ctx.status = 400;
    ctx.body = { success: false };
  }
};

module.exports = lib;
