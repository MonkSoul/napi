'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员业务类
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Table = require("../../config/core/table.config");
const { Service } = require('egg');

class MemberService extends Service {
    /**
     * 根据Id获取会员信息
     * @param {*} id 主键
     */
    async getById(id) {
        const { ctx } = this;

        const [results] = await ctx.model.query(`select * from ${Table.Member} where id = ${id}`);
        return results[0];
    }

    /**
     * 新增会员
     * @param {*} model 会员信息
     */
    async create(model) {
        const { ctx } = this;

        const results = await ctx.model.Member.create(model);
        return results.dataValues;
    }
}

module.exports = MemberService;