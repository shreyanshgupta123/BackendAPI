const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const getmenu = require('./Getmenu.json');
const getallrestaurant = require('./Get_all_restaurants.json');
const getallfood = require('./Getmenu.json'); // Assuming this should be require('./Get_all_food_items.json')
const cors = require('cors');

app.use(cors());

app.route('/')
    .get((req, res) => {
        res.send('Prod api');
    });

app.route('/food_get_menu')
    .get((req, res) => {
        res.send(getmenu);
    });

app.route('/food_get_all_restaurant')
    .get((req, res) => {
        res.send(getallrestaurant);
    });

app.route('/food_get_all_food_items')
    .get((req, res) => {
        res.send(getallfood); // Assuming this should be getallfood
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
