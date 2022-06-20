import fetch from "node-fetch";

export class WikiAccessAPI{
    constructor(url){
        this.url = url;
        process.setMaxListeners(0);
    }
    parseHTML(string){
        // remove html tags from word 
        var string = string.replace(/<\/?[^>]+>/gi,'');
        // find the word that encapsulates the text 
        let scrapeWord = "&quot;"
        // index the first instance of the word 
        let first = string.search(scrapeWord);
        // strip text from first index till the end 
        string = string.slice(first+scrapeWord.length);
        // index second instance of the word 
        let second = string.search(scrapeWord);
        // string text between second index and start
        string = string.slice(second-second,second);
        // return the substring descriptions
        return string;
    }
    async getHistory(searchKey,searchLimit){
        // user paramters 
        var request = `?q=${searchKey}&limit=${searchLimit}`;
        // response of API fetch
        var response = fetch(this.url+request);
        // 
        // itterate over the amount of results and retrieve the necessary information
        for (let i=0; i < searchLimit;i++){
            // clone the response into json object for multiple use of body in promise object 
            response.then(value => {
                return value.clone().json();
            })
            // check if all forms of description in the json object are not null
            .then(data => {
                if((data['pages'][i]['description'] && data['pages'][i]['title']) && data['pages'][i]['excerpt'] != null) {
                   // retrieve all forms of descriptions for the event 
                   var eventTitle = data['pages'][i]['title'];
                   var eventDesc = data['pages'][i]['description'];
                   var eventExcerpt = this.parseHTML(data['pages'][i]['excerpt']);
                   // decide between title and description and use excerpt as final resort
                   // look for the lengthier description with a limit of 30 characters
                   if (eventTitle.length > eventDesc.length && eventTitle.length > 30){
                    console.log(eventTitle)
                    //return eventTitle;
                   }
                   else if (eventDesc.length > eventTitle.length && eventDesc.length > 30){
                    console.log(eventDesc)
                    //return eventDesc;
                   }
                   else{
                    console.log(eventExcerpt)
                    //return eventExcerpt;
                   }
                }
            })
        }
    }
}

/*
var wiki = new WikiAccessAPI("https://en.wikipedia.org/w/rest.php/v1/search/page");
wiki.getHistory('april 2019',2);
*/

