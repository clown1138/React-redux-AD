// reducers.js

const initialState = {
    counter: 0,
    able:false,
    closeAD:"none",
    showAD: true
    };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CLICK':
        return { ...state, counter: state.counter + 1 };
      case 'CLEAR':
        return { ...state, counter: 0};
      case 'DISABLE':
        return { ...state, able: !state.able };
      case 'CLOSEAD':
        console.log("CLOSEAD")

        return { ...state, closeAD: "none", showAD:false };
      case 'OPENAD':
        console.log("OPENAD")

        return { ...state, closeAD: "block" };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  