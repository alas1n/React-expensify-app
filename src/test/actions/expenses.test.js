import { startAddExpense, removeExpenses, editExpenses, addExpenses } from "../../actions/expenses"
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'


const createMockStore = configureMockStore([thunk])



test('should give back an object id', () => {
	const action = removeExpenses({ id: '123abc' })
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	})
})

test('should give back edited object', () => {
	const action = editExpenses('id', { note: 'note', description: 'newDescription' })
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'id',
		updates: {
			note: 'note',
			description: 'newDescription'
		}
	})
})

test('should setup add expense action object with provided values', () => {
	const action = addExpenses(expenses[2])
	expect(action).toEqual({
		type: 'ADD_EXPENSES',
		expense: expenses[2]
	})
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});