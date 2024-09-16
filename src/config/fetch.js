import {
	baseUrl
} from './env';

import axios from 'axios';

// 公共的api请求方法
export default (url = '', data = {}, type = 'GET', isFormData = false) => {
	url = baseUrl + url;
	const headers = {};

	if (isFormData) {
		// 如果需要上传文件，设置请求头为multipart/form-data
		headers['Content-Type'] = 'multipart/form-data';
	}

	if (type === 'GET') {
		url += '?';
		for (const key in data) {
			if (data[key]) {
				url += `${key}=${data[key]}&`;
			}
		}
		return axios.get(url, { headers }).then(
			Response => {
				return Response.data;
			},
			error => {
				return { code: -1, msg: '请求失败' + error.message, data: '' };
			}
		);
	} else if (type === 'POST') {
		if (isFormData) {
			// 如果是上传文件，直接发送FormData
			const formData = new FormData();
			for (const key in data) {
				if (data[key]) {
					formData.append(key, data[key][0]);
				}
			}
			console.log(data)
			return axios.post(url, formData,{ headers }).then(
				Response => {
					return Response.data;
				},
				error => {
					return { code: -1, msg: '请求失败' + error.message, data: '' };
				}
			);
		} else {
			// 如果不是上传文件，按照原有方式发送POST请求
			return axios.post(url, data).then(
				Response => {
					return Response.data;
				},
				error => {
					return { code: -1, msg: '请求失败' + error.message, data: '' };
				}
			);
		}
	}
};