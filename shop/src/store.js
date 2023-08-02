import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ // state생성과 비슷함
    name : 'user',
    initialState : 'kim'
})

let stock  = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ] 
})

export default configureStore({
  reducer: {
    user : user.reducer, // state 생성 후 등록
    stock : stock.reducer,
    cart : cart.reducer,
  }
}) 