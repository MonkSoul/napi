'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { Controller } = require("egg");

/**
* @controller MemberService 会员接口
*/
class MemberController extends Controller {
    /**
    * @summary 根据Id获取会员信息
    * @description 根据Id获取会员信息
    * @router get /v1/member/getMemberById
    * @request query integer id 会员Id
    * @response 200 MemberInfo 返回会员基本信息
    */
    async getById() {
        const { ctx } = this;

        var id = ctx.query.id;
        const member = await ctx.service.member.getById(id);
        ctx.body = member;
    }
}

module.exports = MemberController;