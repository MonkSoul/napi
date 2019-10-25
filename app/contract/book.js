'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：图书接口数据类型
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

module.exports = {
    // 新增会员模型
    CreateBookDto: {
        Name: { type: 'string', required: true },   // 名称
        Author: { type: 'string', required: true },   // 作者
        Price: { type: 'number', required: true }   // 单价
    },
    // 编辑会员模型
    UpdateBookDto: {
        Name: { type: 'string', required: false },   // 名称
        Author: { type: 'string', required: false },   // 作者
        Price: { type: 'number', required: false }   // 单价
    }
};