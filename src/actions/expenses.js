import uuid from 'uuid'


// add expenses
export const addExpenses = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSES',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE EXPENSES
export const removeExpenses = (({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
})

// EDIT EXPENSES
export const editExpenses = ((id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
})