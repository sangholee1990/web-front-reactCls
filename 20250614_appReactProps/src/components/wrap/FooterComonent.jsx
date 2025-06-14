import './scss/FooterComonent.scss'

export default function FooterComonent() {
    return (
        // <div id="footer">
        //     <h1>FooterComonent</h1>
        // </div>
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
                        {/* <address>04531 서울특별시 중구 남대문로 39 (남대문로3가) 대표전화 : 02-759-4114</address> */}
                        <address></address>
                        <p>Copyright(c) Bank of Korea. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}