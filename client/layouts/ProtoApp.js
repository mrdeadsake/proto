import React from 'react';
import PropTypes from 'prop-types';
import Topics from '../helpers/topicHelper';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import routes from '../routes';
import { fetchTopics } from '../actions/topicActions';
import { connect } from 'react-redux';


class ProtoApp extends React.Component {

  static propTypes = {
    history: PropTypes.object,
  };

  static defaultProps = {
    topics: [],
  }

  constructor(props, ...rest) {
    super(props,...rest);
    const path = window.location.pathname.replace(window.env.basename, '').substr(1);
  }

  componentDidMount() {
    this.props.fetchTopics();
    this.renderTopics();
  }

  componentWillReceiveProps() {
    console.log(this.renderTopics())
  }

  render () {
    return (
      <Router history={ this.props.history }>
        {routes(this.renderTopics())}
      </Router>
    );
  }
  
  renderTopics = () => {
    let arr=[];
    this.props.topics.map((topic)=>{
      arr.push(topic['topic']['name']);
      if (topic['subtopics'].length !== 0) {
        topic['subtopics'].map((subtopic)=>{
          arr.push(subtopic['name']);
        })
      }
    })
  return(arr)
}
}



const mapStateToProps = state => ({
    topics: state.topics.items.topics,
});

export default connect(mapStateToProps, { fetchTopics })(ProtoApp);