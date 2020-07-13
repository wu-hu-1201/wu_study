window.onload = function() {

    imgLocation("container", "box");
}

//获取当前有多少张图片要摆放
function imgLocation(parent, content) {
    //将parent下的所有内容全部取出
    var cparent = document.getElementById(parent);
    console.log(cparent)
    var ccontent = getChildElement(cparent, content);
    //console.log(ccontent)
    var imgWidth = ccontent[0].offsetWidth  
    //获取第一张图片宽度
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    //获取浏览器的宽度除以第一张图片的宽度（flor只取整数部分）
    cparent.style.cssText = "width:" + imgWidth * num + "px"


    var BoxHeightArr = []
    for (var i = 0; i <ccontent.length; i++) {
        if (i < num) {
        BoxHeightArr[i] = ccontent[i].offsetHeight
        //将所有图片高度存入数组
        //console.log(BoxHeightArr[i])
    } else {
        //将Math,min方法借给数组用
        var minHeight = Math.min.apply(null, BoxHeightArr)
        var minIndex = getminheightLocation(BoxHeightArr, minHeight)
        //console.log(minHeight)
        ccontent[i].style.position = 'absolute'
        ccontent[i].style.top = minHeight + 'px'
        ccontent[i].style.left = ccontent[minIndex].offsetLeft +'px'
        BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight
    }
    }
}

function getChildElement(parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");
    for (var i = 0; i < allContent.length; i++) {
        if (allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    // console.log(allContent);
    return contentArr;
}


function getminheightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] === minHeight) {
            return i
        }

    }
}