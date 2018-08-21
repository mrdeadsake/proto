import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import DropdownItem from './DropdownItem';


export default class Dropdown extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    onHover: PropTypes.func,
    preventDefaultOnClick: PropTypes.bool,
    defaultText: PropTypes.string,
    textKey: PropTypes.string,
    value: PropTypes.any,
    valueKey: PropTypes.string
  };

  static defaultProps = {
    textKey: 'text',
    items: [],
    preventDefaultOnClick: true,
    className: '',
  };

  constructor (props) {
    super(props);
    this.state = {
      showItems: false,
      highlightedIndex: -1,
      highlighted: false,
    };
  }

  componentWillUnmount () {
    window.clearTimeout(this.mouseLeaveTimeout);
  }

  onBlur = () => {
    console.log('blur')
    this.setState({
      showItems: false,
      highlightedIndex: -1,
    });
  }

  onClick = (evt) => {
    if (this.props.preventDefaultOnClick) {
      evt.preventDefault();
    }

      this.setState({
        showItems: !this.state.showItems,
        highlightedIndex: -1,
      });
  }

  onKeyDown = (evt) => {
    let highlightedIndex = this.state.highlightedIndex;

    if (this.state.showItems) {
      switch(evt.keyCode){
        case 40:
          evt.preventDefault();
          highlightedIndex = highlightedIndex + 1;
          if (highlightedIndex >= this.props.items.length) {
            highlightedIndex = 0;
          }
          this.setState({
            highlightedIndex,
          });
        case 38:
          evt.preventDefault();
          highlightedIndex = highlightedIndex - 1;
          if (highlightedIndex < -1) {
            highlightedIndex = this.props.items.length - 1;
          }
          this.setState({
            highlightedIndex,
          });
        case 27:
          this.setState({
            showItems: false,
          });
        case 8:
          evt.preventDefault();
        case 13:
          if (this.state.highlightedIndex > -1) {
            this.setValue(this.props.items[this.state.highlightedIndex]);
          }
      }
    } else if (40 || 38) {
      evt.preventDefault();
      this.setState({
        showItems: true,
        highlightedIndex: 0,
      });
    }
  }

  onMouseLeave = () => {
    if (this.state.showItems) {
      this.mouseLeaveTimeout = window.setTimeout(() => {
        console.log(this.node)
        if (this.node) {
          this.onBlur();
        }
      }, 50);
    }
  }

  onMouseMove = () => {
    if (this.state.showItems && this.mouseLeaveTimeout) {
      window.clearTimeout(this.mouseLeaveTimeout);
      delete this.mouseLeaveTimeout;
    }
  }

  onItemSelect = (value) => {
    this.setValue(value);
  }

  render () {
    let value = this.props.value;
    if (value === undefined) {
      value = {};
    }
    if (this.props.valueKey) {
      value = _.find(this.props.items, {
        [this.props.valueKey]: value,
      }) || {};
    }
    const className = `dropdown ${this.state.showItems ? "highlighted" : ""}`
    return (
      <div
        id={ this.props.id }
        className={ className }
        onBlur={ this.onBlur }
        onFocus={ this.onFocus }
        onClick={ this.onClick }
        onMouseMove={ this.onMouseMove }
        onMouseLeave={ this.onMouseLeave }
        onKeyDown={ this.onKeyDown }
        onMouseEnter={this.onClick}
        ref={ n => this.node = n }
      >
        <div className={`dropdown__container ${this.state.showItems ? "highlighted" : ""}`}>
          { this.renderSelectedText(value) }
          <div className="dropdown__arrow" />
        </div>

          { this.renderItems() }
      </div>
    );
  }

  renderSelectedText (value) {
    if (value && value[this.props.textKey]) {
      return (
        <div className="dropdown__selected-text">
          { value[this.props.textKey] }
        </div>
      );
    }
    return (
      <div className="dropdown__selected-text dropdown__selected-text--default">
        { this.props.defaultText }
      </div>
    );
  }

  renderItems () {
    if (this.state.showItems) {
      const className = ['dropdown__items'];
      if (this.props.alignRight) {
        className.push('dropdown__items--right');
      }
      const renderItem = this.props.renderDropdownItem || this.renderDropdownItem;

      return (
        <div className={ className.join(' ') }>
          { this.props.items.map((item, i) => renderItem(item, i === this.state.highlightedIndex, this.onItemSelect.bind(this, item))) }
        </div>
      );
    }
    return undefined;
  }

  renderDropdownItem = (item, isHighlightedByKeyboard, onSelect) => {
    return (
      <DropdownItem
        highlighted={ isHighlightedByKeyboard }
        value={ item }
        text={ item[this.props.textKey] }
        key={ item[this.props.valueKey] }
        onSelect={ onSelect }
      />
    );
  }

  setValue (value) {
    this.setState({
      showItems: false,
    }, () => {
      if (this.props.valueKey) {
        this.props.onChange(value[this.props.valueKey]);
      } else {
        this.props.onChange(value);
      }
    });
  }
}