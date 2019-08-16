import React from 'react';
import { shallow } from 'enzyme';
import Colors from './Colors';
import { exportAllDeclaration } from '@babel/types';

describe('It is the test for colors component', () => {
  it('creates a list of I think 5 maybe 4 4 or 5 colors', () => {
    const colors = [
      { name: 'red', rgb: { red: 255, green: 0, blue: 0 } },
      { name: 'green', rgb: { red: 0, green: 255, blue: 0 } },
      { name: 'orange', rgb: { red: 255, green: 165, blue: 0 } },
      { name: 'hotpink', rgb: { red: 255, green: 105, blue: 180 } }
    ];

    const wrapper = shallow(<Colors colors={colors} />);
    expect(wrapper).toMatchSnapshot();
  });
});
