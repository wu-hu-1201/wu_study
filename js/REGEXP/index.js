//正则的定义
// let patt1 = new RegExp("hello")
// let patt2 = /world/

//正则的使用  test()

// let pat = /my/
// let str = "this is my code ..."

// let arr = str.split(' ')  //字符串切割成数组
// console.log(arr)   //---->[ 'this', 'is', 'my', 'code', '...' ]
// console.log(arr.indexOf('my'))   //找'my'是不是在'str'中

// console.log(pat.test(str))   //--->true    str中存在'my'


// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg))  //-->[ 'hello', index: 3, input: 'oh hello world', groups: undefined ]
// let msg = 'oh  world'
// console.log(pat.exec(msg))  //--->null


//正则表达式的类型
// /pattern/attributes  g  i   全局匹配，区分大小写匹配

//区分大小写
// let str = 'Visit NanChang'
// let pat = /nanchang/
// console.log(pat.test(str))  //--->false

//不区分大小写
// let str = 'Visit NanChang'
// let pat = /nanchang/i
// console.log(pat.test(str))  //---->true
// let str = 'Visit NanChang oh my world'
// let pat = /nanchang/i
// let pat2 = /nanchang/g   //g：是否全局匹配
// console.log(pat2.test(str))  //-->false
// let pat2 = /nanchang/ig   //i:不区分大小写，g:全局匹配
// console.log(pat2.test(str))   //-->true



//字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/w3school/i))  //search:字符串查找--->6:在字符串第6位
// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/))  //匹配到数字就返回
//--->[ '1', index: 0, input: '1 plus 2 equl 33', groups: undefined ]
// console.log(str.match(/\d+/g))  //--->[ '1', '2', '33' ]    g:全局匹配，匹配完

//字符串替换
// let str = "Hello pp! oh I am wn"   //将'wn'替换成'snail'
// console.log(str.replace(/wn/, "snail"))  //-->Hello pp! oh I am snail

//字符串切割
// console.log(str.split(""))  
/*-->[
    'H', 'e', 'l', 'l', 'o',
    ' ', 'p', 'p', '!', ' ',
    'o', 'h', ' ', 'I', ' ',
    'a', 'm', ' ', 'w', 'n'
    ] */
// console.log(str.split(/\s+/))//-->[ 'Hello', 'pp!', 'oh', 'I', 'am', 'wn' ]


//正则写法
//[abc]查找方括号之间的任何字符
// let str = "Is this all there  is?"
// let pat = /[a-h]/    //-->[ 'h', index: 4, input: 'Is this all there  is?', groups: undefined ]
// let pat = /[a-h]/g   //-->[ 'h', 'a', 'h', 'e', 'e' ]
// console.log(str.match(pat))

//[^abc] 查找任何不在方括号之间的字符
// let str = "hello pp like jinlong"
// let pat = /[^like]/g
// console.log(str.match(pat))
/* -->[
      'h', 'o', ' ', 'p',
      'p', ' ', ' ', 'j',
      'n', 'o', 'n', 'g'
    ] */


// let str = 'hello zichen! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat))   //--->[ 'hello', 'you' ]

// let str = "Thaitt's hot! 100%"
// let pat = /h.t/g
// console.log(str.match(pat))  //-->[ 'hot' ]
// let pat = /\w/g
// console.log(str.match(pat)) 
/*-->[
     'T', 'h', 'a', 'i',
     't', 't', 's', 'h',
     'o', 't', '1', '0',
     '0'] */
// let pat = /\W/g
// console.log(str.match(pat))  //-->[ "'", ' ', '!', ' ', '%' ]


// let str = 'moon'
// let pat = "/oon\b/g"
// console.log(str.match(pat))

// let str = 'hello yangyang! hello world!'
// let pat = /l+/g
// console.log(str.match(pat))  //-->[ 'll', 'll', 'l' ]

// let str = 'hello yangyang! hello world!'
// let pat = /lo*/g
// console.log(str.match(pat))   //-->[ 'l', 'lo', 'l', 'lo', 'l' ]

// let str = 'Is this his'
// let pat = /is$/g
// console.log(str.match(pat))   //-->[ 'is' ]


//手机号正则
// let tel = '13437044230'
// let pat =/^1([3-9])\d{9}$/
// console.log(pat.test(tel))

//邮箱号正则
let email = '1871516072@qq.com'
let pat = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/
console.log(pat.test(email))