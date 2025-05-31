import React, {useState} from "react"

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

    return (
        // <section id="section1">
        //     <h2>Section1Comonent</h2>
        // </section>
        <section id="section1">
            <div className="slide-container">
                <div className="slide-view">
                    <ul className="slide-wrap">
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