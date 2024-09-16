/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */

// let baseUrl = 'http://43.139.69.222:8099/api/'; 
let baseUrl = 'http://localhost:5075/api/'
// let baseUrl = 'http://192.168.100.1:5075/api/'
let routerMode = 'hash';
let imgBaseUrl = '';


// if (process.env.NODE_ENV == 'development') {
//     imgBaseUrl = '/img/';

// }else if(process.env.NODE_ENV == 'production'){
// 	baseUrl = '//elm.cangdu.org';
//     imgBaseUrl = '//elm.cangdu.org/img/';
// }

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}