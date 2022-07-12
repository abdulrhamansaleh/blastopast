import React, {useState,useEffect} from 'react';
import axios from 'axios';

export default function EventImage(props) {
  const [image,setImage] = useState('');
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
      params: {q:props.description, pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
      headers: {
        'X-RapidAPI-Key': '78b7fde4fbmsh2b197a3d212b757p133e06jsn4072492ead4d',
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },[])
  return (
    <div></div>
  )
}

