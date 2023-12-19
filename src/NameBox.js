import React from 'react';
import './App.css';

class NameBox extends React.Component {
  render() {
    return (
      <div className='container'> 
      <div className='form'>
        <label htmlFor="name" >اسم:</label>
        <input
          type="text"
          id="name"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
      </div>
    );
  }
}

export default NameBox;