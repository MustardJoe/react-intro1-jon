import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('it is the test for my wierd button thing', () => {
  it('knows about the click', () => {
    let barry = 0;
    /* eslint-disable-next-line no-console */
    console.log = jest.fn();
    const wrapper = shallow(<Button buttonProp="good for you" />);
    
    wrapper.find('button').at(0).simulate('click');
    /* eslint-disable-next-line no-console */
    expect(console.log).toHaveBeenCalledWith(`you have hit the button, you are the winner, you win ${barry}`);

  });
});
