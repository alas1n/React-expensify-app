import moment from 'moment'

const filter = {
	text: '',
	sortBy: 'date', // date or amount
	startDate: undefined,
	endDate: undefined
}

const altFilter = {
	text: '',
	sortBy: 'amount', // date or amount
	startDate: moment(0),
	endDate: moment(0).add(4, 'day')
}

export { filter, altFilter }


