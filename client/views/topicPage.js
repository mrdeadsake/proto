import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBody from '../components/MainBody';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/topicActions';
import {fetchUser} from "../actions/userActions";

class TopicPage extends React.Component {

  static propTypes = {
    pageName: PropTypes.string,
  }

  constructor() {
    super();
  }

  componentDidMount() {
    document.title = `EQ ${this.props.pageName}`;
    this.props.fetchTopics();
  }

  render(){
    return(
      <div >
        <Header topics={this.props.topics}/>
        {this.props.pageName}
        <Footer/>
      </div>
      )
  }
}

const mapStateToProps = state => ({
    topics: state.topics.items.topics,
});

export default connect(mapStateToProps, { fetchTopics })(TopicPage);


