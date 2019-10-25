'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：home.js
 * 文件描述：接口文档默认首页
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { Controller } = require("egg");

class HomeController extends Controller {
    async swagger() {
        const { ctx } = this;
        ctx.redirect("/swagger-ui.html");
    }
}

module.exports = HomeController;