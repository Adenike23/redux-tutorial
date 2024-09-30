import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth' 

//configureStore creates a store but makes merging multiple reducers into 1 reducer easier


 // these objects will not be added to the initial or existing state, they replace or override it

 //configureStore is a configuration object
 // when you work with multiple slices, you still have ONLY 1 redux store.  is only called once with 1 root reducer
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})


export default store;