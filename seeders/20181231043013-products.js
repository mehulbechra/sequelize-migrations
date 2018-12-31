module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Products', [{
    productid: 1,
    name: 'Macaroons - Two Bite Choc',
    unit: 1,
  }, {
    productid: 2,
    name: 'Otomegusa Dashi Konbu',
    unit: 1,
  }, {
    productid: 3,
    name: 'Bread Cranberry Foccacia',
    unit: 1,
  }, {
    productid: 4,
    name: 'Soup - Cream Of Broccoli, Dry',
    unit: 1,
  }, {
    productid: 5,
    name: 'Phyllo Dough',
    unit: 1,
  }, {
    productid: 6,
    name: 'Wine - Sicilia Igt Nero Avola',
    unit: 1,
  }, {
    productid: 7,
    name: 'Cleaner - Comet',
    unit: 1,
  }, {
    productid: 8,
    name: 'Beer - Molson Excel',
    unit: 1,
  }, {
    productid: 9,
    name: 'Bread - Sour Batard',
    unit: 1,
  }, {
    productid: 10,
    name: 'Bagel - Everything',
    unit: 1,
  }, {
    productid: 11,
    name: 'Pork - Bacon, Sliced',
    unit: 1,
  }, {
    productid: 12,
    name: 'Glass Clear 8 Oz',
    unit: 1,
  }, {
    productid: 13,
    name: 'Cactus Pads',
    unit: 1,
  }, {
    productid: 14,
    name: 'Truffle Shells - White Chocolate',
    unit: 1,
  }, {
    productid: 15,
    name: 'Pie Shells 10',
    unit: 1,
  }, {
    productid: 16,
    name: 'Bread - Multigrain',
    unit: 1,
  }, {
    productid: 17,
    name: 'Red Snapper - Fresh, Whole',
    unit: 1,
  }, {
    productid: 18,
    name: 'Capers - Pickled',
    unit: 1,
  }, {
    productid: 19,
    name: 'Bread - Sour Batard',
    unit: 1,
  }, {
    productid: 20,
    name: 'Wine - George Duboeuf Rose',
    unit: 1,
  }, {
    productid: 21,
    name: 'The Pop Shoppe - Root Beer',
    unit: 1,
  }, {
    productid: 22,
    name: 'Yokaline',
    unit: 1,
  }, {
    productid: 23,
    name: 'Cheese - Woolwich Goat, Log',
    unit: 1,
  }, {
    productid: 24,
    name: 'Pasta - Canelloni',
    unit: 1,
  }, {
    productid: 25,
    name: 'Everfresh Products',
    unit: 1,
  }, {
    productid: 26,
    name: 'Cheese - Cottage Cheese',
    unit: 1,
  }, {
    productid: 27,
    name: 'Strawberries - California',
    unit: 1,
  }, {
    productid: 28,
    name: 'Soup - Campbells Asian Noodle',
    unit: 1,
  }, {
    productid: 29,
    name: 'Yoplait - Strawbrasp Peac',
    unit: 1,
  }, {
    productid: 30,
    name: 'Bread Base - Gold Formel',
    unit: 1,
  }, {
    productid: 31,
    name: 'Dry Ice',
    unit: 1,
  }, {
    productid: 32,
    name: 'Hand Towel',
    unit: 1,
  }, {
    productid: 33,
    name: 'Wine - Magnotta - Cab Sauv',
    unit: 1,
  }, {
    productid: 34,
    name: 'Wine - White, Lindemans Bin 95',
    unit: 1,
  }, {
    productid: 35,
    name: 'Ice Cream - Strawberry',
    unit: 1,
  }, {
    productid: 36,
    name: 'Cassis',
    unit: 1,
  }, {
    productid: 37,
    name: 'Liqueur - Melon',
    unit: 1,
  }, {
    productid: 38,
    name: 'Cup - 3.5oz, Foam',
    unit: 1,
  }, {
    productid: 39,
    name: 'Juice - Tomato, 10 Oz',
    unit: 1,
  }, {
    productid: 40,
    name: 'Assorted Desserts',
    unit: 1,
  }, {
    productid: 41,
    name: 'Compound - Rum',
    unit: 1,
  }, {
    productid: 42,
    name: 'Towel Dispenser',
    unit: 1,
  }, {
    productid: 43,
    name: 'Remy Red',
    unit: 1,
  }, {
    productid: 44,
    name: 'Jerusalem Artichoke',
    unit: 1,
  }, {
    productid: 45,
    name: 'Wood Chips - Regular',
    unit: 1,
  }, {
    productid: 46,
    name: 'Chick Peas - Dried',
    unit: 1,
  }, {
    productid: 47,
    name: 'Juice - Grapefruit, 341 Ml',
    unit: 1,
  }, {
    productid: 48,
    name: 'Strawberries',
    unit: 1,
  }, {
    productid: 49,
    name: 'Rabbit - Legs',
    unit: 1,
  }, {
    productid: 50,
    name: 'Nut - Pecan, Pieces',
    unit: 1,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Products', null, {}),
};
