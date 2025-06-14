import React, {useState} from "react"
import './scss/Section1Comonent.scss'

export default function Section1Comonent() {

    const [state] = useState({
        slide: [
            { id: 'slide3-clone', src: './images/slide3.jpg', alt: '푸른마을 이미지 슬라이드3', title: '푸른마을 이미지 슬라이드3', className: 'slide slide3 last' },
            { id: 'slide1', src: './images/slide1.jpg', alt: '푸른마을 이미지 슬라이드1', title: '푸른마을 이미지 슬라이드1', className: 'slide slide1' },
            { id: 'slide2', src: './images/slide2.jpg', alt: '푸른마을 이미지 슬라이드2', title: '푸른마을 이미지 슬라이드2', className: 'slide slide2' },
            { id: 'slide3', src: './images/slide3.jpg', alt: '푸른마을 이미지 슬라이드3', title: '푸른마을 이미지 슬라이드3', className: 'slide slide3' },
            { id: 'slide1-clone', src: './images/slide1.jpg', alt: '푸른마을 이미지 슬라이드1', title: '푸른마을 이미지 슬라이드1', className: 'slide slide1 first' },
        ],
        link: [
            { type: 'image', src: './images/link1.jpg', alt: 'link1', title: 'link1' },
            { type: 'separator' },
            { type: 'image', src: './images/link2.jpg', alt: 'link2', title: 'link2' },
            { type: 'separator' },
            { type: 'image', src: './images/link3.jpg', alt: 'link3', title: 'link3' },
        ]
    })
    
    // 0. 카운트 상태변수 설정 초기값 0
    // 리액트에서 제공하는 상태변수만 제어 함수
    const [cnt, setCnt] = React.useState(0);

    // 1. 메인슬라이드 1씩 카운트 함수
    // const nextCount=()=>{
    //     setCnt(cnt => cnt + 1);
    // }

    // 로딩시 실행하는 타이머 효과 적용 => 유즈이펙트 훅을 사용한다.
    // 2. 타이머 사용 3초 간격으로 1씩 증가시킨다.
    // React.useEffect(() => {
    //     const setId = setInterval(() => {
    //         setCnt(cnt => cnt + 1);
    //         // setCnt(cnt => cnt - 1);
    //         return () => clearInterval(setId);
    //     }, 6000)
    // }, [])

   React.useEffect(() => {
        const setId = setInterval(() => {
            setCnt(cnt => cnt + 1);
            // setCnt(cnt => cnt - 1);
        }, 3000);

        return () => {
            clearInterval(setId);
        }
    }, []);

    // 3. 리액트 선택자 슬라이드 랩퍼 박스 선택 정의
    // document.querySelector('.slide-wrap');
    // 리액트 DOM 선택자
    // [1] 탬플릿에서 ref={slideWrap} => <ul ref={slideWrap} className="slide-wrap">
    // [2] 상단에 등록 선언 useRef 훅 사용
    const slideWrap = React.useRef();

    // 4. 반드시 cnt가 1씩 증가하면 (변경되면) 와처 Watcher 감시자 => 의존성 변수 증가 시
    // 슬라이드 우측에서 좌측으로 애니메이션 구현
    React.useEffect(() => {
        if (cnt > 3) {
            // console.log('리턴 처음');
            slideWrap.current.style.transition = 'left 0s';
            slideWrap.current.style.left = `${-100 * 0}%`;
            setTimeout(() => {
                setCnt(1);
            }, 100)
        } else if (cnt < 0) {
            // console.log(cnt);
            // 선택자를 이용하여 애니메이션 구현
            slideWrap.current.style.transition = 'left 0s';
            slideWrap.current.style.left = `${-100 * 3}%`;
            setTimeout(() => {
                setCnt(2);
            }, 100)
        } else {
            slideWrap.current.style.transition = 'left 0.3s ease-in-out';
            slideWrap.current.style.left = `${-100 * cnt}%`;
        }
    }, [cnt])

    return (
        // <section id="section1">
        //     <h2>Section1Comonent</h2>
        // </section>
        <section id="section1">
            <div className="slide-container">
                <div className="slide-view">
                    {/* 애니메이션 선택자 */}
                    <ul ref={slideWrap} className="slide-wrap">
                        {/* <li className="slide slide3 last"><a href="!#" title="푸른마을 이미지 슬라이드3"><img src="./images/slide3.jpg" alt="푸른마을 이미지 슬라이드3"/><h2>푸른마을 이미지 슬라이드3</h2></a></li>
                        <li className="slide slide1"><a href="!#" title="푸른마을 이미지 슬라이드1"><img src="./images/slide1.jpg" alt="푸른마을 이미지 슬라이드1"/><h2>푸른마을 이미지 슬라이드1</h2></a></li>
                        <li className="slide slide2"><a href="!#" title="푸른마을 이미지 슬라이드2"><img src="./images/slide2.jpg" alt="푸른마을 이미지 슬라이드2"/><h2>푸른마을 이미지 슬라이드2</h2></a></li>
                        <li className="slide slide3"><a href="!#" title="푸른마을 이미지 슬라이드3"><img src="./images/slide3.jpg" alt="푸른마을 이미지 슬라이드3"/><h2>푸른마을 이미지 슬라이드3</h2></a></li>
                        <li className="slide slide1 first"><a href="!#" title="푸른마을 이미지 슬라이드1"><img src="./images/slide1.jpg" alt="푸른마을 이미지 슬라이드1"/><h2>푸른마을 이미지 슬라이드1</h2></a></li> */}

                        {state.slide.map(slide => (
                            <li key={slide.id} className={slide.className}>
                                <a href="!#" title={slide.title}>
                                    <img src={slide.src} alt={slide.alt}/>
                                    <h2>{slide.title}</h2>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="link">
                <ul>
                    {/* <li><a href="!#" title="link1"><img src="./images/link1.jpg" alt="link1"/></a></li>
                    <li><i></i></li>
                    <li><a href="!#" title="link2"><img src="./images/link2.jpg" alt="link2"/></a></li>
                    <li><i></i></li>
                    <li><a href="!#" title="link3"><img src="./images/link3.jpg" alt="link3"/></a></li> */}

                     {state.link.map((item, index) => (
                        <li key={index}>
                            {item.type === 'image' && (
                                <a href="!#" title={item.title}>
                                    <img src={item.src} alt={item.alt}/>
                                </a>
                            )}
                            {item.type === 'separator' && (
                                <i className="separator-icon"></i>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}