$(function(){
    $("#menu_mobile img").click(function(){
        var el = $(this).parent().find("ul"); 
        if(el.is(":hidden")){
            el.fadeIn();
        }else{
            el.fadeOut();
        }
    });
})