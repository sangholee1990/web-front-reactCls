import React from "react";
import './scss/Section3Comonent.scss'

export default function Section3Comonent({modalOpenEvent}) {

    // const [state, setState] = React.useState({
    //     공지사항: [{
    //             공지글: "한글 더미 텍스트입니다. 이 문장은 실제 내용이 아니며, 디자인 레이아웃을 확인하기 위한 예시입니다.",
    //             날짜: "2024-09-10",
    //             className: "open-btn"
    //         },
    //         {
    //             공지글: "가나다라마바사 아자차카타파하. 이 자리를 채우기 위한 한국어 예시 텍스트입니다. 내용을 적절히 채워주세요.",
    //             날짜: "2024-09-10"
    //         },
    //         {
    //             공지글: "샘플 텍스트입니다. 이 텍스트는 의미를 가지지 않으며, 오직 공간을 채우기 위해 사용됩니다. 길이를 조절할 수 있습니다.",
    //             날짜: "2024-09-10"
    //         },
    //         {
    //             공지글: "아름다운 우리 강산, 푸르게 푸르게. 화면 구성을 위한 임시 한글 텍스트이며, 실제 의미는 없습니다.",
    //             날짜: "2024-09-10"
    //         }
    //     ],
    //     갤러리: [
    //         { src: "./images/gallery1.jpg", alt: "gallery1", title: "gallery1" },
    //         { src: "./images/gallery2.jpg", alt: "gallery2", title: "gallery2" },
    //         { src: "./images/gallery3.jpg", alt: "gallery3", title: "gallery3" }
    //     ],
    // });
    const [state, setState] = React.useState({
        공지사항: [],
        갤러리: []
    });


    React.useEffect(() => {
        fetch("./data/section3.json", {
                method: 'GET'
            })
            .then((res) => res.json())
            .then((res) => {
                setState({
                    공지사항: res.공지사항,
                    갤러리: res.갤러리
                });
            })
            .catch();
    }, [])

    const [isOn, setIsOn] = React.useState(false);

    const onClickGalleryBtn = (e) => {
        e.preventDefault();
        setIsOn(true);
    };

    const onClickNoticeBtn = (e) => {
        e.preventDefault();
        setIsOn(false);
    };

    const onClickOpenBtn = (e, item) => {
        e.preventDefault();

        // console.log(item);
        // 최상위 컴포넌트가 보내준 모달열기 함수
        modalOpenEvent({
            // isOn: true,
            공지글: item.공지글
        });
    };

    return (
        // <section id="section3">
        //     <h2>Section3Comonent</h2>
        // </section>
        <section id="section3">
            <div className="container">
                <button className={`notice-btn ${isOn ? 'on' : ''}`} onClick={onClickNoticeBtn}>공지사항</button>
                <button className={`gallery-btn ${isOn ? 'on' : ''}`} onClick={onClickGalleryBtn}>갤러리</button>
                
                <div className={`notice-box ${isOn ? 'on' : ''}`}>
                    <ul>
                        {/* <li><a href="!#" className="open-btn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                        <li><a href="!#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                        <li><a href="!#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li>
                        <li><a href="!#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, in! Odio, repellendus. Labore modi sapiente cumque dolor nihil debitis ullam nobis? Sunt praesentium labore sapiente deserunt autem obcaecati alias fuga?</a><span>2024-09-10</span></li> */}
                        
                        {/* <li><a href="!#" className="open-btn">한글 더미 텍스트입니다. 이 문장은 실제 내용이 아니며, 디자인 레이아웃을 확인하기 위한 예시입니다.</a><span>2024-09-10</span></li>
                        <li><a href="!#">가나다라마바사 아자차카타파하. 이 자리를 채우기 위한 한국어 예시 텍스트입니다. 내용을 적절히 채워주세요.</a><span>2024-09-10</span></li>
                        <li><a href="!#">샘플 텍스트입니다. 이 텍스트는 의미를 가지지 않으며, 오직 공간을 채우기 위해 사용됩니다. 길이를 조절할 수 있습니다.</a><span>2024-09-10</span></li>
                        <li><a href="!#">아름다운 우리 강산, 푸르게 푸르게. 화면 구성을 위한 임시 한글 텍스트이며, 실제 의미는 없습니다.</a><span>2024-09-10</span></li> */}

                        {state.공지사항.map((item, index) => (
                            <li key={index}>
                                <a href="!#" className={item.className ? item.className : ''} onClick={(e)=>onClickOpenBtn(e, item)}>
                                    {item.공지글}
                                </a>
                                <span>{item.날짜}</span>
                            </li>
                        ))}

                    </ul>
                </div>
                
                <div className={`gallery-box ${isOn ? 'on' : ''}`}>
                    <ul>
                        {/* <li><a href="!#" title="gallery1"><img src="./images/gallery1.jpg" alt="gallery1"/></a></li>
                        <li><a href="!#" title="gallery2"><img src="./images/gallery2.jpg" alt="gallery2"/></a></li>
                        <li><a href="!#" title="gallery3"><img src="./images/gallery3.jpg" alt="gallery3"/></a></li> */}

                        {state.갤러리.map((image, index) => (
                            <li key={index}>
                                <a href="!#" title={image.title}>
                                    <img src={image.src} alt={image.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}