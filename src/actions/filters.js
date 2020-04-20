// SET FILTER FOR TEXT
export const setTextFilter = ((text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
})

// SORT BY AMOUNT
export const sortByAmount = (() => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
})

// SORT BY DATE
export const sortByDate = (() => {
    return {
        type: 'SORT_BY_DATE'
    }
})

// SET START DATE
export const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

// SET END DATE
export const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}