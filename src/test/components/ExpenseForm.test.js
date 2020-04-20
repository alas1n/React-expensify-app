import React from 'react'
import { shallow } from 'enzyme'
import ExpneseForm from '../../Components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render test form wiht no input data', () => {
	const wrapper = shallow(<ExpneseForm />)
	expect(wrapper).toMatchSnapshot()
})


test('should render test form input data', () => {
	const wrapper = shallow(<ExpneseForm expense={expenses[0]} />)
	expect(wrapper).toMatchSnapshot()
})

test('should render form with error in amount and description', () => {
	const wrapper = shallow(<ExpneseForm />)
	expect(wrapper).toMatchSnapshot()
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	})
	expect(wrapper.state('error').length).toBeGreaterThan(0)
	expect(wrapper).toMatchSnapshot()
})

test('should render form when description change with input data', () => {
	const value = 'New Description'
	const wrapper = shallow(<ExpneseForm />)
	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	})
	expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
	const value = 'new note'
	const wrapper = shallow(<ExpneseForm />)
	wrapper.find('textarea').simulate('change', {
		target: { value }
	})
	expect(wrapper.state('note')).toBe(value)
})


test('should set amount if input data is valid', () => {
	const value = '12.23'
	const wrapper = shallow(<ExpneseForm />)
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	})
	expect(wrapper.state('amount')).toBe(value)
})


test('should get error if input data is not valid', () => {
	const value = '12.232'
	const wrapper = shallow(<ExpneseForm />)
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	})
	expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
	const onSubmitSpy = jest.fn()
	const wrapper = shallow(<ExpneseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	})
	expect(wrapper.state('error')).toBe('')
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createAt: expenses[0].createdAt
	})
})

test('should set new date on date change', () => {
	const thistime = moment(0)
	const wrapper = shallow(<ExpneseForm />)
	wrapper.find('SingleDatePicker').prop('onDateChange').thistime
	expect(wrapper.state('createdAt')).toEqual(thistime)
})

test('should set calendar focused', () => {
	const focused = true
	const wrapper = shallow(<ExpneseForm />)
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
	expect(wrapper.state('calendarFocused')).toEqual(focused)
})

