import React from 'react'
import Typed from 'react-typed';
import  "./styles.css";
import {Link} from 'react-router-dom';
import {FcSearch} from 'react-icons/fc';


export default function SelectionSegment() {
  var currentMonth = new Date().getMonth();
  var month = getMonth(currentMonth);
  return ( 
    <>
    <div className="searchBar">
        <h1 className="searchText">
            <Typed 
                strings={
                  ["Where To Blast?"]
                }
                typeSpeed={200}
            />
            <a size={100} style = {{float: 'right',padding: '10px'}}><FcSearch/></a>
        </h1>
    </div>
    <div className="row">
      <div className="column">
        <h1 className="columnHeader"> 
          Explore The Past 20 Years of {month}
        </h1>
        <p className="columnPara">
          Learn more about the politics, sports and other significant events that occured in {month}.
        </p>
        <Link to="explore-current"><button className="btn-go">Explore</button> </Link>
      </div>
      <div className="column column-2">
        <p className="columnHeader"> 
          Select another Month 
        </p>
        <p className="columnPara">
          Choose a Month and explore similar categories of events
        </p>
        <Link to="explore-custom"><button className="btn-go">Explore</button> </Link>
      </div>
    </div>
    </>
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