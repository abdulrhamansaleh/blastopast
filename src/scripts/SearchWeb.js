import fetch from "node-fetch";

export class WebSearchAPI{
    constructor(url){
        this.url = url
    }
    async getImage(imageDesc,pageNum,pageSize,autoCorrect){
        var imageURL = '';
        const parameters = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '78b7fde4fbmsh2b197a3d212b757p133e06jsn4072492ead4d',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };
        var request = `?q=${imageDesc}&pageNumber=${pageNum}&pageSize=${pageSize}&autoCorrect=${autoCorrect}`;
        var response = fetch(this.url+request,parameters);
        await response.then(value => value.json()).then(data => imageURL = data["value"][0]["thumbnail"]);
        return imageURL;
    }
}
