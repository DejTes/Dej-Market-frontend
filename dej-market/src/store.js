// import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducer } from './reducers/productReducers'

// const reducer = {
//     productList: productListReducer,
// }

// const initialState = {}

// const middleware = [thunk]

// const store = configureStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store






import { configureStore } from '@reduxjs/toolkit';
import { productListReducer } from './reducers/productReducers';

const reducer = {
  productList: productListReducer,
};

const initialState = {};

const store = configureStore({
  reducer,
  preloadedState: initialState,
});

export default store;
