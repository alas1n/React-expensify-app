import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ExpenseDashboardPage from '../Components/ExpenseDashboardPage'
import AddExpensePage from '../Components/AddExpensePage'
import EditExpensePage from '../Components/EditExpensePage'
import HelpExpensePage from '../Components/HelpExpensePage'
import Page from '../Components/Page'
import Header from '../Components/Header'



const ApprRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={Page} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default ApprRouter