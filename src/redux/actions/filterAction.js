const filterName = (nameObject) => {
    return {
      type: "SET_FILTER",
      payload: nameObject,
    };
  };
  
  const claearFilter = (nameObject) => {
    return {
      type: "CLEAR_FILTER",
      payload: nameObject,
    };
  };
  
  export default { filterName, claearFilter};
  