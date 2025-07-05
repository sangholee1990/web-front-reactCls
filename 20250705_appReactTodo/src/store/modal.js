import { createSlice } from "@reduxjs/toolkit";

const modal = createSlice({
    name: '공지 모달 리듀서',
    initialState:{
        isOn: false,
        공지글: ''
    },
    reducers:{
        setModalAction(state, action){
            state.isOn = action.payload.isOn;
            state.공지글 = action.payload.공지글;
        }
    } 
});

export default modal.reducer;
export const {setModalAction} = modal.actions;