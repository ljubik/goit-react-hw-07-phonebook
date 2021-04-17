import { createSelector } from '@reduxjs/toolkit'

export const getOrders = (store) => { return store.contacts}
export const filterOrder = (store) => store.filterOrder

export const filteredOrders = createSelector(
  [getOrders, filterOrder],
  (allOrders, filter) => {
    filter = filter.toLowerCase()
    return allOrders.filter(({ name }) => name.toLowerCase().includes(filter))
  },
)

// const filteredData = createSelector([getOrders, filter], (orders, filter) => {
//   orders.filter((order) => order.name === filter)
// })

export default {getOrders, filterOrder, filteredOrders}