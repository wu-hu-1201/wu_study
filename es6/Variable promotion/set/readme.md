# set
1. set 类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值
2. 通过 add 方法向内部添加新成员； 通过 delete 删除成员； 通过 has 判断是否存在某一个元素； 通过 cllear 清空所有成员
3. 通过size 属性获取数据长度
4. 向set加入值得时候，不会默认做类型转换，所以 5 和 '5' 是不一样的
5. NaN === NaN => false  但是Set中认为其是全等的
6. 空对象{} 对于Set来说也是不全等的