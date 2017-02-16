/**
 * Created by wangxiaobo on 17/2/16.
 */
var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var Router = require('koa-router');
var koaBody = require('koa-body')();
var path = require('path');
var staticCache = require('koa-static-cache');//静态文件
var roudController = require('./controller/round-controller');
var routerController = require('./controller/router-controller');

//页面
router.get('/index',routerController.index);

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(staticCache(path.join(__dirname, 'template/'), {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
    dynamic: true,
    // buffer: true,
    // prefix: 'static',
    usePrecompiledGzip: true
}));

app.listen(10002);