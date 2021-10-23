const express = require("express");
const app = express();
let callfunction = require("./requestAPI");
let fulldate = require("./date");
let capitalizeFirstLetter = require("./date");
const path = require("path");
const countries = require("./counrtyname.json");
const dotenv = require("dotenv").config();

const views_path = path.join(__dirname, "../public/views");
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.static("./public"));
app.set("views", views_path);
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    let newsData = callfunction.newsDetails(async (callback) => {
      countryCode = "in";
      var dba = countries.name.find((element) => element.code == countryCode);
      res.status(200).render("index", { articles: callback.articles,
      countryName : dba.country });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/countries", async (req, res) => {
  try {
    const countriesapi = countries;
    res.status(200).render("countries", { countries: countriesapi.name });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.get("/country", async (req, res) => {
  try {
    const countryname = req.query.countryName;
    var dba = countries.name.find((element) => element.country == countryname);
    callfunction.getcountryData(dba.code, (cb) => {
      res.status(200).render("index", { articles: cb.articles,
      countryName: dba.country });
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/:countryName/search", async (req, res) => {
  try {
    const countryName = req.params.countryName;
    var dba = countries.name.find((element) => element.country == countryName);
    const searchItem = req.body.searchItem;
    let firstLetter = capitalizeFirstLetter(searchItem);
    callfunction.searchedData(firstLetter, fulldate, (cb) => {
      try {
        res
          .status(200)
          .render("index", { articles: cb.articles, firstLetter: firstLetter, countryName: dba.country });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
