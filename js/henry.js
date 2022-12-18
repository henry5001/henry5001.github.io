let henry = true;
let henryMsg = null;
let tocFlag = false;

if (navigator.userAgent.indexOf('Mobile') != -1) {
    henryMsg='检查到移动设备';
    // <!-- <%- toc(page.content,'list_number') %> -->

    // 目录的样式布局定位只加载一次
    document.getElementById('henryHuang').classList.add('henryToc');
    document.getElementById('henryTop').removeAttribute('class');
    document.getElementById('henryBook').removeAttribute('class');
}

let bookClick = document.getElementById('henryBook');
// bookClick.onclick=showHenryToc();

bookClick.onclick=function fBook() {
    if (!tocFlag) {
        showHenryToc();
        tocFlag=!tocFlag;
    }else{
        hideHenryToc()
        tocFlag=!tocFlag;
    }
}


// //声明需要点击元素外部事件的数组
// var outsideClick=[
// {select:"#henryHuang",callback:function(){
//     alert(55555);
//     //如果目录被打开才执行
//     if (tocFlag) {
//         hideHenryToc();
//         tocFlag=!tocFlag;
//     }
// }},
// {select:"#henryBook",callback:function() {
//     alert(666);
//     //如果目录被打开才执行
//     if (tocFlag) {
//         hideHenryToc();
//         tocFlag=!tocFlag;
//     }
// }}
// ];
// //全局的点击事件
//             document.addEventListener("click",function(e){
// //每次点击循环所有数组项
//                 let evFlag = false;
//                 for(var i=0,len=outsideClick.length;i<len;i++){
// //判断点击的元素是否在需要外部事件元素的内部
//                     if(!document.querySelector(outsideClick[i]["select"]).contains(e.target) && 
//                     !document.querySelector(outsideClick[i]["select"]).contains(e.target)){
// //如果不在则执行相应的回调
//                         outsideClick[i]["callback"]();
//                     }
//                 }
//             },false)

// 显示目录
function showHenryToc() {
    console.log('showHenryToc !!!');
    document.getElementById('henryHuang').classList.remove("d-none");
}



// 隐藏目录
function hideHenryToc() {
    console.log('hideHenryToc !!!');
    document.getElementById('henryHuang').classList.add('d-none');
}



// side-col d-lg-block col-lg-2