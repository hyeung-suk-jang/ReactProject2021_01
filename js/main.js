function slideMenu(){
    var gnb = $('.gnb');
    var gnbBg = $('.menu_bg');
    var depthTwo = $('.gnb-depth2');
    
            // $gnbBg.animate({display:'block'},300);
            depthTwo.animate({ display: 'block' }, 300);
        })
    .mouseout(function(){
        // $gnbBg.stop().animate({display:'none'},300);
        depthTwo.stop().animate({display:'none'},300);
    })
}
slideMenu();
