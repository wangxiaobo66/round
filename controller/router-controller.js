/**
 * Created by wangxiaobo on 17/2/16.
 */
var views = require('co-views');
var render = views(__dirname,{map: {html: 'swig'}});

module.exports = {
    index: function *(next){//首页
        this.body = yield render('../template/index.html');
    }
};