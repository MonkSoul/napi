'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：config.default.js
 * 文件描述：项目的基本配置文件
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

const databaseconfig = require("./core/database.config");
const swaggerdoc = require("./core/swagger.config");

// 配置项目唯一的标识
module.exports.keys = "monksoul.napi";

// egg-swagger-doc 配置信息
module.exports.swaggerdoc = swaggerdoc;

// 数据库配置
module.exports.sequelize = databaseconfig;