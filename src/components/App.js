import React from 'react';
import Cat from './Cat';
import Header from './Header';
import ColorPicker from './ColorPicker';

export default function App() {
  return (
    <>
      <Header name="Rad Guy" />
      <h1>Hello World</h1>
      <Cat name="Morris" age="unknown but maybe 16" weight="26lbs" />
      <ColorPicker />
      <Cat name="Butter" age="9" weight="14lbs" />
      <Cat name="Paddington" age="4 or 5" weight="16lbs" />

    </>
  );

}
  
