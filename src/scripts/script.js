// import websearch class 
import { WebSearchAPI } from "./SearchWeb.js";

var web = new WebSearchAPI("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI");

web = await web.getImage('apple',1,1,true);




