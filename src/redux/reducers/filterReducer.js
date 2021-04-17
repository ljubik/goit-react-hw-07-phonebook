const init = "";


const filterReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_FILTER":
      return payload;
    
    case "CLEAR_FILTER":
      return "";
      
    default:
      return state;
  }
};

export default filterReducer;
