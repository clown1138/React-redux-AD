import { createStore } from 'redux';
import rootReducer from './reducers'; // 匯入你的 rootReducer

const store = createStore(rootReducer);

export default store;