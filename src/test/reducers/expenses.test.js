import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'
import moment from 'moment'

test('should load defult state for expenses action', () => {
    const state = expensesReducer(expenses, { type: '@@INIT' })
    expect(state).toEqual(expenses)
})


test('should add new expense to expenses', () => {
    const expense = {
        id: '4',
        description: 'added item',
        note: '',
        amount: 900,
        createdAt: moment(0)
    }
    const action = {
        type: 'ADD_EXPENSES',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should remove expnese by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '3'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1]])
})

test('should not remove item with undefiend id', () => {
    const aciton = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, aciton)
    expect(state).toEqual(expenses)
})


test('should edit an expense', () => {
    const updates = {
        amount: 4500
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].amount).toBe(action.updates.amount)
})


test('should not edit an expense with no id', () => {
    const updates = {
        amount: 4500
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses])
})