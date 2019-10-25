'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：member.js
 * 文件描述：会员接口数据类型
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

module.exports = {
    // 会员基本信息类型
    MemberInfo: {
        id: { type: 'integer' },    // 标识
        name: { type: 'string' },   // 名称
    }
};