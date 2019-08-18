import React from 'react';

import Cat from './Cat';
import Header from './Header';
import ColorPicker from './ColorPicker';
import Footer from './Footer';
import Button from './Button';
import State from './State';
import Colors from './Colors';
import TextFormatter from './TextFormatter/TextFormatter';

const colors = [
  { name: 'red', rgb: { red: 255, green: 0, blue: 0 } },
  { name: 'green', rgb: { red: 0, green: 255, blue: 0 } },
  { name: 'orange', rgb: { red: 255, green: 165, blue: 0 } },
  { name: 'hotpink', rgb: { red: 255, green: 105, blue: 180 } }
];

export default function App() {
  return (
    <>
      <Header name="Rad Guy" />
      <State />
      <h1>Hello World</h1>
      <Cat name="Morris" age="unknown but maybe 16" weight="26lbs" />
      <TextFormatter />
      <Colors colors={colors} />
      <ColorPicker />
      <Cat name="Butter" age="9" weight="14lbs" />
      <Button buttonProp="good for you" />
      <Cat name="Paddington" age="4 or 5" weight="16lbs" />
      <Footer footerMsg="Stoopy" />

    </>
  );
}
  
