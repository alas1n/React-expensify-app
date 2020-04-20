import { createStore, bindActionCreators } from 'redux'


const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}
const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}
const resetCount = () => {
    return {
        type: 'RESET',
    }
}
const setCount = ({setBy = 0} ={}) => {
    return {
        type: 'SET',
        setBy
    }
}



const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.setBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state
    }
})

// console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 500}))


store.dispatch(decrementCount({decrementBy: 154}))


store.dispatch(resetCount())


store.dispatch(setCount({setBy: 200}))



