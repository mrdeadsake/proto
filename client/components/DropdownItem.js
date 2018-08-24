import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';


export default class DropdownItem extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    highlighted: PropTypes.bool,
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    className: PropTypes.string,
    onMouseOver: PropTypes.func,
  };

  static defaultProps = {
    className: 'dropdown__item',
  };

  onClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.onSelect(this.props.value);
  }

  onComponentDidMount = () => {
    console.log(this.props.value)
  }

  onMouseOver = (evt) => {
    evt.target.className += " dropdown__link--highlighted";
  }

  onMouseLeave = (evt) => {
    evt.target.className = "dropdown__link";
  }

  render () {
    const text = this.props.text;
    return (
          <Link className="dropdown__link" to={this.renderLink(text)} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
            { text }
          </Link>
    );
  }

  renderLink(link) {
    let temp = `/topics/${link}`;
    return temp.includes("Home") ? temp.replace('/topics', '').replace(" ", "") : temp.replace(" ", "")
  }
}
