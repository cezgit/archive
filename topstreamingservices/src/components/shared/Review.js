import React, {Component} from 'react';

export default function Review(props) {

  let featureClass = props.reviewType === "Pros" ? "success-element" : "danger-element";

  return (
    <li className={featureClass}>
        <div className="item-name" data-tip={props.item.tooltip}>{props.item.name}</div>
        <div className="item-detail text-muted" dangerouslySetInnerHTML={{ __html:props.item.description }}></div>
    </li>
  );
}
