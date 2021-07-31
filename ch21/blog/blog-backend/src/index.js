const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 라우터 설정

app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
