import {React, useState} from 'react'
import Event from './Event'


export default function GetEvent(props) {
  const customProperty = props.custom
  var currentMonth = new Date().getMonth();
  var thisMonth = getMonth(currentMonth);
  const [month,setMonth] = useState('');
  return (
    <div>
        {customProperty == 0 && 
          <Event month={thisMonth}/>
        }
        {customProperty == 1 && 
        <h1>Select a Month To Begin Exploring The Past</h1>
        }
    </div>
  )
}

function getMonth(monthNumber){
  switch(monthNumber){
    case 0:
      return 'January';
    case 1: 
      return 'February';
    case 2:  
      return 'March';
    case 3:
      return 'April';
    case 4: 
      return 'May';
    case 5:
      return 'June';
    case 6: 
      return 'July';
    case 7: 
      return 'August';
    case 8: 
      return 'September';
    case 9: 
      return 'October';
    case 10:
      return 'November';
    case 11:
      return 'December';
  }
}