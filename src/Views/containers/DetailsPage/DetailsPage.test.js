import React from 'react';
import { shallow } from 'enzyme';
import DetailsPage from './DetailsPage';

describe('<DetailsPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<DetailsPage />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
