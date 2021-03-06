import React, { useState,useEffect } from 'react';
import EventImage from './EventImage';
import axios from 'axios';

export default function Event(props) {
  const [events, setEvents] = useState([]);
  var searchKey = `${props.month} 2021`;
  var searchLimit = 20;
  useEffect(() => {
    var webURL = "https://en.wikipedia.org/w/rest.php/v1/search/page";
    var request = `?q=${searchKey}&limit=${searchLimit}`;
    var response = axios.get(webURL+request);
    response.then(value => {
      var data = value['data']['pages'];
      var filteredArray = data.filter(event => event.title.length > 30 && event.title.length < 80)
      setEvents(filteredArray[0]);
      }
    )
  },[])
  const headerStyle = {
    color: 'black',
    border:'2px solid blue',
    margin: '10px',
    textAlign: 'center',
  }
  return (
    <> 
    <div key ={events.id}>
      <EventImage description={events.title}/>
      <h1 style = {headerStyle}>{events.title}</h1>
      <h2 style = {headerStyle}>{events.description}</h2>
    </div>
    </>
  )
}
