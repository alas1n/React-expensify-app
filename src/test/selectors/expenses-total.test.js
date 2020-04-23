import expenses from '../fixtures/expenses'
import getExpensesTotal from '../../selectors/expenses-total'


test('should return sum of all expenses', () => {
	const result = getExpensesTotal(expenses)
	expect(result).toBe(114195)
})

test('should retern 0 if no expnses', () => {
	const result = getExpensesTotal([])
	expect(result).toBe(0)
})


test('should return one expense value', () => {
	const result = getExpensesTotal([expenses[0]])
	expect(result).toBe(195)
})
