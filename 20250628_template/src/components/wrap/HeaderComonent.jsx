import React, {useEffect} from "react";
import axios from "axios";
import './scss/HeaderComonent.scss';
// import { Link, Outlet } from "react-router-dom";

export default function HeaderComonent(){
    // MVC => M(모델Model) V(뷰 탬플릿트 View Template) C(컨트롤러 Controller)
    // Model(모델)=> 데이터
    const [state, setState] = React.useState({
       로고: '푸른마을',  // key(키): value(값)
       GNB: [],
       sub: Array(4).fill(false) // 배열(4칸).채우기(false) => Array(4).fill(false)
    });


    // 로딩시 외부 데이터 가져오기
    // FETCH() API 사용
    useEffect(()=>{

        // axios api 사용
        axios({
            url:'./data/gnb.json',
            method: 'GET'
        })
        .then((res)=>{
            // console.log( res.data.gnb );  // axio 기본 속성 .data
       
            setState({
                ...state,  // ...전개연산자 state 안에 있는 기존의 모든 데이터는  그대로 두고
                GNB: res.data.gnb  // 이것만 추가한다.
            })
        })
        .catch((err)=>{
            console.log( err );
        })  


    }, [])

    // 메인버튼 마우스 오버 이벤트(마우스 엔터 이벤트)
    const onMouseEnterMainBtn=(n)=>{ // 매개변수 Parameter 파라미터
        let imsi = Array(4).fill(false);
        imsi[n] = true;
        setState({
            ...state,
            sub: imsi
        })
    }

    // nav 떠나면
    const onMouseLeaveNav=()=>{
        let imsi = Array(4).fill(false);
        setState({
            ...state,
            sub: imsi
        })
    }

    return (
    <header id="header">
        <div className="row1">
            {/* <h1><Link to="/main" title={state.로고}><span>{state.로고.slice(0,2)}</span><em>{state.로고.slice(2)}</em></Link></h1> */}
            <h1><a href="#" title={state.로고}><span>{state.로고.slice(0,2)}</span><em>{state.로고.slice(2)}</em></a></h1>
        </div>
        <div className="row2">
            <nav id="nav"  onMouseLeave={onMouseLeaveNav}>
                <ul>
                {
                   state.GNB.map((item,i)=>{
                        return(
                            <li data-key={item.메인메뉴} key={item.메인메뉴}> {/* 메인메뉴 행 반복문 */}
                                {/* <a href="!#" className="main-btn" title="OnSale">{GNB[i].메인메뉴}</a> */}
                                <a 
                                    onMouseEnter={()=>onMouseEnterMainBtn(i)}  /* 전달인자 Argument 아규먼트 */
                                    href="!#" 
                                    className="main-btn" 
                                    title="OnSale"
                                >{item.메인메뉴}</a>
                                <div className={`sub sub${i+1}${state.sub[i]? ' on':''}`}>
                                    <ul>
                                    {
                                        item.서브메뉴.map((item2, idx2)=>{
                                            return(
                                                <li data-key={`서브메뉴${idx2+1}`} key={`서브메뉴${idx2+1}`}> {/* 서브메뉴 행 반복문 */}

                                                    {
                                                        item2.map((item3, idx3)=>{
                                                            return(
                                                                <span data-key={`서브메뉴${idx2+1}-${idx3+1}`} key={`서브메뉴${i+1}-${idx3+1}`}>{/* 서브메뉴 열 반복문  */}
                                                                    <a href="!#">{item3}</a>
                                                                </span>
                                                            )
                                                        })
                                                        
                                                    }
                                                </li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                            </li>
                        )
                   })
                }
                    <li><a href="#" className="main-btn">서브페이지1</a></li>
                    <li><a href="#" className="main-btn">서브페이지2</a></li>
                    <li><a href="#" className="main-btn">서브페이지3</a></li>
                    <li><a href="#" className="main-btn">서브페이지4</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}