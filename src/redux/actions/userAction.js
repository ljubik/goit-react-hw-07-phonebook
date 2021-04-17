const addUser = (userObject) => {
  return {
    type: "ADD_USER",
    payload: userObject,
  };
};

const deleteUser = (email) => {
  return {
    type: "DELETE_USER",
    payload: email,
  };
};

const addNumber = (numObject) => {
  return {
    type: "ADD_NUMBER",
    payload: numObject,
  };
};

const deleteNumber = (id) => {
  return {
    type: "DELETE_NUMBER",
    payload: id,
  };
};

const createNumber = (numObject) => {
  return {
    type: "CREATE_NUMBER",
    payload: numObject,
  };
};

const filterName = (nameObject) => {
  return {
    type: "SET_FILTER",
    payload: nameObject,
  };
};

export default { addUser, deleteUser, addNumber, deleteNumber, createNumber, filterName};
