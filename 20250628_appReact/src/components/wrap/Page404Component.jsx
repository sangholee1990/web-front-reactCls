import React from "react";

/**
 * 페이지를 찾을 수 없을 때 표시하는 404 에러 페이지 컴포넌트입니다.
 */
export default function Page404Component() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      marginTop: '100px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '6em',
        margin: '0',
        color: '#333'
      }}>404</h1>
      <h2 style={{
        fontSize: '2em',
        marginTop: '10px',
        color: '#555'
      }}>페이지를 찾을 수 없습니다.</h2>
      <p style={{
        fontSize: '1.2em',
        color: '#777',
        lineHeight: '1.6'
      }}>
        요청하신 페이지가 존재하지 않거나, 주소가 변경되어 사용할 수 없습니다.
      </p>
      <p style={{
        fontSize: '1em',
        color: '#777'
      }}>
        입력하신 주소가 정확한지 다시 한번 확인해 주시거나, <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>홈으로 이동</a>하여 원하시는 정보를 찾아보세요.
      </p>
    </div>
  );
}