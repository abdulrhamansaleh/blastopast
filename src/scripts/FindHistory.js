import fetch from "node-fetch";

export class WikiAccessAPI{
    constructor(url){
        this.url = url;
    }
    async getHistory(searchKey,searchLimit){
        var request = `?q=${searchKey}&limit=${searchLimit}`;
        var response = fetch(this.url+request);
        var events = [];
        for (let i=0; i < searchLimit;i++){
            // get json description of response object and strip html from the json 
            var description = await response.then(value => value.clone().json()).then(data => {
                return data['pages'][i]['excerpt'].replace(/<\/?[^>]+>/gi, '');
            });
            // scrape description to obtain the essential explination
            let scrapeWord = "&quot;" 
            let firstScrapeIndex = description.search(scrapeWord);
            description = description.slice(firstScrapeIndex+scrapeWord.length);
            let secondScrapeIndex = description.search(scrapeWord);
            description = description.slice(0,secondScrapeIndex);
            // append all descriptions as part of an array 
            events.push(description);
            console.log(events)
        }
        return events;
    }
}

var wiki = new WikiAccessAPI("https://en.wikipedia.org/w/rest.php/v1/search/page");

var value = await wiki.getHistory('april 2019',1);

//console.log(value);