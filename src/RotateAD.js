import React, { useState,useEffect } from 'react';
import Ad001 from './Ad001';

const RotateAD=()=> {

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
      <Ad001/>
 
    </div>
  );
}
export default RotateAD;