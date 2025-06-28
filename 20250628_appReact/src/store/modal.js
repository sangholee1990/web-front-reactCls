import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name: '공지사항 모달 리듀스',
    initialState: {
        // 모달 : {
        //     isOn: false,
        //     공지글: '공지글 테스트',
        // }
        isOn: false,
        공지글: '공지글 테스트',
    },
    reducers: {
        // modalOpenEvent(state, action) {
        //     state.모달.isOn = true;
        //     state.모달.공지글 = action.payload.공지글;
        // },
        // modalCloseEvent(state, action) {
        //     state.모달.isOn = false;
        //     state.모달.공지글 = action.payload.공지글;
        // }

        setModalAction(state, action) {
            state.isOn = action.payload.isOn;
            state.공지글 = action.payload.공지글;
        }
    },
});

export default modal.reducer;
// export const {modalOpenEvent, modalCloseEvent} = modal.actions;
export const {setModalAction} = modal.actions;