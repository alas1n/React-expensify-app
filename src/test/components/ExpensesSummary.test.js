import React from 'react'
import {ExpensesSummary} from '../../Components/ExpensesSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('should render Expense Summary with one expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={100} />)
	expect(wrapper).toMatchSnapshot()
})


test('should render Expense Summary more than one expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={2} expenseTotal={0} />)
	expect(wrapper).toMatchSnapshot()
})

