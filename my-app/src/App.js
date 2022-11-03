import React, {useEffect, useState} from 'react';
import moment from 'moment';

import logo from './image.png';
import heyan from './heyan.png';
import './alibaba-font.css';
import './App.css';

const within = moment(new Date(new Date() - Math.floor(Math.random()*86400000))).format('MM-DD HH:mm')
const chineseDay = ['一', '二', '三', '四', '五', '六', '日']

function App() {
  const [now, setNow] = useState(moment());
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [tmp, setTmp] = useState('');
  const [tmpname, setTmpName] = useState('');

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

        <input onChange={(e) => {
          setTmpName(e.target.value)
        }}></input>

        <button onClick={() => {
          setLocation(tmp || '萧山区南都幼儿园')
          setName(tmpname || '楼*宇')
        }}>go</button>
        {/* <button onClick={() => {setLocation(tmpname || '萧山区南都幼儿园')}}>go</button> */}
      </div>
    )
  }

  const date = new Date();

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={heyan} className="heyan" alt="heyan" />
        <div className="date">{date.getMonth() + 1}月{date.getDate()}日  星期{chineseDay[date.getDay() - 1]}</div>
        <div className="time">{now.format('HH:mm:ss')}</div>
        <div className="locate">{location || '萧山区南都幼儿园'}</div>
        <div className="name">{name}</div>
        {/* <div className="within">{within}</div> */}

      
    </div>
  );
}

export default App;
