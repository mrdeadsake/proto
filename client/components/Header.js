import React from 'react';
import topicHelper from '../helpers/topicHelper';

export default class Header extends React.Component {

  render(){
    const columns=topicHelper.length;
    return(
      <div className="mainpage row">
      {topicHelper.map((topic, i)=>{
        return(<div key={i} className={`C${i+1} column large-${12/columns} medium-${12/columns} small-${12/columns*2}`}>{topic}</div>)
      })}
      </div>
    )
  }
}
