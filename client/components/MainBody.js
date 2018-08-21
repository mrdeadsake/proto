import React from 'react';
import Dropdown from './Dropdown';
import image from '../images/construction.jpg';

export default class MainBody extends React.Component {
  render() {
    return(
      <div className={"image martop-xlarge"}>
        <img className={"construction"} src={image}/>
      </div>
      )
  }
}
