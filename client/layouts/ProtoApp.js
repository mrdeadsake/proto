import React from 'react';
export default class ProtoApp extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render () {
    return (
      <div>
          <button>hi</button>
        { this.props.children }
      </div>
    );
  }

}
