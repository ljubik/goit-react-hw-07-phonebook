const userReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_NUMBER":
      console.log(`CREATE_NUMBER`);
      const newStateNumber = action.payload;
      return newStateNumber;  

    default:
      return state;
  }
};

export default userReducer;
