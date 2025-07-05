import React, {useState, useEffect} from 'react';
import './scss/Section2Component.scss';
import axios from 'axios';

export default function Section2Component(props) {

   // 상태관리
   const [banner, setBanner] = useState({
        배너: {
            이미지: '',
            타이틀: '',
            "배너 내용": ''  // 속성에 공백이 있으면 반드시 인용부호로 감싸준다.
        }
   });

   // 로딩시 구현 => api
   useEffect(()=>{

      axios({
        url: './data/banner.json', 
        method: 'GET'
      })
      .then((res)=>{
        setBanner({
            배너: {
                이미지: res.data.배너.이미지,
                타이틀: res.data.배너.타이틀,
                "배너 내용": res.data.배너['배너 내용']
            } 
        })
      })
      .catch((err)=>{
            console.log(err);
      });




   },[])  // 1회만 실행 => 의존성 배열


    return (
        <section id="section2">
            <div className="container">
                <a href="!#">
                    <div className="content">                    
                        <div className="col1">
                            <img src={`./images/${banner.배너.이미지}`} alt="banner" />
                        </div>
                        <div className="col2">
                            <h2>{banner.배너.타이틀}</h2>
                            <p>{banner.배너['배너 내용']}</p>
                        </div>
                    </div>

                    <span className="arrow-btn btn1"></span>
                    <span className="arrow-btn btn2"></span>
                    
                </a>
            </div>
        </section>
    );
}