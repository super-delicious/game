//URL TO THE WEBSITE SOURCE
var api = "https://api.giphy.com/v1/gifs/search?";
//API KEY
var apiKey = "&api_key=dc6zaTOxFJmzC";
//TAG WE ARE LOOKING FOR IN THE URL
var query = "&q=emoji+turkey";


function setup() {
  noCanvas();
  var url = api + apiKey + query;

  //loadJSON(); is a p5.js function, where give a URL from an API that gives you JSON
  //the callback is gotData
  loadJSON(url, gotData);
}

//createImg() a function in p5.js. Makes an HTML element "<img src ="___">, if you give it an arguement that is waht becomes the soruce of the image tag.
//data variable gets the giphy from the API

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}

function draw() {

};
