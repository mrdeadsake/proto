import PropTypes from 'prop-types';
import React from 'react';

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
    className: '',
  };

  onClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.onSelect(this.props.value);
  }

  onMouseOver = (evt) => {
    evt.target.className += " dropdown__item--highlighted";
  }

  onMouseLeave = (evt) => {
    evt.target.className = "dropdown__item";
  }

  render () {
    const className = `dropdown__item ${this.props.highlighted ? "dropdown__item--highlighted" : ""} ${this.props.className}`;

    return (
      <div className={ className } onClick={ this.onClick } onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
        { this.props.text }
      </div>
    );
  }
}
