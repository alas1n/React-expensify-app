import uuid from 'uuid'
import database from '../firebase/firebase'

// add expenses
export const addExpenses = (expense) => ({
	type: 'ADD_EXPENSES',
	expense
})


export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		// here we set de defualts for function arguments (this is the new way)
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData
		const expense = { description, note, amount, createdAt }

		return database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpenses({
				id: ref.key,
				...expense
			}))
		})
	}
}

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