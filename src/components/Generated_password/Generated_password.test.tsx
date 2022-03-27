import React from 'react';
// @ts-ignore
import { shallow } from 'enzyme';
import Generated_password from './Generated_password';

describe('<Generated_password />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Generated_password />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
