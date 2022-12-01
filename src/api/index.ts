import Router from 'koa-router'

const router = new Router()
router.get('/api/greet', async ctx  => { 
    ctx.body = {msg: 'Hello world.'}

})
export default router