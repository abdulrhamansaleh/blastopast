import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function EventImage(props) {
  const [image,setImage] = useState('');
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://google-image-search1.p.rapidapi.com/',
      params: {keyword: props.description, max: '1'},
      headers: {
        'X-RapidAPI-Key': '78b7fde4fbmsh2b197a3d212b757p133e06jsn4072492ead4d',
        'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      setImage(response.data[0]["image"]["url"]);
    }).catch(function (error) {
      console.error(error);
    });
  })
  return (
    <img src={image}/>
  )
}

