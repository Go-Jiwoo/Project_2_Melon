$(document).ready(function () {

    // 선택된 UL은 변형 없도록 고정
    $(".collect > li").mouseover(function () {
        if ($(this).hasClass("selected")) {
            $(this).addClass("hover")}
    }).mouseleave(function(){
        $(this).removeClass("hover")
    });

    // 클릭하면 class 변경
    $(".collect > li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    
});