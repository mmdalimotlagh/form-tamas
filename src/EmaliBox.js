import React from 'react';
import './App.css'

class EmailBox extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='form'>
        <label htmlFor="email">ایمیل:</label>
        <input
          type="email"
          id="email"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
      </div>
     
    );
  }
}

export default EmailBox;
