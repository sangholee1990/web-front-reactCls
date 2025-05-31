import React from 'react';

export default function HeaderComonent() {

    // 상태 관리 (객체)
    // const [게터 변수, 세터 함수] = React.useState({});
    const [state, setState] = React.useState({
        메인메뉴1: 'OnSale',
        메인메뉴2: '기획전',
        메인메뉴3: '푸른마을 레시피',
        메인메뉴4: '매장안내',
        로고: '푸른마을'
    });

    const [gnb] = React.useState([
        'OnSale', 
        '기획전', 
        '푸른마을 레시피', 
        '매장안내'
    ]);

    const [nav] = React.useState({
        메인메뉴: ['OnSale', '기획전', '푸른마을 레시피', '매장안내'],
        서브메뉴: [
            ['OnSale', '할인행사', '덤증정'],
            ['OnSale', '봄 먹거리', '여름 먹거리', '가을 먹거리', '겨울 먹거리'],
            ['OnSale', '메인요리', '밑반찬', '간식', '브런치'],   
            ['OnSale', '신규매장', '추천매장', '공지사항'],
        ]
    })


    return (
        // <header id="header">
        //     <h1>HeaderComonent</h1>
        // </header>
        <header id="header">
            <div className="row1">
                <h1><a href="./" title={state.로고}><span>{state.로고.slice(0, 2)}</span><em>{state.로고.slice(2, 4)}</em></a></h1>
            </div>
            <div className="row2">
                <nav id="nav">
                    <ul>
                        <li>
                            {/* <a href="!#" className="main-btn" title="OnSale">{state.메인메뉴1}</a> */}
                            {/* <a href="!#" className="main-btn" title="OnSale">{gnb[0]}</a> */}
                            <a href="!#" className="main-btn" title="OnSale">{nav['메인메뉴'][0]}</a>
                            <div className="sub sub1">
                                <ul>
                                    <li>
                                        <span><a href="!#">OnSale</a></span>
                                        <span><a href="!#">할인행사</a></span>
                                        <span><a href="!#">덤증정</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">OnSale</a></span>
                                        <span><a href="!#">봄 먹거리</a></span>
                                        <span><a href="!#">여름 먹거리</a></span>
                                        <span><a href="!#">가을 먹거리</a></span>
                                        <span><a href="!#">겨울 먹거리</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">OnSale</a></span>
                                        <span><a href="!#">메인요리</a></span>
                                        <span><a href="!#">밑반찬</a></span>
                                        <span><a href="!#">간식</a></span>
                                        <span><a href="!#">브런치</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">OnSale</a></span>
                                        <span><a href="!#">신규매장</a></span>
                                        <span><a href="!#">추천매장</a></span>
                                        <span><a href="!#">공지사항</a></span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="!#" className="main-btn" title="기획전">{gnb[1]}</a>
                            <div className="sub sub2">
                                <ul>
                                    <li>
                                        <span><a href="!#">기획전</a></span>
                                        <span><a href="!#">할인행사</a></span>
                                        <span><a href="!#">덤증정</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">기획전</a></span>
                                        <span><a href="!#">봄 먹거리</a></span>
                                        <span><a href="!#">여름 먹거리</a></span>
                                        <span><a href="!#">가을 먹거리</a></span>
                                        <span><a href="!#">겨울 먹거리</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">기획전</a></span>
                                        <span><a href="!#">메인요리</a></span>
                                        <span><a href="!#">밑반찬</a></span>
                                        <span><a href="!#">간식</a></span>
                                        <span><a href="!#">브런치</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">기획전</a></span>
                                        <span><a href="!#">신규매장</a></span>
                                        <span><a href="!#">추천매장</a></span>
                                        <span><a href="!#">공지사항</a></span>
                                    </li>
                                </ul>
                            </div>          
                        </li>
                        <li>
                            <a href="!#" className="main-btn" title="푸른마을 레시피">{gnb[2]}</a>
                            <div className="sub sub3">
                                <ul>
                                    <li>
                                        <span><a href="!#">푸른마을</a></span>
                                        <span><a href="!#">할인행사</a></span>
                                        <span><a href="!#">덤증정</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">푸른마을</a></span>
                                        <span><a href="!#">봄 먹거리</a></span>
                                        <span><a href="!#">여름 먹거리</a></span>
                                        <span><a href="!#">가을 먹거리</a></span>
                                        <span><a href="!#">겨울 먹거리</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">푸른마을</a></span>
                                        <span><a href="!#">메인요리</a></span>
                                        <span><a href="!#">밑반찬</a></span>
                                        <span><a href="!#">간식</a></span>
                                        <span><a href="!#">브런치</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">신규매장</a></span>
                                        <span><a href="!#">추천매장</a></span>
                                        <span><a href="!#">공지사항</a></span>
                                    </li>
                                </ul>
                            </div>                                          
                        </li>
                        <li>
                            <a href="!#" className="main-btn" title="매장안내">{gnb[3]}</a>
                            <div className="sub sub4">
                                <ul>
                                    <li>
                                        <span><a href="!#">매장안내</a></span>
                                        <span><a href="!#">할인행사</a></span>
                                        <span><a href="!#">덤증정</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">봄 먹거리</a></span>
                                        <span><a href="!#">여름 먹거리</a></span>
                                        <span><a href="!#">가을 먹거리</a></span>
                                        <span><a href="!#">겨울 먹거리</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">메인요리</a></span>
                                        <span><a href="!#">밑반찬</a></span>
                                        <span><a href="!#">간식</a></span>
                                        <span><a href="!#">브런치</a></span>
                                    </li>
                                    <li>
                                        <span><a href="!#">신규매장</a></span>
                                        <span><a href="!#">추천매장</a></span>
                                        <span><a href="!#">공지사항</a></span>
                                    </li>
                                </ul>
                            </div>                                       
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}