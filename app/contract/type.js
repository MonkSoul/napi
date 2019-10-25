'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：type.js
 * 文件描述：默认接口返回类型
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

module.exports = {
    // 默认接口类型
    JsonResult: {
        success: { type: 'boolean' },    // 结果
        results: { type: 'string' }     // 服务器返回的数据
    }
};