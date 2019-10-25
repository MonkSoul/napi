'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

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
        const entity = await service.member.getById(id);
        ctx.body = JsonBody(entity);
    }

    /**
    * @summary 新增会员
    * @description 新增会员
    * @router put /v1/member/createMember
    * @request body CreateOrUpdateMemberDto model 会员会员
    * @response 200 JsonResult 操作结果
    */
    async createMember() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.CreateOrUpdateMemberDto);
        const result = await service.member.create(model);

        ctx.body = JsonBody(result);
    }

    /**
    * @summary 编辑会员
    * @description 编辑会员
    * @router post /v1/member/updateMember
    * @request query integer id 会员Id
    * @request body CreateOrUpdateMemberDto model 会员会员
    * @response 200 JsonResult 操作结果
    */
    async updateMember() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.CreateOrUpdateMemberDto);
        const result = await service.member.update(ctx.query.id, model);

        ctx.body = JsonBody(result);
    }

    /**
    * @summary 删除会员
    * @description 删除会员
    * @router delete /v1/member/destroyMember
    * @request query integer id 会员Id
    * @response 200 JsonResult 操作结果
    */
    async destroyMember() {
        const { ctx, service } = this;

        const result = await service.member.destroy(ctx.query.id);
        ctx.body = JsonBody(result);
    }
}

module.exports = MemberController;