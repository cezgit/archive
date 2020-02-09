import React from 'react';

function Badge(props) {

  let badgeHtml = props.item.name;
  if(props.item.url) {
    badgeHtml = <a href={props.item.url} target="_blank">{props.item.name}</a>
  }

  return (
    <span className={props.classType} data-tip={props.item.tooltip}>
      {badgeHtml}
    </span>
  );
};

export default Badge;
