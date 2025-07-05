(($)=>{  

  const green = {
    init(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.footer();
    },
    header(){
        $('.main-btn').on({
            mouseenter(){
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
                $('.sub').stop().hide();
                $(this).next().stop().show();
            },
            focus(){
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
                $('.sub').stop().hide();
                $(this).next().stop().show();
            }
        });
        // nav 떠나면
        $('#nav').on({
            mouseleave(){
                $('.main-btn').removeClass('on');
                $('.sub').stop().hide();              
            }
        });
    },
    section1(){
        let cnt = 0;
        let setId = 0;
        const slideWrap = $('.slide-wrap');

        // 1. 메인슬라이드함수
        function mainSlide(){
            slideWrap.stop().animate({left: `${-100 * cnt}%` }, 600, function(){
                if(cnt>2) {cnt=0}
                slideWrap.stop().animate({left: `${-100 * cnt}%` }, 0);
            });
        }        
        // 2. 다음카운트함수
        function nextCount(){
            cnt++;
            mainSlide();
        }
        // 3. 타이머함수
        function autoTimer(){
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();
    },
    section2(){
       // 갤러리버튼 클릭이벤트
       $('.gallery-btn').on({
            click(){
                $('.gallery-btn, .notice-btn, .notice-box, .gallery-box').addClass('on');
            }
       })
       // 공지사항버튼 클릭이벤트
       $('.notice-btn').on({
            click(){
                $('.gallery-btn, .notice-btn, .notice-box, .gallery-box').removeClass('on');
            }
       })
       
    },
    section3(){
        // 공지사항 목록 => 1행 목록 클릭 => 레이어팝업창 보인다 & html 스크롤바 숨김
        // a 링크 버튼은 기본 기능이 새로고침이 발생한다. => 
        // 새로고침 기능을 제거 => 이벤트. p re ven t De faul t()  프 리 벤 트 디 폴 트
        $('.open-btn').on({
            click(e){
                e.preventDefault();       
                // 그룹 선택자는 선택자 전체를 인용부호 감싸주고,
                // 선택자별로 콤머로 분류해서 나열한다.         
                $('html, .layer-popup').addClass('on');               
                
            }
        });

        // // 닫기
        $('.close-btn').on({
            click(e){
                e.preventDefault();                
                $('html, .layer-popup').removeClass('on');
            }
        });

    },
    footer(){
        
    }
  }
  green.init();

})(jQuery);