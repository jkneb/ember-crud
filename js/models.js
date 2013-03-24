App.Store = DS.Store.extend({
    revision: 12, 
    adapter: 'DS.FixtureAdapter'
});

// let's declare the user class
App.User = DS.Model.extend({
    id     : DS.attr('number'),
    name   : DS.attr('string'),
    email  : DS.attr('string'),
    bio    : DS.attr('string'),
    avatar : DS.attr('string')
});

App.User.FIXTURES = [
    {
        id: "1",
        name: "Julien Knebel",
        email: "julienknebel@gmail.com",
        bio : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        avatar : "/images/avatars/jk.jpg"
    }, 
    {
        id: "2",
        name: "Sponge Bob",
        email: "bob@sponge.com",
        bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        avatar: "/images/avatars/bs.jpg"
    },
    {
        id: "3",
        name: "John Doe",
        email: "john@doe.com",
        bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        avatar: "/images/avatars/jd.jpg"
    }
];