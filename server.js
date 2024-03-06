/*************************************************************************************
* WEB322 - 2241 Project
* I declare that this assignment is my own work in accordance with the Seneca Academic
* Policy. No part of this assignment has been copied manually or electronically from
* any other source (including web sites) or distributed to other students.
*
* Student Name  : Carlos Andres Amaya Rengifo
* Student ID    : camaya-rengifo@myseneca.ca
* Course/Section: WEB322/NAA
*
**************************************************************************************/

const path = require("path");
const express = require("express");
const app = express();
const mealkitUtil = require("./modules/mealkit-util");
const expressLayouts = require('express-ejs-layouts');

//Making our assets folder public 
app.use(express.static(path.join(__dirname, "/assets")));

//Setting up ejs
app.set("view engine", "ejs");
app.set("layout", "layouts/main");
app.use(expressLayouts);

//Home Route
app.get("/", (req, res) => {
    // Fetching featured meal kits
    const featuredMeals = mealkitUtil.getFeaturedMealKits(mealkitUtil.getAllMealKits());

    // Rendering home.ejs with featuredMeals data
    res.render("home", {
        title: 'Home Page',
        layout: 'layouts/main', // This specifies the layout file to use
        featuredMeals: featuredMeals // Passing featuredMeals to the view
    });
});

//On the Menu
app.get("/on-the-menu", (req, res) => {
    // Fetching meal kits grouped by category
    const mealKitsByCategory = mealkitUtil.getMealKitsbyCategory(mealkitUtil.getAllMealKits());

    // Rendering on-the-menu.ejs with mealKitsByCategory data
    res.render("on-the-menu", {
        title: 'On the menu',
        layout: 'layouts/main', // Specifies the layout file to use
        categories: mealKitsByCategory // Passes the grouped meal kits to the view
    });
});

//Sign-Up
app.get("/sign-up", (req, res) => {
    res.render("sign-up", {
        title: 'Sign Up'
    });
});

//Log in
app.get("/log-in", (req, res) => {
    res.render("log-in", {
        title: 'Log In'
    });
});


// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something broke!")
});


// *** DO NOT MODIFY THE LINES BELOW ***

// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8080;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
  
// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);