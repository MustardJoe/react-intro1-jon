import React from 'react';

export default function Cat() {
  const cat = {
    name: 'Morris',
    age: 'unk - 16?',
    weight: '26 lbs'
  };

  return (
    <dl>
      <dt>Name</dt>
      <dd>{cat.name}</dd>

      <dt>Age</dt>
      <dd>{cat.age}</dd>

      <dt>weight</dt>
      <dd>{cat.weight}</dd>
    </dl>
  );
}

