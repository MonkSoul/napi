'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：baseController.js
 * 文件描述：父控制器类
 * 创建时间：2019/10/28
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const { Controller } = require("egg");

class BaseController extends Controller {
    /**
     * 返回Json格式响应数据
     * @param {*} data 数据体
     */
    jsonBody(data) {
        var success = true;

        if (typeof data === "boolean") success = data;
        else success = data ? true : false;

        this.ctx.body = {
            success: success,
            results: data
        };
    }
};

module.exports = BaseController;