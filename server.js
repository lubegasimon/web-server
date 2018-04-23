console.log('creating webservers');

const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//app variable to store the return results from calling express as a function


//app.get is like registering you application handler to start recieving requests and sending responses (route handler)
app.get('/', (req, res) => {
    // res.send('<h1>Hey there, Express brings you this!<h1>');
    res.send({
        name: 'simon',
        age: 20,
        hobby: 'programming'
    });
});//res.send send response to the requests made by the user/client

app.get('/about', (req, res) => {
    // res.send('About this page');
    res.render('about.hbs', {
        pageTitle: 'Masters in software engineering',
        currentYear: new Date().getFullYear()
    });
});

//this binds the app to the port on your local machine
app.listen(3000, () => {

});
console.log('server is up on port 3000');
