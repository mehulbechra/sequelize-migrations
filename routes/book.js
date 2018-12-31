// Dependencies
const Router = require('koa-router');
const validate = require('koa2-validation');
const helpers = require('./../lib/helpers');
const bookctrl = require('./../controllers/bookctrl');

// Initialization
const router = new Router({ prefix: '/books' });

router.post('/', validate(helpers.validateBook), bookctrl.createBook); // Create a book
router.get('/', bookctrl.getAllBooks); // Get all books
router.get('/:id', bookctrl.getBook); // Get individual books
router.put('/:id', validate(helpers.validateBook), bookctrl.updateYear); // Update year of book
router.delete('/:id', bookctrl.deleteBook); // Delete a book

// Export
module.exports = router;
