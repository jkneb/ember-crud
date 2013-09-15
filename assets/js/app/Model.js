// the model for a user
App.User = DS.Model.extend({
    name   : DS.attr('string'),
    email  : DS.attr('string'),
    bio    : DS.attr('string'),
    avatarUrl : DS.attr('string'),
    creationDate : DS.attr('date')
});

// These are fakes datas for the FixtureAdapter.
// The FixtureAdapter lets you work with fake datas while in development stage.
/*App.User.FIXTURES = [
    {
        id: 1,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Fri Aug 09 2013 15:13:16 GMT+0200 (CEST)'
    }, 
    {
        id: 2,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Fri Aug 07 2013 10:10:10 GMT+0200 (CEST)'
    },
    {
        id: 3,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Aug 17 2012 15:43:12 GMT+0200 (CEST)'
    }, 
    {
        id: 4,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 5,
        name: 'Dean Winchester',
        email: 'deany@plopmail.com',
        bio: ':)',
        avatarUrl: './assets/images/avatars/dean.jpg',
        creationDate: 'Mon Jan 30 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 6,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor velit esse cillum dolore eu fugiat pariatur.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 7,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Apr 02 2012 12:12:12 GMT+0200 (CEST)'
    }, 
    {
        id: 8,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue Jun 12 2012 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 9,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Mon Aug 17 2013 15:43:12 GMT+0200 (CEST)'
    },
    {
        id: 10,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Aug 17 2013 15:43:12 GMT+0200 (CEST)'
    }, 
    {
        id: 11,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Mon Aug 17 2013 15:43:12 GMT+0200 (CEST)'
    },
    {
        id: 12,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Mon Aug 12 2013 15:43:12 GMT+0200 (CEST)'
    },
    {
        id: 13,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './assets/images/avatars/jk.jpg',
        creationDate: 'Mon Oct 12 2013 13:13:13 GMT+0200 (CEST)'
    }, 
    {
        id: 14,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './assets/images/avatars/sb.jpg',
        creationDate: 'Tue May 22 2013 12:12:12 GMT+0200 (CEST)'
    },
    {
        id: 15,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './assets/images/avatars/default.png',
        creationDate: 'Thu Sep 17 2013 11:11:11 GMT+0200 (CEST)'
    }
];*/
