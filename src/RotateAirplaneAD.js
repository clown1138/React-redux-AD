import React, { useState,useEffect } from 'react';
import Ad002 from './Ad002';

const RotateAirplaneAD=()=> {

  return (
    <div
    style={{
        backgroundImage: `url(/article.jpg)`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: '0 auto', 
        width: '1024px',
        height: '17800px', 
      }}
    > 
      <Ad002/>
 
    </div>
  );
}
export default RotateAirplaneAD;