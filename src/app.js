import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
// import getVisibleExpenses from './selectors/expenses'
// import {addExpenses} from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
// import moment from 'moment'



const store = configureStore()

console.log('test')
// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visibleExpenses)
// })


// store.dispatch(addExpenses({ description: 'Rent', createdAt: moment().subtract('1','day'), amount: 200, note: 'shiiiit not again' }))
// store.dispatch(addExpenses({ description: 'water bill', createdAt: moment().subtract('3','day'), amount: 3400, note: 'Must be share' }))
// store.dispatch(addExpenses({ description: 'Gas bill', createdAt: moment().subtract('2','day'), amount: 5100, note: 'should be more' }))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app-root'))
