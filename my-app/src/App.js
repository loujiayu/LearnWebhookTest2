import React, {useEffect, useState} from 'react';
import moment from 'moment';

import logo from './logo.jpg';
import './alibaba-font.css';
import './App.css';

function appendZero(obj) {
  if (obj < 10) return "0" + obj;

  return obj;
}
const within = moment(new Date(new Date() - Math.floor(Math.random()*86400000))).format('MM-DD hh:mm')

function App() {
  const [now, setNow] = useState(moment());
  const date = new Date();

  useEffect(() => {
    const t = setInterval(() => {
      setNow(moment());
    }, 1000);

    return () => {
      clearInterval(t);
    }
  }, [])

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />

      <div className="date">{date.getMonth() + 1}月{date.getDate()}日</div>
      <div className="time">{now.format('hh:mm:ss')}</div>
      <div className="locate">萧山南都幼儿园</div>
      <div className="name">楼*宇</div>
      <div className="within">{within}</div>
    </div>
  );
}

export default App;
