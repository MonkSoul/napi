'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：user.js
 * 文件描述：用户接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { Controller } = require("egg");

/**
* @controller userService 用户接口
*/
class UserController extends Controller {
    /**
    * @summary 根据Id获取会员信息
    * @description 根据Id获取会员信息
    * @router get /v1/user/getById
    * @request query integer id 会员Id
    * @response 200 userInfoOutput 返回用户基本信息
    */
    async getById() {
        const { ctx } = this;

        var id = ctx.query.id;
        ctx.body = {
            id: 1,
            name: "NAPI"
        };
    }
}

module.exports = UserController;