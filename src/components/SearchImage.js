import React from 'react'
import Typed from 'react-typed';
import {FcSearch} from 'react-icons/fc';

export default function CalendarPick() {
  const row = {
    border: '1px solid red',
    display: 'flex',
  }
  const column = {
    border:'1px solid red',
    flex: '50%',
  }

  const storyBlock = {
    minHeight:'3em',
    maxWidth:'70%',
    fontSize:'1.7rem',
    fontweight: 'bold',
    marginInline: '20%',
    marginBlock:'2.5%',
    color:'#FF8552',
    borderRadius: '1.5em',
    backgroundImage:'linear-gradient(white,white)',
  }
  const icon = {
    padding:'12px', 
    float:'right',
    color:'#FF8552',
  }
  var currentMonth = new Date().getMonth();
  switch(currentMonth){
    case 1:
      currentMonth = 'January';
    case 2: 
      currentMonth = 'February';
    case 3:  
      currentMonth = 'March';
    case 4:
      currentMonth = 'April';
    case 5: 
      currentMonth = 'May';
  }
  return ( 
    <>
    <div style = {storyBlock}>
        <h1 style={{paddingLeft:'3%',paddingBlock:'1%'}}>
            <Typed 
                strings={
                    ["Where To Blast?"]
                }
                typeSpeed={200}
            />
            <a style = {icon}><FcSearch/></a>
        </h1>
    </div>
    <div style={row}>
      <div style={column}>
        <p> 
          Explore The Past 20 Years of {currentMonth}
        </p>
      </div>
      <div style={column}>
      <p> 
        Select another Month 
      </p>
      </div>
    </div>
    </>
  )
}
