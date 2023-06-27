import React, { useState,useEffect } from 'react';


const RotateAD=()=> {
    const [scrollDistance, setScrollDistance] = useState(0);
    const handleScroll = () => {
      const distance = window.scrollY;
      console.log(window.scrollY,"001")

      setScrollDistance(distance);
    };
  
    const calculateRotation = () => {
      return scrollDistance * 0.1;
    };
    window.addEventListener('scroll', handleScroll);
  return (
    <div
    style={{
        backgroundImage: `url(/article.jpg)`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: '0 auto', // 居中显示
        width: '1024px',
        height: '17800px', // 使用视窗高度作为高度
        position: 'relative'
      }}
    >
      <div
        style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 0,
            backgroundImage: `url(/background.png)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '1024px',
            height: '640px',
            zIndex: 1,
        }}
      >
        <div
            style={{
                position: 'fixed',
                left: '50%',
                transform: `translateX(-50%) rotate(${calculateRotation()}deg)`,

                bottom: 0,
                backgroundImage: `url(/circle.png)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '640px',
                height: '640px',
                zIndex: 2,
            }}
        >
        </div>
      </div>
    </div>
  );
}
export default RotateAD;