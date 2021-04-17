import { createAction } from '@reduxjs/toolkit'

const getQueryVAlue = createAction('GET_QUERY_VALUE')
const getFetchCocktails = createAction('GET_FETCH_COCKTEILS')
const changeShowModal = createAction('MODAL')

export default { getQueryVAlue, getFetchCocktails, changeShowModal }
