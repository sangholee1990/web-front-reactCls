import React from "react";
import FooterComonent from "./wrap/FooterComonent";
import HeaderComonent from "./wrap/HeaderComonent";
import MainComonent from "./wrap/MainComonent";
import ModalComonent from "./wrap/ModalComonent";
import Sub1Component from "./wrap/sub/Sub1Component";
import Sub2Component from "./wrap/sub/Sub2Component";
import Sub3Component from "./wrap/sub/Sub3Component";
import Sub4Component from "./wrap/sub/Sub4Component";
import './scss/WrapComonent.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function WrapComonent(){
    const [state, setState] = React.useState({
        모달: {
            isOn: false,
            공지글: ''
        }
    });

    // 자식은 부모 상택관리 변수 값 변경 할 수 없다.
    // 그래서 부모 컴포넌트에서 자식이 변경 하도록 
    // 변경 함수를 만든다. 그리고 자식에서 함수를 프롭스로 내려준다.
    const modalOpenEvent=(공지글)=>{
        setState({
            모달 : {
                isOn: true,
                공지글: 공지글
            }
        })
    }

    const modalCloseEvent=()=>{
        setState({
            모달 : {
                isOn: false,
                공지글: ''
            }
        })
    }

    return(
        <div id="wrap">
            <HeaderComonent />
            <MainComonent modalOpenEvent={modalOpenEvent} />
            <Sub1Component />
            <Sub2Component />
            <Sub3Component />
            <Sub4Component />
            <FooterComonent />
            <ModalComonent 모달={state.모달} modalCloseEvent={modalCloseEvent} />
        </div>
    )
}