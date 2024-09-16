
import fetch from '../config/fetch'



    /**
 * 获取该用户的所有目录
 */
export const  selectAllCatalog =  (userid) =>fetch('Note/SelectALLBrowseTherPageNote',
{
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
 * 获取该用户的目录树形数据
 */
export const  selectNotesData =  (userid) =>fetch('Note/SelectALLNote',
{
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
 * 获取该用户的所有目录
 */
    export const  SelectNote =  (id,userid) =>fetch('Note/SelectNote',
    {
        "id":id,
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
 * 判断用户
 */
    export const  QueryUser =  (MacKeyDescription) =>fetch('Users/QueryUser',
    {
        "MacKeyDescription":MacKeyDescription,
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