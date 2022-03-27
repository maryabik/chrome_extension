import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('<Pagination />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Pagination />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
