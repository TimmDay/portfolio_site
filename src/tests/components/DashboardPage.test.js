import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('ExpenseDashboardPage should render correctly', () => {
    const wrapper = shallow( <DashboardPage /> );
    expect(wrapper).toMatchSnapshot();
});