import React from 'react';

const MainTitle = (props) => {
  return (
    <div className="mb-9">
      <h1 className="font-weight-bold">{props.title}</h1>
      <p className="lead font-weight-normal">{props.description}</p>
    </div>
  );
};

export default MainTitle;
