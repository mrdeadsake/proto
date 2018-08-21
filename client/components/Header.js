import React from 'react';
import topicHelper from '../helpers/topicHelper';
import Dropdown from './Dropdown';

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      class:"state",
    }
  }

  render(){
    const columns=topicHelper.length;
    return(
      <div className="header">
      <div className="row between-on-large">
        <h1 className="column large-6">eQ Answer Network</h1>
        <div className="column large-6 login">
          <button className="">login</button>
        </div>
      </div>
      <div className="row">
      {topicHelper.map((topic, i)=>{
        return(<div key={i} className={`column large-${12/columns} medium-${12/columns} small-${12/columns*2}`}>{this.renderDropdown(topic)}</div>)
      })}
      </div>
      </div>
    )
  }

  renderDropdown(topic) {
    return(
      <Dropdown
        defaultText={topic}
        onChange={this.onHover}
        valueKey="value"
        textKey="text"
        items={[{text:'item1', value:1}, {text:'item2', value:2}, {text:'item3', value:3}]}
      />
      )
  }

  onHover = () => {
    console.log(this)
  //  this.setState({class: "open"});
  }

  onLeave = (ele) => {
    //console.log(ele)
    //this.setState({class: ""})
  }
}
