import React from 'react';
import Cat from './Cat';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header name="DongButt" />
      <h1>Hello World</h1>
      <Cat name="Morris" age="unknown but maybe 16" weight="26lbs" />
      <Cat name="Butter" age="9" weight="14lbs" />
      <Cat name="Paddington" age="4 or 5" weight="16lbs" />
    </>
  );

}
  
