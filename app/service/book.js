'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：图书业务类
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const Table = require("../../config/core/table.config");
const { Service } = require('egg');

class BookService extends Service {
    /**
     * 根据Id获取图书信息
     * @param {*} id 主键
     */
    async getById(id) {
        const { ctx } = this;

        const [results] = await ctx.model.query(`select * from ${Table.Book} where id = ${id}`);
        return results[0];
    }

    /**
     * 新增图书
     * @param {*} model 图书信息
     */
    async create(model) {
        const { ctx } = this;

        const results = await ctx.model.Book.create(model);
        return results.dataValues;
    }

    /**
     * 更新图书
     * @param {*} id 图书Id
     * @param {*} model 图书信息
     */
    async update(id, model) {
        const { ctx } = this;

        const entity = await ctx.model.Book.findByPk(id);
        if (!entity) {
            console.error("未找到该信息");
            return;
        }

        const results = await entity.update(model);
        return results;
    }

    /**
     * 删除图书
     * @param {*} id 图书Id
     */
    async destroy(id) {
        const { ctx } = this;
        const entity = await ctx.model.Book.findByPk(id);
        if (!entity) {
            console.error("未找到该信息");
            return;
        }

        const results = await entity.destroy();
        return results;
    }
}

module.exports = BookService;