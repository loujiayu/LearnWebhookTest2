import React, {useEffect, useState} from 'react';
import img from './Image_20221102115305.png';
import './hesuan.css';

export function Hesuan(props) {
  // const { img } = props;

  // const img = 
  return (
    <div>
      <img src={img} className="Hesuan-logo" alt="logo" />
      <div className='hesuan-time'>2022-11-01 19:03:14</div>
    </div>
  )
}