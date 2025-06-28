import './scss/ModalComonent.scss';

export default function ModalComonent({모달, modalCloseEvent}){  // 프롭스:부모>자식  
    
    // 모달 닫기 버튼 클릭 이벤트
    const onClickCloseBtn=()=>{
        modalCloseEvent()  // 부모가 보내준 모달 닫기 함수 호출 실행
    }
    
    return(
    <div className={`layer-popup${모달.isOn?' on':''}`}>
        <div className="container">
            <div className="title">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="content">
                <ul>
                    <li>{모달.공지글}</li>
                </ul>
            </div>
            <div className="button-box">
                <button 
                  className="close-btn"
                  onClick={onClickCloseBtn}
                >닫기</button>
            </div>
        </div>
    </div>
    )
}