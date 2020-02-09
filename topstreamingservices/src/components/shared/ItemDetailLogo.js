import React from 'react';

function ItemDetailLogo(props) {

  return (
    <div className="m-b-sm text-center detail-logo">
      <img alt="service logo" className="img-circle" src={props.avatarUrl} style={{width: "62px"}} />
    </div>
  );
}

export default ItemDetailLogo;
