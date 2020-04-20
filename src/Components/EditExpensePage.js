import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpenses, removeExpenses } from '../actions/expenses'



export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpenses(this.props.expense.id, expense)
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.removeExpenses({ id: this.props.expense.id })
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onClick}
                >Remove
                </button>
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    // dont know why he put props
    return{
        editExpenses: (id, expense) => dispatch(editExpenses(id, expense)),
        removeExpenses: (id) => dispatch(removeExpenses(id))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)



 