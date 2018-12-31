const helpers = require('./helpers');

describe('test for revisedBookData', async () => {
  it('output price to be revised based on year', async () => {
    const bookData = [
      {
        id: 1,
        price: 10,
        year: '2000',
      },
      {
        id: 2,
        price: 10,
        year: '2010',
      },
    ];
    expect(helpers.revisedBookData(bookData)).toMatchSnapshot();
  });
});
