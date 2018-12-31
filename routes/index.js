const Router = require('koa-router');
// import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = {
    message: 'Main page',
  };
});

module.exports = router;
// export default router;
