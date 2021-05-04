// const isAuth = ({ auth }) => {return !!auth.token};
// const userName = ({ auth }) => {return auth.user.name};
// export default { isAuth, userName }
const isAuth = ({ auth }) => !!auth.token
const userName = ({ auth }) => auth.user.name
export default { isAuth, userName }