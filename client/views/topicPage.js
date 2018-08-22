import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBody from '../components/MainBody';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

export default class TopicPage extends React.Component {

  static propTypes = {
    pageName: PropTypes.string,
  }

  constructor() {
    super();
  }

  componentDidMount() {
    document.title = `EQ ${this.props.pageName}`;
  }

  render(){
    return(
      <div >
        <Header root={this.props.root}/>
        {this.props.pageName}
        <Footer/>
      </div>
      )
  }
}


