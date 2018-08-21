import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBody from '../components/MainBody';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

class BasePage extends React.Component {

  constructor() {
    super();
    this.state = {
      user: undefined,
    }
  }

  static propTypes = {
    user: PropTypes.object,
  }

  componentDidMount() {
    this.props.fetchUser(123);
    this.setState({user: this.props.user})
  }

  render(){
    return(
      <div >
        <Header user={this.props.user}></Header>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
      )
  }
}

const mapStateToProps = state => ({
  user: state.users.item,
});

export default connect(mapStateToProps, { fetchUser })(BasePage);