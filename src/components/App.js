import React from 'react';

import Cat from './Cat';
import Header from './Header';
import ColorPicker from './ColorPicker';
import Footer from './Footer';
import Button from './Button';
import State from './State';

export default function App() {
  return (
    <>
      <Header name="Rad Guy" />
      <State />
      <h1>Hello World</h1>
      <Cat name="Morris" age="unknown but maybe 16" weight="26lbs" />
      <ColorPicker />
      <Cat name="Butter" age="9" weight="14lbs" />
      <Button buttonProp="good for you" />
      <Cat name="Paddington" age="4 or 5" weight="16lbs" />
      <Footer footerMsg="Stoopy" />

    </>
  );
}
  
