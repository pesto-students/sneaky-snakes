import React from 'react';
import { shallow } from 'enzyme';
import { Table } from 'semantic-ui-react';
import TableFooter from './TableFooter';
import PaginationMenu from './PaginationMenu';

describe('<TableFooter />', () => {
  const props = {
    pageCount: 5,
    backNavigation: true,
    forwardNavigation: true,
    currentPage: 2,
    setPage: jest.fn(pageNumber => pageNumber),
  };
  const wrapper = shallow(<TableFooter {...props} />);
  it('should render <Table.Row />', () => {
    expect(wrapper.find(Table.Row).length).toBe(1);
  });

  it('should render <Table.HeaderCell />', () => {
    expect(wrapper.find(Table.HeaderCell).length).toBe(1);
  });

  it('should render <PaginationMenu />', () => {
    expect(wrapper.find(PaginationMenu).length).toBe(1);
  });

  it('should pass props to <PaginationMenu />', () => {
    expect(wrapper.find(PaginationMenu).props()).toHaveProperty('pageCount');
  });
});
