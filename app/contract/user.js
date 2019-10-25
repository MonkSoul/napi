'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：user.js
 * 文件描述：用户接口传入/返回参数类型定义
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

module.exports = {
    // 用户基本信息返回类型
    userInfoOutput: {
        id: { type: 'integer' },    // 标识
        name: { type: 'string' },   // 名称
    }
};