import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({ // state생성과 비슷함
    name : 'user',
    initialState : { name : 'kim', age : 20},
    reducers : {
      // 1. state 수정해주는 함수 만들기
      changeName(state){ // state: 기존 state
        // return { name : 'park', age : 20}
        state.name = 'park'; // 직접 수정 가능
      },
      plusAge(state){
        state.age += 1;
      },
      increase2(state, action){ // action: 호출시 파라미터를 가져옴
        state.age += action.payload
      },
    } 
})

export let { changeName, plusAge, increase2 } = user.actions;
export default user;