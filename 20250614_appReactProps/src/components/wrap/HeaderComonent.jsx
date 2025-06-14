import React from 'react';
import './scss/HeaderComonent.scss'

export default function HeaderComonent() {

    // 상태 관리 (객체)
    // const [게터 변수, 세터 함수] = React.useState({});
    // const [state, setState] = React.useState({
    //     메인메뉴1: 'OnSale',
    //     메인메뉴2: '기획전',
    //     메인메뉴3: '푸른마을 레시피',
    //     메인메뉴4: '매장안내',
    //     로고: '푸른마을'
    // });

    // const [gnb] = React.useState([
    //     'OnSale', 
    //     '기획전', 
    //     '푸른마을 레시피', 
    //     '매장안내'
    // ]);

    // const [nav] = React.useState({
    //     메인메뉴: ['OnSale', '기획전', '푸른마을 레시피', '매장안내'],
    //     서브메뉴: [
    //         ['OnSale', '할인행사', '덤증정'],
    //         ['OnSale', '봄 먹거리', '여름 먹거리', '가을 먹거리', '겨울 먹거리'],
    //         ['OnSale', '메인요리', '밑반찬', '간식', '브런치'],   
    //         ['OnSale', '신규매장', '추천매장', '공지사항'],
    //     ]
    // })

    const [state] = React.useState({
        로고: '푸른마을'
    });

    const [GNB] = React.useState([
        {
            메인메뉴: '이벤트세일',
            서브메뉴: [
                ['이벤트세일', '할인행사', '덤증정'],
                ['이벤트세일', '봄 먹거리', '여름 먹거리', '가을 먹거리', '겨울 먹거리'],
                ['이벤트세일', '메인요리', '밑반찬', '간식', '브런치'],   
                ['이벤트세일', '신규매장', '추천매장', '공지사항'],
            ],
        },
        {
            메인메뉴: '기획전',
            서브메뉴: [
                ['기획전', '할인행사', '덤증정'],
                ['기획전', '봄 먹거리', '여름 먹거리', '가을 먹거리', '겨울 먹거리'],
                ['기획전', '메인요리', '밑반찬', '간식', '브런치'],   
                ['기획전', '신규매장', '추천매장', '공지사항'],
            ],
        },
        {
            메인메뉴: '푸른마을',
            서브메뉴: [
                ['푸른마을', '할인행사', '덤증정'],
                ['푸른마을', '봄 먹거리', '여름 먹거리', '가을 먹거리', '겨울 먹거리'],
                ['푸른마을', '메인요리', '밑반찬', '간식', '브런치'],   
                ['푸른마을', '신규매장', '추천매장', '공지사항'],
            ],
        },
        {
            메인메뉴: '매장안내',
            서브메뉴: [
                ['매장안내', '할인행사', '덤증정'],
                ['매장안내', '봄 먹거리', '여름 먹거리', '가을 먹거리', '겨울 먹거리'],
                ['매장안내', '메인요리', '밑반찬', '간식', '브런치'],   
                ['매장안내', '신규매장', '추천매장', '공지사항'],
            ],
        },
    ])

    const [sub, setSub] = React.useState([true, false, false, false]);

    // 메인버튼 마우스 오버 이벤트 (마우스 엔터 이벤트)
    const onMouseEnterMainBtn=(e, n) => {
        // console.log(e);
        // console.log(n);
        let imsi = [false, false, false, false];
        imsi[n] = true;
        setSub(imsi);
        console.log(imsi);
    }

    const onMouseLeaveNav=() => {
        let imsi = [false, false, false, false];
        setSub(imsi);
    }

    return (
        // <header id="header">
        //     <h1>HeaderComonent</h1>
        // </header>
        <header id="header">
            <div className="row1">
                <h1><a href="./" title={state.로고}><span>{state.로고.slice(0, 2)}</span><em>{state.로고.slice(2, 4)}</em></a></h1>
            </div>
            <div className="row2">
                <nav id="nav" onMouseLeave={onMouseLeaveNav}>
                    <ul>
                     {GNB.map((item, idx) => (
                            <li key={idx}>
                                <a href="!#" className="main-btn" title={item.메인메뉴} onMouseEnter={(event) => onMouseEnterMainBtn(event, idx)}>{item.메인메뉴}</a>
                                {/* <div className={`sub sub${idx + 1}${sub[idx] == /true ? ' on': '' }`}> */}

                                {/* 조건부 연산자 && */}
                                {
                                    sub[idx] &&
                                    (
                                        <div className={`sub sub${idx + 1}`}>
                                            <ul>
                                                {item.서브메뉴.map((subList, subIndex) => (
                                                    <li key={`${idx}-${subIndex}`}>
                                                        {subList.map((subItem, itemIndex) => (
                                                            <span key={`${idx}-${subIndex}-${itemIndex}`}>
                                                                <a href="!#">{subItem}</a>
                                                            </span>
                                                        ))}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                }
                                
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}