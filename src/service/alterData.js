import {MACKEY} from '../store/initialize'
import fetch from '../config/fetch'

/**
 * 添加单个目录
 */
export const  addcatalog =  (CatalogName,userid) =>fetch('Note/CreateCatalog',
{
	"id": 0,
	"userId": userid,
	"catalogName": CatalogName,
	"macKeyDescription": MACKEY,
	"createTime": "2023-09-12T12:34:04.086Z",
	"delTime": "2023-09-12T12:34:04.086Z",
	"catalogStateType": 0
},
'POST',).then((response) => {
	// console.log('成功的响应数据:', response);
	return response
    // 在这里处理成功的响应
    
  })
  .catch((error) => {
    // 在这里处理请求失败或其他错误
    console.error('请求失败或发生错误:', error);
  });

/**
 * 删除单个目录
 */
export const  delcatalog =  (id,userid) =>fetch('Note/DeleteCatalog',
{
	"ID": id,
	"userId": userid,
},
'GET',).then((response) => {
	// console.log('成功的响应数据:', response);
	return response
    // 在这里处理成功的响应
    
  })
  .catch((error) => {
    // 在这里处理请求失败或其他错误
    console.error('请求失败或发生错误:', error);
  });

/**
 * 修改目录名称
 */
export const  alterCatalogName =  (id,userid,catalogName) =>fetch('Note/AlterCatalog',
{
	"ID": id,
	"userId": userid,
  "catalogName":catalogName
},
'GET',).then((response) => {
	// console.log('成功的响应数据:', response);
	return response
    // 在这里处理成功的响应
    
  })
  .catch((error) => {
    // 在这里处理请求失败或其他错误
    console.error('请求失败或发生错误:', error);
  });

  /**
 * 创建笔记
 */
export const  saveNotesData =  (id,userid,macKeyDescription,title,catalogid,mdContext,url) =>fetch(url,
{
	"id": id,
	"userId": userid,
	"macKeyDescription":macKeyDescription,
	"title":title,
	"catalogid":catalogid,
	"mdContext":mdContext
},
'POST',).then((response) => {
	// console.log('成功的响应数据:', response);
	return response
    // 在这里处理成功的响应
    
  })
  .catch((error) => {
    // 在这里处理请求失败或其他错误
    console.error('请求失败或发生错误:', error);
  });

  /**
 * 删除单个笔记
 */
export const  delnodes =  (id,userid) =>fetch('Note/DeleteNote',
{
	"ID": id,
	"userId": userid,
},
'GET',).then((response) => {
	// console.log('成功的响应数据:', response);
	return response
    // 在这里处理成功的响应
  })
  .catch((error) => {
    // 在这里处理请求失败或其他错误
    console.error('请求失败或发生错误:', error);
  });
  
  /**
 * 上传图片
 */
  export const  uploadimg =  (file) =>fetch('Note/UploadImages',
  {
    'file':file
  },
  'POST',true).then((response) => {
    // console.log('成功的响应数据:', response);
    return response
      // 在这里处理成功的响应
    })
    .catch((error) => {
      // 在这里处理请求失败或其他错误
      console.error('请求失败或发生错误:', error);
    });