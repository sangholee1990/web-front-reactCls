import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './scss/Section3Component.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setModalAction } from '../../../store/modal';
// import { modalCloseEvent } from '../../../store/modal';
import { useCookies } from 'react-cookie';

// export default function Section3Component({modalOpenEvent}) {
export default function Section3Component() {

    const [cookies, ] = useCookies();

    const [state, setState] = useState({
        공지사항: [],  // map 함수 사용할 내용 이므로 반드 빈배열 사용 해야함.
        갤러리: []
    })
    const [isOn, setIsOn] = React.useState(false);  

    // const 모달 = useSelector((state) => {
    //     // return state.modal.모달;
    //     return state.modal;
    // })
    const dispatch = useDispatch();

    useEffect(()=>{       

      axios({
        url: './data/section3.json', 
        method: 'GET'
      })
      .then((res)=>{
            setState({
                공지사항: res.data.공지사항,
                갤러리: res.data.갤러리
            })
      })
      .catch((err)=>{
            console.log(err);
      });

    },[])

    // 로딩시 상태관리 변수 중 공지사항 값이 저장되면 
    // 모달창을 자동으로 띄운다
     useEffect(() => {
         if (state.공지사항 && state.공지사항[0]) {

            // 쿠키 확인
            console.log(cookies);
            if (cookies.myCookie === "hide-popup-for-24h") {
                return
            }

            const obj = {isOn: true, 공지글: state.공지사항[0].공지글}
            dispatch(setModalAction(obj));
        }
     }, [state.공지사항[0]?.공지글])


    // 갤러리버튼 클릭 이벤트 => 화살표 함수 사용
    const onClickGalleryBtn=(e)=>{
        e.preventDefault();
        setIsOn(true); // 세터함수 사용 값 변경
    }

    // 공지사항버튼 클릭 이벤트
    const onClickNoticeBtn=(e)=>{
        e.preventDefault();
        setIsOn(false); // 세터함수 사용 값 변경
    }


    // 공지사항 공지글 클릭 이벤트 => 모달창 열기
    // 공지글 전달하기
    const onClickOpenBtn=(e, row)=>{
        e.preventDefault();        
        // modalOpenEvent(공지글); // 최상위 컴포넌트가 보내준 모달열기 함수

        const obj = {isOn: true, 공지글: row.공지글}
        dispatch(setModalAction(obj));
        // console.log(obj);
    }
    return (
        <section id="section3">
            <div className="container">
                <button 
                  className={`notice-btn${isOn ?' on':''}`}
                  onClick={onClickNoticeBtn}
                >공지사항</button>

                <button 
                  className={`gallery-btn${isOn?' on':''}`}
                  onClick={onClickGalleryBtn}                  
                >갤러리</button>

                <div className={`notice-box${isOn?' on':''}`}>
                    <ul>
                    {
                        state.공지사항.map((row, idx)=>{
                            return(
                                <li key={row.공지글}  data-key={row.공지글}>
                                    <a 
                                      href="!#" 
                                      className="open-btn"
                                      onClick={(e)=>onClickOpenBtn(e, row)}
                                    >{row.공지글}</a>
                                    <span>{row.날짜}</span>
                                </li>
                            )
                        })                        
                    }
                    </ul>
                </div>
                
                <div className={`gallery-box${isOn?' on':''}`}>
                    <ul>
                    {
                        state.갤러리.map((row)=>{
                            return(
                                <li key={row.텍스트} data-key={row.텍스트}>
                                    <a href="!#" title={row.텍스트}>
                                        <img src={row.이미지} alt={row.텍스트} />
                                    </a>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    );
}