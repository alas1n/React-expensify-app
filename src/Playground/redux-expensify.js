import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const demoState = {
    expenses: [{
        id: 'asdfasdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// add expenses
const addExpenses = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSES',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

// REMOVE EXPENSES
const removeExpenses = (({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
})

// EDIT EXPENSES
const editExpenses = ((id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
})

// SET FILTER FOR TEXT
const setTextFilter = ((text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
})

// SORT BY AMOUNT
const sortByAmount = (() => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
})

// SORT BY DATE
const sortByDate = (() => {
    return {
        type: 'SORT_BY_DATE'
    }
})

// SET START DATE
const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

// SET END DATE
const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

// DEFULT VALUE FOR EXPANSE ARRY
const expneseReducerDefaultState = [];

// EXPANSE REDUCER
const expensesReducer = (state = expneseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSES':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}


// SET DEFULT VALUE FOR FILTER BOJECT
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
}

// FILTER REDUCER
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}

// CREATING STORE WIHT COMBINE REDUCERS
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    // return expenses
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createAt >= endDate
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expnese1 = store.dispatch(addExpenses({ description: 'Rent', amount: 100, createAt: -111000 }))
const expnese2 = store.dispatch(addExpenses({ description: 'coffee', amount: 200, createAt: -11111000 }))
// const expnese3 = store.dispatch(addExpenses({ description: 'laptop', amount: 400 }))

// store.dispatch(removeExpenses({id: expnese1.expense.id}))

// store.dispatch(editExpenses(expnese2.expense.id ,{ amount: 500}))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter('secend'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByAmount())
store.dispatch(sortByDate())


// store.dispatch(setStartDate(2000))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))



