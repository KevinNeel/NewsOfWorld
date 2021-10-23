const { json } = require("express");
const requests = require("requests");

async function newsDetails(callback) {
  let url = ` https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`;
  const data = getcounrtyNews(url, callback);
}

async function searchedData(searchItem, fulldate, cb) {
  let url = ` https://newsapi.org/v2/everything?q=${searchItem}&from=${fulldate}&sortBy=popularity&apiKey=${process.env.API_KEY}`;
  const data = getcounrtyNews(url, cb)
}


async function getcountryData(countrycode, cb){
  let url = ` https://newsapi.org/v2/top-headlines?country=${countrycode}&apiKey=${process.env.API_KEY}`;
  const data = getcounrtyNews(url, cb);
}

async function getcounrtyNews(url, cb) {
  requests(url)
    .on("data", async function (data) {
      const newsData = JSON.parse(data);
      cb(newsData);
    })
    .on("end", function (err) {
      if (err) return console.log("connection closed due to errors", err);
      console.log("end");
    });
}

module.exports = { newsDetails, searchedData, getcountryData };
