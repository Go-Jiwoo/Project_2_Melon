$(document).ready(function () {

    //플레이어 색상 그라디언트 불러오는 함수

    function grad() {
        var rgb = $("#cover").attr("color");
        var bgd = $("html").css("background-color");
        var color = "linear-gradient(" + bgd + "55%, rgba(" + rgb + ")";
        console.log(color)
        $(".playing").css("background", color);
    };


    // 다크모드
    $("#btn").click(function () {
        $("*").toggleClass("dark");
        if ($(this).hasClass("dark")) {
            $("#btn img").attr("src", "img/button/dark.png");
            $("div.video div span").css("color", "#ffffff");
            $("#btn2 img").attr("src", "img/button/searchlight.svg");
            $("html, #btn2 button, #btn2 input, .playing, .playing1").css("background-color", "rgb(34,34,34)");
            $("div.ChartIn .chart").hover(function () {
                $(this).css("background", "#111111");
            }, function () {
                $(this).css("background", "rgba(0,0,0,0)");
            });
            grad();

        } else {
            $("#btn img").attr("src", "img/button/light.png");
            $("div.video div span").css("color", "#00CD3C");
            $("#btn2 img").attr("src", "img/button/search.svg");
            $("html ,#btn2 button, #btn2 input, .playing, .playing1").css("background-color", "#ffffff");
            $("div.ChartIn .chart").hover(function () {
                $(this).css("background", "#f0f0f0");
            }, function () {
                $(this).css("background", "rgba(0,0,0,0)");
            });
            grad();
        }
    });


    // 검색창
    $("#btn2 img").click(function () {
        $("div").toggleClass("search");
        if ($("div #btn2").hasClass("search")) {
            $("input").css("display", "block");
        } else { $("input").css("display", "none") }
    });


    $(".chart > ul > li > button").click(function () {
        $(this).next().stop().fadeToggle();
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

    // 노래 재생, 멈춤
    $(function () {
        var img = document.getElementsByClassName("play");
        var audio = new Audio();
        $(".ChartIn img").click(function () {
            audio.src = "mp3/" + String($(this).prev().attr("song")) + ".mp3"
            audio.play();
        });

        //컨트롤러 이미지 변경, 재생시간
        $(".controler img:nth-child(4)").click(function () {
            let x = $("html").width();
            let y = $(".player_length_playing").width();
            let z = ((x - y) / x)

            let a = Number(($("#cover").attr("length")));
            let b = a * z

            $(this).toggleClass("during");
            if ($(this).hasClass("during")) {
                $(this).attr("src", "img/player/stop.svg");
                $(".player_length_playing").animate({ width: "100%" }, b, "linear");
                audio.play();
            } else {
                $(this).attr("src", "img/player/play.svg");
                $(".player_length_playing").stop().animate();
                audio.pause();
            }
        });

        // 셔플
        $(".controler img:nth-child(1)").click(function () {
            $(this).toggleClass("select1");
        });

        $(".controler img:nth-child(2)").click(function () {
            $(this).toggleClass("select1");
        });

    });


    // 플레이어 정보 변경
    $(function () {

        $(".ChartIn img").click(function () {
            let length = $(this).prev().attr("length")
            let info = "· " + $(this).prev().attr("min") + ":" + $
                (this).prev().attr("sec")



            // 이미지 src 정보 변경
            $("#cover").attr("length", length);
            $("#cover").attr("src", $(this).prev().attr("src"));
            $("#cover").attr("song", $(this).prev().attr("song"));
            $("#cover").attr("singer", $(this).prev().attr("singer"));
            $("#cover").attr("min", $(this).prev().attr("min"));
            $("#cover").attr("sec", $(this).prev().attr("sec"));
            $("#cover").attr("color", $(this).prev().attr("color"));
            grad();

            // 제목, 가수 변경
            $("#title").text($("#cover").attr("song"));
            $("#singer").html($("#cover").attr("singer") + info);

            // 컨트롤러 이미지 변경, 누르면 재생
            $(".controler img:nth-child(4)").attr("class", "during");
            $(".controler img:nth-child(4)").attr("src", "img/player/stop.svg");

            // 플레이어 시간
            let b = Number($("#cover").attr("length"));
            $(".player_length_playing").stop(true, true).css("width", "0");
            $(".player_length_playing").stop().animate({ width: "100%" }, b, "linear");

            // 누르면 올라오기
            $(".playing, .playing1").css("bottom", "0");

        });

    });



    //국내 탑 백 정보 입력
    $(document).ready(function () {
        let info = $(".information")
        for (let i in info) {
            let title = $(info.eq(i).prev().prev()).attr("song");
            let singer = $(info.eq(i).prev().prev()).attr("singer");
            let min = $(info.eq(i).prev().prev()).attr("min");
            let sec = $(info.eq(i).prev().prev()).attr("sec");

            info.eq(i).html(
                "<span>" + title + "</span>" + "<br>"
                + singer + " · " + min + ":" + sec);
        }
    });


    // 플레이어 이미지 클릭하면 정보 변경
    $("img#cover").click(function () {
        $(".playing").css("transition", "1s");
        $(".playing1").css("transition", "height 1s, opacity 0s");
        $(".playing, .playing1, .player").toggleClass("detail");
        $(this).toggleClass("fold");
        $(".total, #info").toggleClass("column");

        if ($(".playing").hasClass("detail")) {
            $("#lyrics").css("height", "550px");
            $(".total").css("margin-top", "30px");
            $(".controler").css("margin-top", "20px");
            $(".infoo").css("margin-top", "10px");
            $("#title, #singer").css("margin-left", "0");
            $(".player").css("transition", "0s");
        } else {
            $("#lyrics").css("height", "0px");
            $(".total").css("margin-top", "0px");
            $(".controler").css("margin-top", "0px");
            $(".infoo").css("margin-top", "0px");
            $("#title, #singer").css("margin-left", "15px");
            $(".player").css("transition", "5s");
        }

    });


});