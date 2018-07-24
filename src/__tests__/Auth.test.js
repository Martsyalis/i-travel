import React from 'react';

import { shallow } from 'enzyme';

import Auth from '../auth/Auth';

describe('Auth', () => {
  it('shows the Auth component', () => {
    const wrapper = shallow(<Auth />);
    expect(wrapper).toMatchSnapshot();
  });
});
