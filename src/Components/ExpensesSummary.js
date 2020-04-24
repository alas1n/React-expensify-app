import React from 'react'
import { connect } from 'react-redux'
import SelectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
	const expensePlural = expenseCount > 1 ? 'expenses' : 'expense'
	return (
		<div>
			<h1>You have {expenseCount} {expensePlural} total of : {numeral(expenseTotal / 100).format('$0,0.00')}</h1>
		</div>
	)
}



const mapStateToProps = (state) => {
	const visibleExpenses = SelectExpenses(state.expenses, state.filters)
	return {
		expenseCount: visibleExpenses.length,
		expenseTotal: getExpensesTotal(visibleExpenses)
	}
}


export default connect(mapStateToProps)(ExpensesSummary)
