import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CountUp from 'react-countup';

const MostViolation = (props) => {
    const group = {display :'block', textAlign:'center'};
  const button = {fontSize:'10px',display :'inline-block', margin: '0 auto', backgroundColor: "#262254", outline: 'none', "&:hover":{
    backgroundColor: "aqua"
  }, "&:focus":{
    backgroundColor: "aqua"
  }}
  return (
    <div className='most-con'>
        <p className='title-2'>{props.title}</p>
        <div className='btn-three'>
        <ButtonGroup sx={group} variant="contained" aria-label="outlined primary button group">
          <Button sx={button} >Danas</Button>
          <Button sx={button} >7 dana</Button>
          <Button sx={button} >Mjesec</Button>
        </ButtonGroup>
        </div>
        <p className='title-3'>{props.text}</p>
        <CountUp className='num' start={0} end={props.num}  duration={2.05}></CountUp>
    </div>
  )
}

export default MostViolation