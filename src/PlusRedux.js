import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';

const RotateAD = () => {
  const counter = useSelector(state => state);

  const dispatch = useDispatch();
  const DispatchAction=(action)=>{
    dispatch({ type: action });
  }
  return (
<Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        PLUSREDUX
        <br/>
        CLICK狀態:{counter.able? <>DISABLE</>:<>ABLE</>}
        <Button key="CLICK" onClick={()=>DispatchAction("CLICK")} disabled={counter.able}>CLICK:{counter.counter}</Button>
        <Button key="CLEAR" onClick={()=>DispatchAction("CLEAR")}>CLEAR</Button>
        <Button key="DISABLE" onClick={()=>DispatchAction("DISABLE")}>{counter.able? <>ABLE</>:<>DISABLE</>}</Button>
      </ButtonGroup>
    </Box>
  );
};

export default RotateAD;