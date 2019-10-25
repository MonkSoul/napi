'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：ResultHelper.js
 * 文件描述：返回值统一的Json格式数据
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

/**
 * 返回Json格式数据
 * @param {*} success 成功与否
 * @param {*} data 附加数据
 */
function JsonBody(data) {
    var success = true;

    if (typeof data === "boolean") success = data;
    else {
        success = data ? true : false;
    }

    return {
        success: success,
        results: data
    }
}

module.exports = {
    JsonBody
};