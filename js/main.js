$(function(){
    $(".main_menu > li").hover(function(){
        $(this).find(".sub_menu").stop().slideDown()
    }, function(){
        $(".sub_menu").stop().slideUp()
    })//hover



// var n=0 ;//0 1 2
// setInterval(function(){
//     if(n == 2){
//         n=0;
//     }else{
//         n++;
    
//     }
//     $(".left_move").animate({"left" : n * (-800) + "px"},500, function(){
//         $("left_move")
//     });
// },3000)//setinterval


setInterval(function(){
    $(".left_move").animate({left : "-800px"},500,function(){
        $(".left_move").append($(".left_move li").eq(0));
        $(".left_move").css({left : "0"})
    })//animate
    
},3000)//setinterval

$(".p_click").click(function(){
    $(".popup").show();

})
$(".close").click(function(){
    $(".popup").hide();

})
})//


