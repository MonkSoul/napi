'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：plugin.js
 * 文件描述：第三方npm插件配置文件
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

// 配置 egg-swagger-doc 插件信息
module.exports.swaggerdoc = {
    enable: true,   // 启用 swagger-ui 默认启用
    package: 'egg-swagger-doc', // 指定 swagger 包名称
};

// 配置 egg-sequelize 插件信息
exports.sequelize = {
    enable: true, // 启用 sequelize 默认启用
    package: 'egg-sequelize', // 指定 egg-sequelize 包名称
};

// 配置 egg-validate 参数验证
exports.validate = {
    enable: true,    // 启用 参数验证 默认启用
    package: 'egg-validate',    // 指定 egg-validate 包名称
};