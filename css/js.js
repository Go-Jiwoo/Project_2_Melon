$(document).ready(function () {

    $("#btn").click(function () {
        $("*").toggleClass("dark");
        if ($(this).hasClass("dark")) {
            $("#btn img").attr("src", "img/dark.png");
            $("div.video div span").css("color", "#ffffff");
            $("#btn2 img").attr("src", "img/searchlight.svg");
            $("html, #btn2 button, #btn2 input, .player").css("background-color", "rgb(34,34,34)");
            $("div.ChartIn .chart").hover(function () {
                $(this).css("background", "#111111");
            }, function () {
                $(this).css("background", "rgba(0,0,0,0)");
            });

        } else {
            $("#btn img").attr("src", "img/light.png");
            $("div.video div span").css("color", "#00CD3C");
            $("#btn2 img").attr("src", "img/search.svg");
            $("html ,#btn2 button, #btn2 input, .player").css("background-color", "#ffffff");
            $("div.ChartIn .chart").hover(function () {
                $(this).css("background", "#f0f0f0");
            }, function () {
                $(this).css("background", "rgba(0,0,0,0)");
            });
        }
    });

    $("#btn2 img").click(function () {
        $("div").toggleClass("search");
        if ($("div #btn2").hasClass("search")) {
            $("input").css("display", "block");
        } else { $("input").css("display", "none") }
    });

    $(window).resize(function () {
        if ($("#Main_Page").width() <= 1099) {
            if ($("#Main_Page").width() <= 700) {
                $("#wrap4 img").attr("src", "img/muwa2.svg");
            } else {
                $("#wrap4 img").attr("src", "img/muwa3.svg");
            }
        } else {
            $("#wrap4 img").attr("src", "img/muwa.svg");
        }

    });

    $(function () {
        $(".ChartIn img").click(function () {
            $("#cover").attr("src", $(this).prev().attr("src"));
            $("#title").text($(this).prev().attr("song"));
            $("#singer").text($(this).prev().attr("singer"));
        });

    });


});