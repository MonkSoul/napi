'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：student.js
 * 文件描述：学生接口
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { JsonBody } = require("../util/ResultHelper");
const { Controller } = require("egg");

/**
* @controller StudentService 学生接口
*/
class StudentController extends Controller {
    /**
    * @summary 根据Id获取学生信息
    * @description 根据Id获取学生信息
    * @router get /v1/student/getStudentById
    * @request query integer id 学生Id
    * @response 200 JsonResult 操作结果
    */
    async getById() {
        const { ctx, service } = this;

        var id = ctx.query.id;
        const entity = await service.student.getById(id);
        ctx.body = JsonBody(entity);
    }

    /**
    * @summary 新增学生
    * @description 新增学生
    * @router put /v1/student/createStudent
    * @request body CreateStudentDto model 学生学生
    * @response 200 JsonResult 操作结果
    */
    async createStudent() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.CreateStudentDto);

        model.CreatedTime = "2019-10-26 16:35:20";  // 系统记录的
        const result = await service.student.create(model);

        ctx.body = JsonBody(result);
    }

    /**
    * @summary 编辑学生
    * @description 编辑学生
    * @router post /v1/student/updateStudent
    * @request query integer id 学生Id
    * @request body UpdateStudentDto model 学生学生
    * @response 200 JsonResult 操作结果
    */
    async updateStudent() {
        const { ctx, service } = this;

        var model = ctx.request.body;
        ctx.validate(ctx.rule.UpdateStudentDto);

        model.UpdatedTime = "2019-10-26 16:35:20";  // 系统记录的
        const result = await service.student.update(ctx.query.id, model);

        ctx.body = JsonBody(result);
    }

    /**
    * @summary 删除学生
    * @description 删除学生
    * @router delete /v1/student/destroyStudent
    * @request query integer id 学生Id
    * @response 200 JsonResult 操作结果
    */
    async destroyStudent() {
        const { ctx, service } = this;

        const result = await service.student.destroy(ctx.query.id);
        ctx.body = JsonBody(result);
    }
}

module.exports = StudentController;