import React from 'react';
import topicHelper from '../helpers/topicHelper';

export default class Header extends React.Component {

  render(){
    const columns=topicHelper.length;
    return(
      <div className="row">
      {topicHelper.map((topic, i)=>{
        return(<div key={i} className={`column large-${12/columns} medium-${12/columns} small-${12/columns*2}`}>{this.renderDropdown(topic)}</div>)
      })}
      </div>
    )
  }

  renderDropdown(topic) {
    return(
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle width-full" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {topic}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li className="dropdown-item"><a  href="#">Action</a></li>
          <li className="dropdown-item"><a href="#">Another action</a></li>
          <li className="dropdown-item"><a href="#">Something else here</a></li>
        </ul>
      </div>
      )
  }
}
