import React, { useState } from 'react';
import NameBox from './NameBox';
import EmailBox from './EmaliBox';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleReset = () => {
    setName('');
    setEmail('');
    setText('');
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Text:', text);
  };

  return (
    <div>
      <NameBox
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <EmailBox
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='container'>
        <div className='form'>
        <label htmlFor="text">متن:</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      </div>
      <div className='container'>
        <button onClick={handleReset}>پاک کردن </button>
        <button onClick={handleSubmit}>ارسال کردن</button>
      </div>
    </div>
  );
}

export default App;
