import React from 'react';
import topicHelper from '../helpers/topicHelper';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';


export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      class:"state",
    }
  }

  static propTypes = {
    topics: PropTypes.array,
  }

  static defaultProps = {
    topics: [],
  }

  render(){
    const columns=this.props.topics.length;
    return(
      <div className="header">
      <div className="row between-on-large">
        <h1 className="column large-6">eQ Answer Network</h1>
        <div className="column large-6 login">
          <button className="">login</button>
        </div>
      </div>
      <div className="row">
      {this.props.topics.map((topic, i)=>{
        return(<div key={i} className={`column large-${12/columns} medium-${12/columns} small-${12/columns*2}`}>{this.renderDropdown(topic)}</div>)
      })}
      </div>
      </div>
    )
  }

  renderDropdown(topic) {
    return(
      <Dropdown
        root={'/'}
        defaultText={topic['topic']['name']}
        onChange={this.onHover}
        valueKey="id"
        textKey="name"
        items={topic['subtopics']}
      />
      )
  }

  onHover = () => {
  //  this.setState({class: "open"});
  }

  onLeave = (ele) => {
    //console.log(ele)
    //this.setState({class: ""})
  }
}
