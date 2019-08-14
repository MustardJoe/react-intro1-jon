import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorPicker';

describe('color picker component my new friend', () => {
  it('renders a ColorPicker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handles the red button press', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(0).simulate('click');

    /* eslint-disable no-console */
    expect(console.log).toHaveBeenCalledWith('red');
  });

  it('handles the yellow button press', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(1).simulate('click');

    expect(console.log).toHaveBeenCalledWith('yellow');
  });

  it('handles the blue button press', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();
    const wrapper = shallow(<ColorPicker />);

    wrapper.find('button').at(2).simulate('click');

    expect(console.log).toHaveBeenCalledWith('blue');
  });
});
