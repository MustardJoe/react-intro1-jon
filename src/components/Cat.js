import React from 'react';

export default function Cat({ name, age, weight }) {
  // const cat = {
  //   name: 'Morris',
  //   age: 'unk - 16?',
  //   weight: '26 lbs'
  // };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <dt>weight</dt>
      <dd>{weight}</dd>
    </dl>
  );
}

