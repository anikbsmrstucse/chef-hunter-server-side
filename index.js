const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');

app.use(cors())

app.get('/', (req , res) => {
    res.send('chef-server-is-runing');
})

app.get('/allchef',(req, res) => {
    res.send(chef);
})

app.get('/allchef/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const recipes = chef.find(recipie => recipie.id == id);
    console.log(recipes);
    res.send(recipes);
})

app.listen(port,() => {
    console.log(`chef hunter is running ${port}`);
})