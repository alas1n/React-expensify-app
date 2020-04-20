import moment from 'moment'
import filtersReducer from '../../reducers/filters'


test('should set defult state', () => {
    const defultState = {
        text: '',
        sortBy: 'date', // date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual(defultState)
})


test('should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})


test('should set sort by date', () => {
    const defultState = {
        text: '',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(defultState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date')
})


test('should text filter ', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'a'
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('a')
})


test('should set start date filter ', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.startDate).toBe(moment(0).valueOf())
})


test('should set end date filter ', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0).valueOf()
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toBe(moment(0).valueOf())
})