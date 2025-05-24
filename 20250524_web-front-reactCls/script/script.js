$(function(){

 
    //////////////////////////////////////////////////////////////////////////////////
    // 네비게이션 구현
    //////////////////////////////////////////////////////////////////////////////////  

    // 메인버튼 마우스 오버 이벤트
    $('.main-btn').on({
        mouseenter(){
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(300);
        },
        focus(){
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
            $('.sub').stop().slideUp(0);
            $(this).next().stop().slideDown(300);
        }
    })

    // #nav 떠나면 모두 초기화
    $('#nav ').on({
        mouseleave(){
            $('.main-btn').removeClass('on');
            $('.sub').stop().slideUp(300);
        }
    })




    //////////////////////////////////////////////////////////////////////////////////
    // 메인슬라이드 구현
    //////////////////////////////////////////////////////////////////////////////////
    // 1. 카운트변수
    // 2. 메인슬라이드 함수
    // 3. 다음카운트 함수
    // 4. 셋인타발
    let cnt = 0;
    function mainSlide(){
        $('.slide-wrap').stop().animate({top: `${-400 * cnt}px` }, 600, function(){
            if(cnt>=3){
                cnt=0
                $('.slide-wrap').stop().animate({top: `${-400 * cnt}px` }, 0);
            }
        });
    }
    function nextCount(){
        cnt++;
        mainSlide()
    }
    setInterval(nextCount, 3000)



    
    //////////////////////////////////////////////////////////////////////////////////
    // 공지사항 갤러리 구현
    //////////////////////////////////////////////////////////////////////////////////
    // 갤러리버튼 클릭 이벤트
    $('.gallery-btn').on({
        click(e){
            e.preventDefault();
            $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').addClass('on')
        }
    })
    
    
    // 공지사항버튼 클릭 이벤트
    $('.notice-btn').on({
        click(e){
            e.preventDefault();
            $('.notice-btn, .gallery-btn, .notice-box, .gallery-box').removeClass('on')
        }
    })

    // 모달 오픈
    $('.modal-open').on({
        click(e){
            e.preventDefault();
            $('.modal').addClass('on');
        }
    })
    // 모달 클로즈
    $('.close-btn').on({
        click(e){
            e.preventDefault();
            $('.modal').removeClass('on');
        }
    })



})