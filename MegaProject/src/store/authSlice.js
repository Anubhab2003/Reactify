import {createSlice} from '@reduxjs/toolkit';
const initilState={
    status:false,
    userData:null
}
const authSlice=createSlice({
    name:'auth',
    initialState:initilState,
    reducers:{
        login:(state,actions)=>{
            state.status=true;
            state.userData=actions.payload;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }

    }
});
export default authSlice.reducer;
export const {login,logout}=authSlice.actions;