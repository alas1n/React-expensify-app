import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesListFilters } from '../../Components/ExpenseListFilter'
import { altFilter, filter } from '../fixtures/filters'
import moment from 'moment'

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper


beforeEach(() => {
	setStartDate = jest.fn()
	setEndDate = jest.fn()
	setTextFilter = jest.fn()
	sortByDate = jest.fn()
	sortByAmount = jest.fn()
	wrapper = shallow(
		<ExpensesListFilters
			filters={filter}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
		/>)
})


test('should render expenseListFilter correctly', () => {
	expect(wrapper).toMatchSnapshot()
})

test('should render expense list filter with alt fileter data', () => {
	wrapper.setProps({
		filters: altFilter
	})
	expect(wrapper).toMatchSnapshot()
})


test('should handle text change', () => {
	const value = 'rent'
	wrapper.find('input').simulate('change', {
		target: { value }
	})
	expect(setTextFilter).toHaveBeenLastCalledWith(value)
})


test('should sort by date', () => {
	const value = 'date'
	wrapper.find('select').simulate('change', {
		target: { value }
	})
	expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
	const value = 'amount'
	wrapper.find('select').simulate('change', {
		target: { value }
	})
	expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => {
	const startDate = moment(0).add(4,'years')
	const endDate = moment(0).add(8,'years')
	wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
	expect(setStartDate).toHaveBeenLastCalledWith(startDate)
	expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
	const calendarFocused = 'endDate'
	wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})




