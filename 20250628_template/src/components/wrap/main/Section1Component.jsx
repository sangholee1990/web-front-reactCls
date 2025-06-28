import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './scss/Section1Component.scss';

export default function Section1Component(props) {

    const [state, setState] = useState({
        슬라이드: []
    })

    // 로딩시 외부데이터 가져오기 
    useEffect(()=>{
        
        axios({
            url:'./data/slide.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                슬라이드: res.data.슬라이드
            })
        })
        .catch((err)=>{
            console.log( err )
        });

    }, [])



    // 1. 카운트 상태 변수(게터변수, 세터함수) 설정 초기값 0
    const [cnt, setCnt] = React.useState(0); // 리액트에서 제공하는 상태변수만 제어 함수 => 훅

    // 2. 로딩시 실행하는 타이머 효과 적용 => 유즈이펙트 훅을 사용한다.
    //    리액트에서 제공하는 효과 제어 함수 => 훅
    //    타이머 사용 3초간격으로 1씩 증가하도록 카운트 실행
    React.useEffect(()=>{
        
        const setId = setInterval(()=>{
            setCnt(cnt=>cnt+1)    // 1씩 증가하는 카운트 함수 실행  다음슬라이드
            // setCnt(cnt=>cnt-1)       // 1씩 감소하는 카운트 함수 실행  이전슬라이드  
            return ()=> clearInterval(setId)
        }, 6000)

    }, [])  // 의존성 빈배열 처리


    // 3. 리액트 선택자 => 슬라이드 랩퍼 박스 선택 정의
    // 제이쿼리 DOM 선택자 $('.slide-wrap')
    // 자바스크립트(바닐라JS) DOM 선택자 document.querySelector('.slide-wrap')
    // 리액트 DOM 선택자 
    // [1] 탬플릿트 에서 ref={slideWrap} => <ul ref={slideWrap} className="slide-wrap">
    // [2] 상단에 등록 선언  유즈레프 훅 사용
    const slideWrap = React.useRef(); 

    // 4. 반드시 cnt가 1씩 증가 하면(변경되면) 와처 watcher (감시자) => useEffect 의존성 변수 증가시
    // 선택자 슬라이드 랩퍼 박스를 우측에서 좌측으로 애니메이션 구현
    React.useEffect(()=>{
       
        if(cnt>3) {  // 리턴 필요  처음으로 되돌아가서 계속 롤링 해야 하니까
            // console.log('리턴 처음으로')
            slideWrap.current.style.transition = 'left 0s';
            slideWrap.current.style.left = `${-100 * 0}%`;
            // 예외처리
            // 비동기방식 처리 => 처음으로 위치변경 완료 뒤 0.1초 후에 카운트 변경
            setTimeout(()=>{
                setCnt(1); // 리턴하고 2번째 슬라이트 카운트
            },100)
        }
        else if(cnt<0) {  // 리턴 필요  처음으로 되돌아가서 계속 롤링 해야 하니까
            // console.log('리턴 마지막으로')
            slideWrap.current.style.transition = 'left 0s';
            slideWrap.current.style.left = `${-100 * 3}%`
            // 예외처리
            // 비동기방식 처리 => 처음으로 위치변경 완료 뒤 0.1초 후에 카운트 변경
            setTimeout(()=>{
                setCnt(2); // 리턴하고 2번째 슬라이트 카운트
            })
        }
        else{
            // console.log( cnt );
            // 선택자를 slideWrap 이용 current 애니메이션 구현
            slideWrap.current.style.transition = 'left 0.6s ease-in-out';
            slideWrap.current.style.left = `${-100 * cnt}%`
        }

    }, [cnt])

    return (
        <section id="section1">
            <div className="slide-container">
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">   {/* 애니메이션 선택자 */} 
                    {
                        state.슬라이드.map((row)=>{
                            return(
                                <li 
                                  className={`slide ${row.클래스}`} 
                                  key={row.id} 
                                  data-key={row.id}
                                >
                                    <a href="!#" title={row.타이틀}>
                                        <img src={row.이미지} alt={row.타이틀}/>
                                        <h2>{row.타이틀}</h2>
                                    </a>
                                </li>                       
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
            <div className="link">
                <ul>
                    <li><a href="!#" title="link1"><img src="./images/link1.jpg" alt="link1"/></a></li>
                    <li><i></i></li>
                    <li><a href="!#" title="link2"><img src="./images/link2.jpg" alt="link2"/></a></li>
                    <li><i></i></li>
                    <li><a href="!#" title="link3"><img src="./images/link3.jpg" alt="link3"/></a></li>
                </ul>
            </div>
        </section>
    );
}