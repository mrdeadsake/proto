import PropTypes from 'prop-types';
import React from 'react';

export default class DropdownItem extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    highlighted: PropTypes.bool,
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  onClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    this.props.onSelect(this.props.value);
  }

  render () {
    const className = `dropdown__item ${this.props.highlighted ? "dropdown__item--highlighted" : ""} ${this.props.className}`;

    return (
      <div className={ className } onClick={ this.onClick }>
        { this.props.text }
      </div>
    );
  }
}
