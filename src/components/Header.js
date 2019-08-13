import React from 'react';

export default function header({ name }) {
  const headerMsg = 'Dont Come to the Party Today, ';

  return (
    <h1>{headerMsg} {name}</h1>
  );
}
