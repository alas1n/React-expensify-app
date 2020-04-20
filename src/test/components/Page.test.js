import React from 'react'
import Page from '../../Components/Page'
import {shallow} from 'enzyme'	

test('should render notFoundPage ', () => {
	const wrapper = shallow(<Page />)
	expect(wrapper).toMatchSnapshot()
})
