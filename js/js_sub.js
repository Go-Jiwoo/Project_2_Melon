$(document).ready(function () {

    // 선택된 UL은 변형 없도록 고정
    $(".collect > li").mouseover(function () {
        if ($(this).hasClass("selected")) {
            $(this).addClass("hover")
        }
    }).mouseleave(function () {
        $(this).removeClass("hover")
    });


    // 클릭하면 class 변경
    $(".collect > li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");

        let a = $(this).index();
        $(".group").eq(a).show();
        $(".group").eq(a).siblings().hide();
    });

    $("input:radio[name=check]").click(function(){
        let a = $(this).next().html();
        let b = $(this).parent().next().html();
        console.log(b)
            $(".ticket:first p").html(a+"&nbsp;&nbsp;|&nbsp;&nbsp;"+b);

    });


});
