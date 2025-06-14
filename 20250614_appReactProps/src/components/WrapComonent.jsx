import React from "react";
import FooterComonent from "./wrap/FooterComonent";
import HeaderComonent from "./wrap/HeaderComonent";
import MainComonent from "./wrap/MainComonent";
import ModalComonent from "./wrap/ModalComonent";
import './scss/WrapComonent.scss'

export default function WrapComonent() {

    const [state, setState] = React.useState({
        모달: {
            isOn: false,
            공지글: ''
        }
    });

    // 자식은 부모 상태관리 변수 값 변경 할 수 없다
    // 그래서 부모 컴포넌트에서 자식이 변경하도록 변경 함수를 만든다.
    // 그리고 자식에서 함수를 프롭스로 내려준다.

    const modalOpenEvent=(공지글)=>{
        setState({
            모달: {
                isOn: true,
                공지글: 공지글
            }
        })
    }

     const modalCloseEvent=(item)=>{
        setState({
            모달: {
                isOn: false,
                공지글: ''
            }
        })
    }


    return (
        <div id="wrap">
            {/* <h1>WrapComonent</h1> */}
            <HeaderComonent></HeaderComonent>
            <MainComonent modalOpenEvent={modalOpenEvent}></MainComonent>
            <FooterComonent></FooterComonent>
            <ModalComonent 모달={state.모달} modalCloseEvent={modalCloseEvent}></ModalComonent>
        </div>
    )
}