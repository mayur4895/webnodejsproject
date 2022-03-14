
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs"); 
port = 3000;
 
 const staticpath =  path.join(__dirname,"../public");
const templetepath = path.join(__dirname, "../templete/views");
const partialspath = path.join(__dirname, "../templete/partials");
app.use(express.static(staticpath));

app.set('view engine', 'hbs');
app.set('views', templetepath);
hbs.registerPartials(partialspath);
 
app.get("/",(req ,res)=>{
      res.render("index")
});
app.get("/weather", (req, res) => {
  res.render("weather")
});

app.get("/about", (req, res) => {
  res.render("about")
});
app.get("about/*", (req, res) => {
  res.render("404")
});

app.get("weather/*", (req, res) => {
  res.render("404")
});


app.get("*", (req, res) => {
  res.render("404")
});


app.listen(port , ()=>{
    console.log("listen");
 })