import React from 'react';

const List = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
