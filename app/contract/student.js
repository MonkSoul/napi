'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：book.js
 * 文件描述：学生接口数据类型
 * 创建时间：2019/10/25
 * 编写年龄：MonkSoul
 * 修改时间：NONE
 */

module.exports = {
    // 新增学生模型
    CreateStudentDto: {
        Name: { type: 'string', required: true },   // 名称
        Age: { type: 'integer', required: true },   // 年龄
    },
    // 编辑学生模型
    UpdateStudentDto: {
        Name: { type: 'string', required: false },   // 名称
        Age: { type: 'integer', required: false },   // 年龄
    }
};