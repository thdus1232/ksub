$(function(){ 
    $(".nav>ul>li").mouseover(function(){ 
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>ul>li").mouseout(function(){ 
        $(this).find(".sub").stop().slideUp();
    });
    // nav end
    // 1200 nav
    $('#side-button').click(function(){
        $('#m_gnb').toggleClass('on');
    });
    // 1200 end

    $(".lnb_nav>ul>li").mouseover(function(){ 
        $(this).find(".lnb").stop().slideDown();
    });
    $(".lnb_nav>ul>li").mouseout(function(){ 
        $(this).find(".lnb").stop().slideUp();
    });
    // aside nav end
});