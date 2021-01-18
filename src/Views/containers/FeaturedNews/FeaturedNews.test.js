import React from 'react';
import { shallow } from 'enzyme';
import FeaturedNews from './FeaturedNews';

describe('<FeaturedNews />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FeaturedNews />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
