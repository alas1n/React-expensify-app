import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../Components/EditExpensePage'
import expenses from '../fixtures/expenses'



let wrapper, editExpenses, removeExpenses, history, expense

beforeEach(() => {
	history = { push: jest.fn() }
	editExpenses = jest.fn()
	removeExpenses = jest.fn()
	wrapper = shallow(
		<EditExpensePage
			editExpenses={editExpenses}
			removeExpenses={removeExpenses}
			history={history}
			expense = {expenses[2]}
		/>)

})

test('should render EditExpense correctly', () => {
	expect(wrapper).toMatchSnapshot()
})


test('should handle editExpense', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
	expect(editExpenses).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
	expect(history.push).toHaveBeenLastCalledWith('/')
})


test('should handle removeExpense', () => {
	wrapper.find('button').simulate('click')
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(removeExpenses).toHaveBeenLastCalledWith({
		id: expenses[2].id
	})
})

