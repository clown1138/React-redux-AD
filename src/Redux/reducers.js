// reducers.js

const initialState = {
    counter: 0,
    able:false
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CLICK':
        return { ...state, counter: state.counter + 1 };
      case 'CLEAR':
        return { ...state, counter: 0};
      case 'DISABLE':
        return { ...state, able: !state.able };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  