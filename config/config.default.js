'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：config.default.js
 * 文件描述：项目的基本配置文件
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

// 配置项目唯一的标识
module.exports.keys = "monksoul.napi";

// 数据库配置
module.exports.dbconfig = {
    dialect: 'mysql',   // 数据库类型，支持 mysql，sqlite,mssql,pgsql,oracle
    host: "120.78.65.118",  // 数据库服务器地址
    port: 3306, // 数据库连接端口号
    database: "youlian_rc", // 数据库名称
    username: "test",   // 数据库登录用户名
    password: "zhyl@test.com"   // 数据库登录密码
};

// egg-swagger-doc 配置信息
exports.swaggerdoc = {
    dirScanner: './app/controller', // 配置自动扫描的控制器路径
    // 接口文档的标题，描述或其它
    apiInfo: {
        title: 'NAPI',  // 接口文档的标题
        description: 'swagger-ui for NAPI document.',   // 接口文档描述
        version: '1.0.0',   // 接口文档版本
    },
    schemes: ['http', 'https'], // 配置支持的协议
    consumes: ['application/json'], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: ['application/json'], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    securityDefinitions: {  // 配置接口安全授权方式
        // apikey: {
        //   type: 'apiKey',
        //   name: 'clientkey',
        //   in: 'header',
        // },
        // oauth2: {
        //   type: 'oauth2',
        //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
        //   flow: 'password',
        //   scopes: {
        //     'write:access_token': 'write access_token',
        //     'read:access_token': 'read access_token',
        //   },
        // },
    },
    enableSecurity: false,  // 是否启用授权，默认 false（不启用）
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）
    routerMap: true,    // 是否启用自动生成路由，默认 true (启用)
    enable: true,   // 默认 true (启用)
};