import React from 'react';

const CheckData = () => {
  const TestData = {
    id: 1,
    title: 'Shahin',
    link: '#',
  };

  return (
    <div className="max-w-7xl mx-auto text-3xl font-bold">
      <p className="text-red-600">{TestData.title}</p>
    </div>
  );
};

export default CheckData;
