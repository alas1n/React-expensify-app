import { setStartDate, setEndDate, setTextFilter, sortByAmount } from "../../actions/filters"
import moment from 'moment'

test('should generate set start date action object', () => {
	const action = setStartDate(moment(0))
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	})
})


test('should generate set end date action boject', () => {
	const action = setEndDate(moment(0))
	expect(action).toEqual({
		type:'SET_END_DATE',
		endDate: moment(0)
	})
})


test('should set text filter action object with input', () => {
	const action = setTextFilter('text')
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text:'text'
	})
})


test('should set text filter action object defult velue', () => {
	const action = setTextFilter()
	expect(action).toEqual({
		type:'SET_TEXT_FILTER',
		text:''
	})
})


test('should set sort by amount object', () => {
	const action = sortByAmount()
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	})
})


test('should set sort by amount object', () => {
	const action = setStartDate()
	expect(action).toEqual({
		type: 'SET_START_DATE'
	})
})
