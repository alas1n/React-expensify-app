export default (expenses) => {
	if (expenses.length > 1) {
		const allExpenseAmounts = expenses.map(expense => expense.amount)
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return allExpenseAmounts.reduce(reducer)
	} else if (expenses.length === 1) {
		return expenses[0].amount
	} 
	return 0
}


// course solotion

const getExpensesTotal = (expenses) => {
	return expenses
	.map(expense => expense.amount)
	.reduce((sum, value) => sum + value, 0)
}

