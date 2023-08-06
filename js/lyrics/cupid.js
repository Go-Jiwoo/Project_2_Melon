$(document).ready(function(){

    $("img#cover").click(function(){
        let chart = String($(this).attr("song"));
        
        if (chart=="Cupid (Twin Ver.)"){
            $("#lyrics").html(
                "A hopeless romantic all my life" + "<br >" +
                "Surrounded by couples all the time" + "<br >" +
                "I guess I should take it as a sign (oh why oh why, oh why oh why)" + "<br >" +
                "I'm feeling lonely (lonely)" + "<br >" +
                "Oh I wish I'd find a lover that could hold me (hold me)" + "<br >" +
                "Now I'm crying in my room" + "<br >" +
                "So skeptical of love (say what you say but I want it more)" + "<br >" +
                "But still I want it more, more, more" + "<br >" +
                "I gave a second chance to Cupid" + "<br >" +
                "But now I'm left here feeling stupid" + "<br >" +
                "Oh the way he makes me feel that love isn't real" + "<br >" +
                "Cupid is so dumb" + "<br >" +
                "I look for his arrows everyday" + "<br >" +
                "I guess he got lost or flew away" + "<br >" +
                "Waiting around is a waste (waste)" + "<br >" +
                "Been counting the days since November" + "<br >" +
                "Is loving as good as they say?" + "<br >" +
                "Now I'm so lonely (lonely)" + "<br >" +
                "Oh I wish I'd find a lover that could hold me (hold me)" + "<br >" +
                "Now I'm crying in my room" + "<br >" +
                "So skeptical of love (say what you say but I want it more)" + "<br >" +
                "But still I want it more, more, more" + "<br >" +
                "I gave a second chance to Cupid" + "<br >" +
                "But now I'm left here feeling stupid" + "<br >" +
                "Oh the way he makes me feel that love isn't real" + "<br >" +
                "Cupid is so dumb" + "<br >" +
                "Hopeless girl is seeking someone who will share this feeling" + "<br >" +
                "I'm a fool, a fool for love, a fool for love" + "<br >" +
                "I gave a second chance to Cupid" + "<br >" +
                "But now I'm left here feeling stupid" + "<br >" +
                "Oh the way he makes me feel that love isn't real" + "<br >" +
                "Cupid is so dumb" + "<br >" 
        )}
    });

});