//  一元操作符 +

console.log(1 + '1')   //  11
//---> 1 == >'1'  '1' + '1'   隐式类型转换


console.log(+'1')  //1
// +  ToNumber   Number('1)
console.log(+[])  //0
// [] == 0
console.log(+['1'])  //1
//+['1'] ==> +"1"     ['1'].valueOf == ["1"]  ["1"].toString == "1"
//  ToPrimitive(input, [preferredType])
//  input 表示要处理的值
//  preferredType, 非必填，表示希望转换成的类型， Number 和 String
//  如果 preferredType没传，当input是日期类型时，preferredType相对于String，其他情况都相当于Number

//  ToPrimitive(obj, Number)
//  1.如果obj是基本类型，直接返回
//  2.否则，调用valueOf，如果返回一个原始值，则js将其返回
//  3.否则，调用toString，如果返回一个原始值，则js将其返回
//  4.否则，js抛出一个类型错误异常

//  ToPrimitive(obj, String)
//  1.如果obj是基本类型，直接返回
//  2.否则，调用toString，如果返回一个原始值，则js将其返回
//  3.否则，调用valueOf，如果返回一个原始值，则js将其返回
//  4.否则，js抛出一个类型错误异常

// !的优先级大于== 所以先执行！；!可将变量转换成boolean类型，null,undefined,NaN以及空字符串('')
//  取反都为true，其他都为false

console.log(+['1', '2', '3']) //NaN
//['1', '2', '3'].valueOf()==["1", "2", "3"] ["1", "2", "3"].toString()=="1,2,3"  +"1,2,3"==NaN
console.log(+{})  //NaN


//  二元操作符 +
//  val1 + val2  =>  ToPrimitive(val1) + ToPrimitive(val2)
null + 1
// [] + []  --->""
// [] + {}  --->"[object Object]"
// {} + {}  --->"[object Object][object Object]"