$(document).ready(function () {

    // 다크모드
    $("#btn").click(function () {
        $("*").toggleClass("dark");
        if ($(this).hasClass("dark")) {
            $("#btn img").attr("src", "img/button/dark.png");
            $("div.video div span").css("color", "#ffffff");
            $("#btn2 img").attr("src", "img/button/searchlight.svg");
            $("html, #btn2 button, #btn2 input, .player").css("background-color", "rgb(34,34,34)");
            $("div.ChartIn .chart").hover(function () {
                $(this).css("background", "#111111");
            }, function () {
                $(this).css("background", "rgba(0,0,0,0)");
            });

        } else {
            $("#btn img").attr("src", "img/button/light.png");
            $("div.video div span").css("color", "#00CD3C");
            $("#btn2 img").attr("src", "img/button/search.svg");
            $("html ,#btn2 button, #btn2 input, .player").css("background-color", "#ffffff");
            $("div.ChartIn .chart").hover(function () {
                $(this).css("background", "#f0f0f0");
            }, function () {
                $(this).css("background", "rgba(0,0,0,0)");
            });
        }
    });


    // 검색창
    $("#btn2 img").click(function () {
        $("div").toggleClass("search");
        if ($("div #btn2").hasClass("search")) {
            $("input").css("display", "block");
        } else { $("input").css("display", "none") }
    });


    // 뮤직웨이브 광고 이미지 로드
    $(document).ready(function () {
        if ($("#Main_Page").width() <= 1099) {
            if ($("#Main_Page").width() <= 700) {
                $("#wrap4 img").attr("src", "img/musicwave/muwa2.svg");
            } else {
                $("#wrap4 img").attr("src", "img/musicwave/muwa3.svg");
            }
        } else {
            $("#wrap4 img").attr("src", "img/musicwave/muwa.svg");
        }

    });


    // 뮤직웨이브 광고 이미지 리사이즈
    $(window).resize(function () {
        if ($("#Main_Page").width() <= 1099) {
            if ($("#Main_Page").width() <= 700) {
                $("#wrap4 img").attr("src", "img/musicwave/muwa2.svg");
            } else {
                $("#wrap4 img").attr("src", "img/musicwave/muwa3.svg");
            }
        } else {
            $("#wrap4 img").attr("src", "img/musicwave/muwa.svg");
        }

    });




    // 플레이어 정보 변경
    $(function () {
        $(".ChartIn img").click(function () {
            let a = $(this).prev().attr("length")
            console.log(a)
            $("#cover").attr("src", $(this).prev().attr("src"));
            $("#cover").attr("length", a);
            $("#title").text($(this).prev().attr("song"));
            $("#singer").text($(this).prev().attr("singer"));
            
        });

    });
    


    // 셔플, 반복
    $(".controler img:nth-child(2)").click(function () {
        $(this).toggleClass("select1");
    });

    $(".controler img:nth-child(1)").click(function () {
        $(this).toggleClass("select1");
    });


    // 플레이어 재생, 멈춤
    $(".controler img:nth-child(4)").click(function () {
        let b = $("#cover").attr("length");
        console.log(b)
        $(this).toggleClass("during");
        if ($(this).hasClass("during")) {
            $(this).attr("src", "img/player/stop.svg");
            $(".player_length_playing").stop().animate({ width: "100%" }, b);
            
        } else {
            $(this).attr("src", "img/player/play.svg");
            $(".player_length_playing").stop().animate();
        }
    });

    // $(function(){
    //     if ($(".player_length_playing").css("width","100%")){
    //         $
    //     }
    // });


});