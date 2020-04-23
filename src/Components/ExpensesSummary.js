// import React from 'react'
// import { connect } from 'react-redux'
// import SelectExpenses from '../selectors/expenses'
// import getExpensesTotal from '../selectors/expenses-total'

// export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
// 	return (
// 		<div>
// 		{console.log(expenseCount)}
// 			<h1>you have {expenseCount} expenses</h1>
// 			<h1>you have {expenseTotal} spent</h1>
// 		</div>
// 	) 
// }



// const mapStateToProps = (state) => {
// 	const visibleExpenses = SelectExpenses(state.expenses, state.filters)
// 	return {
// 		expenseCount: visibleExpenses.length,
// 		expenseTotal: getExpensesTotal(visibleExpenses)
// 	}
// }


// export default connect(mapStateToProps)(ExpensesSummary)

import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
		{console.log(expensesTotal)}
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
	console.log('state')
	console.log(state)
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);