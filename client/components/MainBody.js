import React from 'react';
import Dropdown from './Dropdown';

export default class MainBody extends React.Component {
  render() {
    return(
      <div className={"MainBody"}>
      <Dropdown
        items={this.items}
        value={true}
        textKey="text"
        valueKey="value"
        onChange={this.onChange}
      />
        
      
      </div>
      )
  }
  items = [
    { value: true,
      text: 'Include posts with',
    },
    { value: false,
      text: 'Exclude posts with',
    },
  ];

  onChange = (value) => {
    console.log(value);
  }
}
