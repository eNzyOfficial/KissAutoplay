chrome.omnibox.onInputEntered.addListener(function(text) {
    let searchURL = '';
    
    switch(text.substr(0,text.indexOf(' '))) {
        default:
        case "anime":
        case "a":
            searchURL += 'https://kissanime.ac/Search/?s=';
        break;

        case "cartoon":
        case "c":
            searchURL += 'https://kissanime.ac/Search/?s=';
        break;
    }

    searchURL += encodeURIComponent(text.substr(text.indexOf(' ')+1));
    chrome.tabs.create({ url: searchURL });
});