import React, {useEffect, useState} from 'react';
import moment from 'moment';

import logo from './logo.jpg';
import './alibaba-font.css';
import './App.css';

const within = moment(new Date(new Date() - Math.floor(Math.random()*86400000))).format('MM-DD HH:mm')

function App() {
  const [now, setNow] = useState(moment());
  const [location, setLocation] = useState('');
  const [tmp, setTmp] = useState('');

  useEffect(() => {
    const t = setInterval(() => {
      setNow(moment());
    }, 1000);

    return () => {
      clearInterval(t);
    }
  }, [])

  if (!location) {
    return (
      <div className="input">
        <input onChange={(e) => {
          setTmp(e.target.value)
        }}></input>

        <button onClick={() => {setLocation(tmp)}}>go</button>
      </div>
    )
  }

  const date = new Date();


  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="date">{date.getMonth() + 1}月{date.getDate()}日</div>
      <div className="time">{now.format('HH:mm:ss')}</div>
      <div className="locate">{location || '萧山区南都幼儿园'}</div>
      <div className="name">楼*宇</div>
      <div className="within">{within}</div>
    </div>
  );
}

export default App;
