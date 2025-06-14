import './scss/ModalComonent.scss'

export default function ModalComonent({모달, modalCloseEvent}) {
    
    const modalCloseBtn=()=>{
        // 모달 닫기
        modalCloseEvent()
    }
    
    // 프롭스: 부모 > 자식
    return (
        // <div id="modal">
        //     <h1>ModalComonent</h1>
        // </div>
        <div className={`layer-popup ${모달.isOn ? ' on' : ''}`}>
            <div className="container">
                <div className="title">
                    <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                </div>
                <div className="content">
                    <ul>
                        {/* <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ab quibusdam fugit rem in. Officia, aut iusto! Animi harum, qui, esse recusandae voluptas aliquid dolores corporis voluptates maiores et mollitia?</li> */}
                        <li>{모달.공지글}</li>
                    </ul>
                </div>
                <div className="button-box">
                    <button className="close-btn" onClick={modalCloseBtn}>닫기</button>
                </div>
            </div>
        </div>
    )
}