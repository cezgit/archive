import React from 'react';
import Badge from '../../common/Badge';

export default function Feature(props) {

  let featureClass = props.item.type === "common" ? "success-element" : "danger-element";

  let featureValues = [];
  if(props.item.value){
    props.item.value.split(",").forEach((ct)=> {
      let item = {};
      item.name = ct.trim();
      featureValues.push(<Badge item={item} classType="badge" key={item.name} />);
    });
  }

  return (
    <li className={featureClass}>
        <div className="item-name" data-tip={props.item.tooltip}>{props.item.name}</div>
        <div className="item-detail text-muted">{featureValues}</div>
        <div className="item-detail text-muted" dangerouslySetInnerHTML={{ __html:props.item.description }}></div>
    </li>
  );
}
