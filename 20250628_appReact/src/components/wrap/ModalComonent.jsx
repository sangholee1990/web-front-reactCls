import { useDispatch, useSelector } from 'react-redux';
import './scss/ModalComonent.scss';
// import { modalCloseEvent } from '../../store/modal';
import { setModalAction } from '../../store/modal';
import { useCookies } from 'react-cookie';

// export default function ModalComonent({모달, modalCloseEvent}){  // 프롭스:부모>자식  
export default function ModalComonent(){  // 프롭스:부모>자식  
    
    // 유즈쿠키 훅 선언
    // const [cookie, setCookie] = useCookies();
    const [, setCookie] = useCookies();
    
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

        // 날짜 셋팅
        let toDay = new Date();
        console.log(toDay);

        toDay.setDate(toDay.getDate() + 1);
        console.log(toDay);

        setCookie('myCookie', 'hide-popup-for-24h', {path: '/', expires: toDay});

        // alert(`'myCookie' 쿠키가 24시간 뒤(${toDay.toLocaleString()})에 만료되도록 설정되었습니다.`);
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