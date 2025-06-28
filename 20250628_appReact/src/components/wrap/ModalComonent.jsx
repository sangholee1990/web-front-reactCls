import { useDispatch, useSelector } from 'react-redux';
import './scss/ModalComonent.scss';
// import { modalCloseEvent } from '../../store/modal';
import { setModalAction } from '../../store/modal';

// export default function ModalComonent({모달, modalCloseEvent}){  // 프롭스:부모>자식  
export default function ModalComonent(){  // 프롭스:부모>자식  
    
    const 모달 = useSelector((state) => {
        // return state.modal.모달;
        return state.modal;
    })
     
    const dispatch = useDispatch();

      // 모달 닫기 버튼 클릭 이벤트
    const onClickCloseBtn=()=>{
        // alert("모달창 닫기");
        // 리듀서 상태변수 값 변경하기
        // 유즈디스패처 useDispatch() 훅
        
        // 패일로드
        // const obj = {공지글: ''}
        // dispatch(modalCloseEvent(obj));

        const obj = {isOn: false, 공지글: ''}
        dispatch(setModalAction(obj));
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