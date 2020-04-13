import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from './loginComponent';

describe('<LoginComponent />', () => {
  test('renders', () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
