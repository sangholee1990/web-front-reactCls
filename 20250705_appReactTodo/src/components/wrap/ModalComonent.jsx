import { useDispatch, useSelector } from 'react-redux';
import './scss/ModalComonent.scss';
import { setModalAction } from '../../store/modal';
import { useCookies } from 'react-cookie';

export default function ModalComonent(){  // 프롭스:부모>자식  
    
    // 유즈쿠키() 훅 선언
    const [, setCookie] = useCookies();

    // 유즈셀렉터() 훅
    const 모달 = useSelector((state)=>state.modal);  // isOn 공지글
    // 유즈디스패치() 훅
    const dispatch = useDispatch();

    // 모달 닫기 버튼 클릭 이벤트
    const onClickCloseBtn=()=>{
        const obj = {
            isOn: false,
            공지글: ''
        }
       dispatch(setModalAction(obj)); // payload 전달인자

       let toDay = new Date();
       toDay.setDate(toDay.getDate()+3);  // 3일 쿠키
       setCookie('green_cookie','green_cookie_1day_close', {path:'/', expires: toDay})
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