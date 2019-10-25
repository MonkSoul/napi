'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：图书接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { JsonBody } = require("../util/ResultHelper");
const { Controller } = require("egg");

/**
* @controller BookService 图书接口
*/
class BookController extends Controller {
    /**
    * @summary 根据Id获取图书信息
    * @description 根据Id获取图书信息
    * @router get /v1/book/getBookById
    * @request query integer id 图书Id
    * @response 200 JsonResult 操作结果
    */
    async getById() {
        const { ctx, service } = this;

        var id = ctx.query.id;
        const entity = await service.book.getById(id);
        ctx.body = JsonBody(entity);
    }

    /**
    * @summary 新增图书
    * @description 新增图书
    * @router put /v1/book/createBook
    * @request body CreateBookDto model 图书图书
    * @response 200 JsonResult 操作结果
    */
    async createBook() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.CreateBookDto);

        model.CreatedTime = "2019-10-26 16:35:20";  // 系统记录的
        const result = await service.book.create(model);

        ctx.body = JsonBody(result);
    }

    /**
    * @summary 编辑图书
    * @description 编辑图书
    * @router post /v1/book/updateBook
    * @request query integer id 图书Id
    * @request body UpdateBookDto model 图书图书
    * @response 200 JsonResult 操作结果
    */
    async updateBook() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.UpdateBookDto);

        model.LastUpdatedTime = "2019-10-26 16:35:20";  // 系统记录的
        const result = await service.book.update(ctx.query.id, model);

        ctx.body = JsonBody(result);
    }

    /**
    * @summary 删除图书
    * @description 删除图书
    * @router delete /v1/book/destroyBook
    * @request query integer id 图书Id
    * @response 200 JsonResult 操作结果
    */
    async destroyBook() {
        const { ctx, service } = this;

        const result = await service.book.destroy(ctx.query.id);
        ctx.body = JsonBody(result);
    }
}

module.exports = BookController;