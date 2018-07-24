import React from 'react';

import { shallow } from 'enzyme';

import { Search } from '../search/Search';

describe('Search', () => {
  it('shows the Search component', () => {
    const wrapper = shallow(<Search user={{}} search={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
