'use strict';

/**
 * 当前版本：v1.0.0
 * 文件名称：swagger.config.js
 * 文件描述：swagger 配置文件
 * 创建时间：2019/10/25
 * 编写作者：MonkSoul
 * 修改时间：NONE
 */

// egg-swagger-doc 配置信息
module.exports = {
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