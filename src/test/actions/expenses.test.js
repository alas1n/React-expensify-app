import { removeExpenses, editExpenses, addExpenses } from "../../actions/expenses"

test('should give back an object id', () => {
	const action = removeExpenses({ id: '123abc' })
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	})
})

test('should give back edited object', () => {
	const action = editExpenses('id', { note: 'note', description: 'newDescription' })
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'id',
		updates: {
			note: 'note',
			description: 'newDescription'
		}
	})
})

test('should give back added expense with manual input', () => {
	const expenseData = {
		description: 'description',
		amount: 1234,
		createdAt: 4321,
		note: 'note'
	}
	const action = addExpenses(expenseData)
	expect(action).toEqual({
		type: 'ADD_EXPENSES',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})

test('should give back expense object with defult value', () => {
	const expenseData = {
		description: '',
		note: '',
		amount: 0,
		createdAt: 0
	}
	const action = addExpenses()
	expect(action).toEqual({
		type: 'ADD_EXPENSES',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	})
})
