import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'
// import cart from './store/cart'

let stock  = createSlice({
    name : 'stock',
    initialState : [10, 11, 12],
})

let cart = createSlice({
  name : 'cart',
  initialState : [
      {id : 10, name : 'White and Black', count : 2},
      {id : 11, name : 'Grey Yordan', count : 1},
  ],
  reducers : {
    increaseStock(state, action){
      // state[action.payload].count++;
      let id = action.payload;
      let product = state.filter( state => state.id === id)[0]; // filter후 0 인덱스에 조건에 부합한 object가 존재함
      product.count++;
    },
    addProduct(state, action){
      state.push(action.payload);
    },
  }
})

export let { increaseStock, addProduct } = cart.actions;

export default configureStore({
  reducer: {
    user : user.reducer, // state 생성 후 등록
    stock : stock.reducer,
    cart : cart.reducer,
  }
}) 