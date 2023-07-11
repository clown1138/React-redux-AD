
import React, { useState,useEffect } from 'react';
const Ad001=()=>{
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
    const [isHidden, setIsHidden] = useState(true);

    const toggleButton = () => {
      setIsHidden(!isHidden);
    };
    return (

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
    <button onClick={toggleButton}>點擊開始動畫</button>
    <div className={`fade-in-out ${isHidden ? 'hidden' : ''}`}>
<span>ASDW</span>
</div>
<div
// className={`fade-in-out ${isHidden ? 'hidden' : ''}`}
    style={{
        position: 'fixed',
        left: '50%',
        transform: `translateX(-50%) rotate(${calculateRotation()}deg)`,

        bottom: 10,
        backgroundImage: `url(/circle.png)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '400px',
        height: '640px',
        zIndex: 2,
    }}
>
</div>
</div>
    )
}
export default Ad001;