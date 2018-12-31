// Dependencies
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const indexRoutes = require('./routes/index');
const bookRoutes = require('./routes/book');

// Initialization
const app = new Koa();

// Error handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || err.code;
    ctx.body = {
      success: false,
      message: err.message,
    };
  }
});

// Body Parser Middleware
app.use(bodyParser());

// Routes Middleware
app.use(indexRoutes.routes());
app.use(bookRoutes.routes());

// Starting Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// Export
module.exports = app;
