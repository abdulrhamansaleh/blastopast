var webURL = "https://en.wikipedia.org/w/rest.php/v1/search/page";
var webSearchURL = "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI";
var searchKey = "february 2017";
var searchLimit = 1;

getHistory(webURL,searchKey, searchLimit);

async function getImage(imageDesc,pageNum,pageSize,autoCorrect){
    var imageURL = '';
    const parameters = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '78b7fde4fbmsh2b197a3d212b757p133e06jsn4072492ead4d',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    var request = `?q=${imageDesc}&pageNumber=${pageNum}&pageSize=${pageSize}&autoCorrect=${autoCorrect}`;
    var response = fetch(webSearchURL+request,parameters);
    await response.then(value => value.json()).then(data => imageURL = data["value"][0]["thumbnail"]);
    return imageURL;
}

async function getHistory(url,searchKey,searchLimit){
    var request = `?q=${searchKey}&limit=${searchLimit}`;
    var response = fetch(url+request);
    for (let i=0; i < searchLimit;i++){
        response.then(value => {
            return value.clone().json();
        })
        .then(data => {
            var dataResponse = data['pages'][i];
            if((dataResponse['description'] && dataResponse['title']) && dataResponse['excerpt'] != null) {
               var eventTitle = dataResponse['title'];
               var eventDesc = dataResponse['description'];
               var eventExcerpt = parseHTML(dataResponse['excerpt']);
               if (eventTitle.length > eventDesc.length && eventTitle.length > 30){
                getImage(eventDesc,1,1,true).then(data => {
                    document.getElementById("eventImage").src = data;
                    document.body.append(eventDesc);
                })
                } 
               else if (eventDesc.length > eventTitle.length && eventDesc.length > 30){
                getImage(eventDesc,1,1,true).then(data => {
                    document.getElementById("eventImage").src = data;
                    document.body.append(eventDesc);
                })
               }
               else{
                getImage(eventExcerpt,1,1,true).then(data => {
                    document.getElementById("eventImage").src = data;
                    document.body.append(eventExcerpt);
                })
               }             
            }
        })    
    }
}

function parseHTML(string){
    var string = string.replace(/<\/?[^>]+>/gi,'');
    let scrapeWord = "&quot;"
    let first = string.search(scrapeWord);
    string = string.slice(first+scrapeWord.length);
    let second = string.search(scrapeWord);
    string = string.slice(second-second,second);
    return string;
}


