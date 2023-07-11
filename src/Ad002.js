
import React, { useState,useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './Ad.css';
import { useSelector, useDispatch } from 'react-redux';

const Ad002=()=>{
  const counter = useSelector(state => state);

  const dispatch = useDispatch();

    const [animationClass, setAnimationClass] = useState('');
    const [cloudanimationClass, setcloudAnimationClass] = useState('');



  const closeAD=()=>{  dispatch({ type: "CLOSEAD" })}

    useEffect(() => {

      const handleScroll = () => {
        const distance = window.scrollY;
        if (counter.showAD === true && distance > 500) {
          dispatch({ type: "OPENAD" });
          console.log("aaaaa");
          setAnimationClass('animate');
          setcloudAnimationClass("cloudanimate")
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [counter.showAD, dispatch]);

    

    return (
        <div
        style={{
            display:`${counter.closeAD}`,
            position: 'fixed',
            bottom: 0,
            backgroundImage: `url(/background.png)`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '1024px',
            height: '640px',
            zIndex: 1,
            justifyContent: "center",
            alignItems: 'center',
        }}
        >
          <CloseIcon onClick={closeAD} sx={{ zIndex:"10", width: '3em', height: '3em',position: "absolute",top: "10px",right: "10px"}}/>
          <img
              src="airplane.png"
              alt="Airplane"
              className={`airplane ${animationClass}`}
          />
          <img
            src="clound.png"
            alt="cloud"
            className={`cloud ${cloudanimationClass}`  }  
          />
          <h1 className="title1">現在訂購</h1>
          <h1 className="title2">機票折扣</h1>
          <h1 className="title3 ">75折</h1>
      
        </div>
    )
}
export default Ad002;