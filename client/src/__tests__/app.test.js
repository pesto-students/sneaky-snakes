import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('should render the Browser Router', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('BrowserRouter').length).toBe(1);
  });
  describe('rendered browser router component', () => {
    it('should render header component', () => {
      const wrapper = shallow(<App />);
      const headerWrapper = wrapper.find('BrowserRouter').find('Header');
      expect(headerWrapper.length).toBe(1);
    });
  });
  describe('rendered header cpomponent', () => {
    it('should render switch component', () => {
      const wrapper = shallow(<App />);
      const switchWrapper = wrapper.find('Header').find('Switch');
      expect(switchWrapper.length).toBe(1);
    });
  });
  describe('rendered switch cpomponent', () => {
    it('should render two route component', () => {
      const wrapper = shallow(<App />);
      const routeWrapper = wrapper.find('Switch').find('Route');
      expect(routeWrapper.length).toBe(2);
    });
  });
});
