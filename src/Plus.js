import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Plus=()=> {
  const [number, setNumber]=useState(0)
  const [ableKey, setAbleKey]=useState(false)
  const plusNumber=()=>{
    setNumber(number+1)
  }
  const clear=()=>{
    setNumber(0)
  }
  const able=()=>{
    setAbleKey(!ableKey)
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
        PLUS
        <br/>
        CLICK狀態:{ableKey? <>DISABLE</>:<>ABLE</>}
        <Button key="CLICK" onClick={plusNumber} disabled={ableKey}>CLICK:{number}</Button>
        <Button key="CLEAR" onClick={clear}>CLEAR</Button>
        <Button key="DISABLE" onClick={able}>{ableKey? <>ABLE</>:<>DISABLE</>}</Button>
      </ButtonGroup>
    </Box>
  );
}
export default Plus;