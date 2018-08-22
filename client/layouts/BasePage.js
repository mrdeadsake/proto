import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBody from '../components/MainBody';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import { fetchTopics } from '../actions/topicActions';

class BasePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    }
  }

  static propTypes = {
    user: PropTypes.object,
  }

  componentDidMount() {
    document.title = "Home"
    this.props.fetchUser(123);
    this.props.fetchTopics();
    this.setState({user: this.props.user})
  }

  render(){
    return(
      <div >
        <Header topics={this.props.topics}></Header>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
      )
  }
}

const mapStateToProps = state => ({
    user: state.users.item,
    topics: state.topics.items.topics,
});

export default connect(mapStateToProps, { fetchUser, fetchTopics })(BasePage);