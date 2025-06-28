import React, { useEffect, useState } from 'react';
import './scss/FooterComonent.scss';
import axios from 'axios';

export default function FooterComonent(){    

    // 1. 상태관리 유즈스테이트
    const [state, setState] = useState({
        우편번호:'',
        주소:'',
        대표전화:'',
    });

    // 2. 의존성배열 유즈이펙트
    useEffect(()=>{
       
      axios({
        url: './data/address.json', 
        method: 'GET'
      })
      .then((res)=>{
            setState({
                우편번호: res.data.우편번호,
                주소: res.data.주소,
                대표전화: res.data.대표전화
            })
      })
      .catch((err)=>{
            console.log(err);
      });


    }, [])


    return(
    <footer id="footer">
        <div className="col1">
            <h1><a href="./" title="푸른마을"><span>푸른</span><em>마을</em></a></h1>
        </div>
        <div className="col2">
            <div className="row1">
                <a href="!#">저작권보호방침</a>
                <i>|</i>
                <a href="!#">개인정보처리방침</a>
                <i>|</i>
                <a href="!#">개인정보처리규약</a>
                <i>|</i>
                <a href="!#">이메일주소 무단 수집거부</a>
                <i>|</i>
                <a href="!#">홈페이지 이용안내</a>
                <i>|</i>
                <a href="!#">관련사이트</a>
            </div>
            <div className="row2">
                <div className="contents">
                    <address>{state.우편번호} {state.주소}  | 대표전화: {state.대표전화}</address>
                    <p>Copyright(c) Bank of Korea. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    )
}