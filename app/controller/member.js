'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const MemberContract = require("../contract/member");
const { JsonBody } = require("../util/ResultHelper");
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
    * @response 200 JsonResult 操作结果
    */
    async getById() {
        const { ctx, service } = this;

        var id = ctx.query.id;
        const member = await service.member.getById(id);
        ctx.body = JsonBody(member);
    }

    /**
    * @summary 新增会员
    * @description 新增会员
    * @router post /v1/member/createMember
    * @request body CreateMemberDto model 会员会员
    * @response 200 JsonResult 操作结果
    */
    async createMember() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.CreateMemberDto);
        const result = await service.member.create(model);

        ctx.body = JsonBody(result);
    }
}

module.exports = MemberController;