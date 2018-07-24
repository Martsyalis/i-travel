import React from 'react';

import { shallow } from 'enzyme';

import { Home } from '../home/Home';

describe('Home', () => {
  it('shows the Home component', () => {
    const wrapper = shallow(<Home user={{}} exp={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
