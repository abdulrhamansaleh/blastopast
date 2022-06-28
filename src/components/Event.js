import React, { useState,useEffect } from 'react';
import EventImage from './EventImage';
import axios from 'axios';

export default function () {
  const [events, setEvents] = useState([]);

  var searchKey = 'may 2021';
  var searchLimit = 8;

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
  })
  return (
    <> 
    <div key ={events.id}>
    <EventImage description = {events.title}/>
      <h1>{events.title}</h1>
      <h2>{events.description}</h2>
    </div>
    </>
  )
}
