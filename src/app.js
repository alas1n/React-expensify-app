import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {addExpenses} from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import './styles/styles.scss'



const store = configureStore()

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


store.dispatch(addExpenses({ description: 'Rent', createAt: -284785, amount: 5147, note: 'shiiiit not again' }))
store.dispatch(addExpenses({ description: 'water bill', createAt: 10000, amount: 1000, note: 'Must be share' }))
store.dispatch(addExpenses({ description: 'Gas bill', createAt: 1540, amount: 254, note: 'should be more' }))



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app-root'))
