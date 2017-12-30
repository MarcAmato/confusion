$(document).ready(function() {
    //Set sliding interval of carousel to 2000 ms
    $("#mycarousel").carousel({interval: 2000});
    //Activate pause button
    $("#carousel-button").click(function(){
        //Test whether this is play or pause button
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            //Remove pause class and add play class.
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else if($("#carousel-button").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            //Remove play class and add pause class.
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });
});