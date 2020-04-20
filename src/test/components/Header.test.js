import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../Components/Header'


test('should render Header correctly', () => {
	const wrapper = shallow(<Header />)
	expect(wrapper).toMatchSnapshot()
})
