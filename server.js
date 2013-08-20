var express = require('express');


var app = express();

app.configure(function () {
    app.use(express.bodyParser());
});

var users = {
    0: {
        id: 0,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Fri Aug 09 2013 15:13:16 GMT+0200 (CEST)'
    },
    2: {
        id: 2,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Fri Aug 07 2013 10:10:10 GMT+0200 (CEST)'
    },
    3: {
        id: 3,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Aug 17 2012 15:43:12 GMT+0200 (CEST)'
    },
    4: {
        id: 4,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    5: {
        id: 5,
        name: 'Dean Winchester',
        email: 'deany@plopmail.com',
        bio: ':)',
        avatarUrl: './assets/images/avatars/dean.jpg',
        creationDate: 'Mon Jan 30 2013 12:12:12 GMT+0200 (CEST)'
    }
}


app.use(express.static(__dirname));


// list of user
app.get('/users', function(req, res) {
    var userInArray = [];
    for (var userId in users){
        userInArray.push(users[userId])
    }
    res.send({users:userInArray});
});


// get user by id
app.get('/users/:id', function(req, res) {
    res.send({user:users[req.params.id]});
});


// new user
app.post('/users', function(req, res) {
    if (!!req.body.user.id && users[req.body.user.id] == null){
        users[req.body.user.id] = req.body.user;
        res.send("ok");
    }
    res.send("ko");
});


// update user
app.put('/users/:id', function(req, res) {
    if (!!req.body.user.id && users[req.body.user.id] != null){
        users[req.body.user.id] = req.body.user;
        res.send("ok");
    }
    res.send("ko");
});

app.delete('/users/:id', function(req, res) {
    if (!!req.params.id && users[req.params.id] != null){
        delete users[req.params.id];
        res.send("ok");
    }
    res.send("ko");
});


app.listen(3000);
console.log('Listening on port 3000...');