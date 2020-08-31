// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wu-haibing-c2elw'  //指明当前要使用的环境下的服务器

cloud.init()
const db = cloud.database({ env })  //连接当前这个数据库

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event)    // --->{ groupName: '', userInfo: { appID: '', openId: ''}}
  
  const userInfo = event.userInfo  //拿到小程序用户信息
  // 连通数据库
  return await db.collection('group').add({ //调用collection方法连接当前环境服务器下要使用的库
    data: {
      name: event.groupName,  //当前存进的数据（输入的群名）
      createBy: userInfo.openId,  //谁输的
      createTime: new Date(),  //创建时间
      deleted: false,
      updateTime: new Date()  //更新时间
    }
  })  // .then --> 然后/接下来
  .then( res => { //在把相关信息存入group中时再存入一些信息到用户群组
    return db.collection('user-group').add({
      data: {
        groupId: res._id,  //存入group的_id
        userId: userInfo.openId,  //存入当前用户的ID
        invalid: false
      }
    })
  })
}