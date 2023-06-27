import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const Home = () => {
    const urlClick = (url) => {
        window.open(url, '_blank');
      };
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
        <Button key="plus" onClick={() => urlClick("Plus")}>plus</Button>
        <Button key="plusRedux" onClick={() => urlClick("plusRedux")}>plusRedux</Button>
        <Button key="three" onClick={() => urlClick("Q2")}>Q2</Button>
      </ButtonGroup>
    </Box>
  )
};

export default Home;