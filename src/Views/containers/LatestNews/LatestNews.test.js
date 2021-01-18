import React from 'react';
import { shallow } from 'enzyme';
import LatestNews from './LatestNews';

describe('<LatestNews />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LatestNews />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
