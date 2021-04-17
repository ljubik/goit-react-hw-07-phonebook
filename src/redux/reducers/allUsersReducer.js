const init = [];
// const temp = [   {id: "1", name: 'Любомир', tel: '050 187 13 16'},
//   {id: "2", name: 'Rosie Simpson', tel: '459-12-56'},
//   {id: "3", name: 'Hermione Kline', tel: '443-89-12'},
//   {id: "4", name: 'Eden Clements', tel: '645-17-79'},
//   {id: "5", name: 'Annie Copeland', tel: '227-91-26'}]

const allUsersReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_USER":
      const newS = [...state, payload];
      console.log("ADD_USER", newS);
      return newS;

    case "DELETE_USER":
      const newSt = state.filter((elem) => elem.email !== payload);
      console.log(newSt);
      return newSt;

    case "ADD_NUMBER":
      const newAddN = [...state, payload];
      console.log("ADD_NUMBER", newAddN);
      return newAddN;

    case "DELETE_NUMBER":
      const newDelN = state.filter((elem) => elem.id !== payload);
      console.log("DELETE_NUMBER", newDelN);
      return newDelN; 

    // case "FILTER_NAME":
    //   console.log("FILTER_NAME before", state); 
    //   const newFilter = state.filter((elem) => {
    //     return elem.name.toLowerCase().includes(payload);
    //   });
    //   console.log("FILTER_NAME after", state);

    //   // if (newFilter !== state) return newFilter; 
    //   return newFilter;
  
    default:
      return state;
  }
};

export default allUsersReducer;
