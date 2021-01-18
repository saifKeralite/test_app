import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './SearchResult';

describe('<SearchResult />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<SearchResult />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
