import React from 'react';
import './scss/SubComponent.scss';
import './scss/Sub1Component.scss';
import axios from 'axios';

export default function Sub1Component(props) {

    const [state, setState] = React.useState({
        할일목록: [],
        idx: '',
        만료일: '',
        할일: '',
    });

    const [chk, setChk] = React.useState(false);
    const [update, setUpdate] = React.useState(false);

    React.useEffect(()=>{
        axios({
            url:'./data/todo_list.json',
            method: 'GET'
        })
        .then((res)=>{
            // console.log('axios api 성공')
            // console.log( res.data );

            // 새로고침 또는 로딩 시 JSON 데이터 가져오기
            // state.할일목록 = res.data.todoList;
            if (localStorage.getItem('TODO_LIST') != null && JSON.parse(localStorage.getItem('TODO_LIST')).length > 0) {
                setState({
                    ...state,
                    할일목록: JSON.parse(localStorage.getItem('TODO_LIST'))
                });

            } else {
                setState({
                    ...state,
                    할일목록: res.data.todoList
                })
            }

            // setState({
            //     ...state,
            //     할일목록: res.data.todoList
            // })
        })
        .catch((err)=>{
            console.log(err)
            console.log('axios api 실패')
        });
    }, []);

    // 의존성 배열 사용
    // React.useEffect(() => {
    //     try {
    //         localStorage.setItem('TODO_LIST', JSON.stringify(state.할일목록));
    //     } catch (err) {
    //         return;
    //     }
    // }, [state.할일목록])

    // 체크이벤트 => 완료 여부
    const onChangeTodoComplete=(e, idx)=>{
        // console.log(  idx, e.target.checked,  e.target.value);
        // map => 즉시 수정
        // filter => 즉시 삭제

        let imsi = state.할일목록;

        if(e.target.checked){
            setChk(true)
            imsi.map((row)=> row.idx===idx ? {...row.완료=true} : row)
        }
        else {
            setChk(false)
            imsi.map((row)=> row.idx===idx ? {...row.완료=false} : row)
        }

        setState({
            ...state,
            할일목록: imsi
        })

        localStorage.setItem('TODO_LIST', JSON.stringify(imsi));
    }

    // 삭제 버튼 클릭 이벤트
    const onClickTodoDelete=(e, idx)=>{
        // filter()
        let imsi = state.할일목록;
        console.log( imsi )

        // 삭제할 idx 만 제외하고 재배열 반환
        const result = imsi.filter((item)=>item.idx!==idx);  

        console.log( result )
        setState({
            ...state,
            할일목록: result
        })
        localStorage.setItem('TODO_LIST', JSON.stringify(result));
    }

    // 날짜 입력 상자 이벤트
    const onChangeTodoDate = (e) => {
        console.log(e.target.value);

        setState({
            ...state,
            만료일: e.target.value
        });
    }

    const onChangeTodoInput = (e) => {
        console.log(e.target.value);

        setState({
            ...state,
            할일: e.target.value
        });
    }
    
    // 저장 버튼
    const onClickTodoSave = (e) => {
        e.preventDefault();

        let 할일목록 = state.할일목록;

        if (!state.만료일) {
            alert('만료일을 선택해주세요.');
            return;
        }

        if (!state.할일 || state.할일.trim() === '') {
            alert('할 일을 입력해주세요.');
            return;
        }

        const isDuplicate = state.할일목록.some(item =>
            item.할일.trim() === state.할일.trim() && item.만료일 === state.만료일
        );

        if (isDuplicate) {
            alert('동일한 내용과 만료일의 할 일이 이미 존재합니다.');
            return;
        }

        // 수정 상태이면
        if (update) {
            할일목록.map((item) => item.idx === state.idx ? {...item.할일=state.할일, ...item.만료일=state.만료일, ...item.완료=state.완료} : item);
        } else {
            // 자동 증가 번호
            let maxNum = 0;
            state.할일목록.map((item) => {
                if (maxNum < item.idx) {
                    maxNum = item.idx
                }
            });

            할일목록 = [
                {
                    idx: maxNum + 1,
                    할일: state.할일,
                    만료일: state.만료일,
                    완료: false
                }, 
                ...할일목록,
            ]
        }

        localStorage.setItem('TODO_LIST', JSON.stringify(할일목록));
        
        setState({
            ...state,
            할일목록: 할일목록,
            idx: '',
            할일: '',
            만료일: '',
            완료: false,
        });

        // 업데이트 초기화
        setUpdate(false);
    }

    // 수정 버튼
    const onClickTodoUpdate = (e, item) => {
        e.preventDefault();

        setUpdate(true);

        setState({
            ...state,
            idx: item.idx,
            할일: item.할일,
            만료일: item.만료일,
            완료: item.완료,
        });
    }

    return (
        <main id='sub1' className='sub'>
            <section id="sectionTodoList">
                <div className="container">
                    <div className="title">
                        <h2>TODO LIST</h2>
                    </div>
                    <div className="input-box">
                        <form>
                            <input type="datetime-local" name="todoDate" id="todoDate" onChange={onChangeTodoDate} value={state.만료일} />
                            <div>
                                <input type="text" name='todoInput' id='todoInput' onChange={onChangeTodoInput} value={state.할일} />
                                <button id='todoSave' onClick={onClickTodoSave}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="list-box">
                        <ul>
                        {
                            state.할일목록.map((item)=>{
                                return (
                                    <li key={item.idx}>
                                        <div>
                                            <input 
                                                type="checkbox" 
                                                name="todoComplete" 
                                                id="todoComplete" 
                                                
                                                onChange={(e)=>onChangeTodoComplete(e, item.idx)}
                                                value={item.할일}
                                                checked={state.chk}
                                            />
                                            <p><strong className={item.완료?'on':''}>{item.할일}</strong> <em>{item.만료일}</em></p> 
                                            <span>  
                                                <button className='todoUpdate' onClick={(e)=>onClickTodoUpdate(e, item)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                                                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                                                    </svg>
                                                </button> 
                                                <button className='todoDelete' onClick={(e)=>onClickTodoDelete(e, item.idx)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                    </svg>
                                                </button>
                                            </span>
                                        </div>
                                    </li>
                                )
                            })
                            
                        }
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}