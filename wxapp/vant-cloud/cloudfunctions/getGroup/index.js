// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'wu-haibing-c2elw'

cloud.init()
const db = cloud.database({ env })  //连接当前这个数据库

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID  //本地执行时获取的当前登陆的用户ID

  let groupList = await db.collection('user-group').where({
    //连接当前'user-group'数据库   where-->查找这个库中是否有哪些信息
    userId: openId   //是否有u和o 对应上
  }).get()
  let returnResult = []
  for (let i = 0; i < groupList.data.length; i++) {
    const oneGroup = await db.collection('group').where({
      _id: groupList.data[i].groupId,  
      deleted: false
    }).get()
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get()

      oneGroup.data[0].createBy = userInfo.data[0]
      oneGroup.data[0].relateUserGroupId = groupList.data[i]._id
      returnResult.push(oneGroup.data[0])
    }
  }
  return returnResult.sort((a,b) => 
    b.createTime - a.createTime
  )
}