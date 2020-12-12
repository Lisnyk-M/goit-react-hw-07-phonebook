import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.filter;
const getItems = state => state.items;

// const getVisibleContacts = state => {
//     const visibleTasks = getItems(state).filter(contact => contact.name.toLowerCase()
//         .includes(getFilter(state).toLowerCase()));

//     return visibleTasks;
// }

const getVisibleContacts = createSelector([getItems, getFilter], (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase()
        .includes(filter.toLowerCase()));
})

// const getItemId = (state, itemId) => {
//     const item = getItems(state).find(item => item.id === itemId);
//     // return { ...item }
//     return item
// }

const getItemId = createSelector([(state, itemId) => itemId, getItems],
    (itemId, items) => items.find(item => item.id === itemId) 
)

export default {
    getFilter,
    getItems,
    getVisibleContacts,
    getItemId
}

