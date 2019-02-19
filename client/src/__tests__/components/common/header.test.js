import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/common/Header';

describe('<App />', () => {
  it('should render a menu', () => {
    const wrapper = shallow(<Header><span /></Header>);
    expect(wrapper.find('Menu').length).toBe(1);
  });
  it('should render a div', () => {
    const wrapper = shallow(<Header><span /></Header>);
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should render passed children', () => {
    const wrapper = shallow(<Header><span /></Header>);
    expect(wrapper.find('span').length).toBe(1);
  });
});
