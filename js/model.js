App.Store = DS.Store.extend({
    revision: 11, 
    adapter: 'DS.FixtureAdapter'
});

App.User = DS.Model.extend({
    name   : DS.attr('string'),
    email  : DS.attr('string'),
    bio    : DS.attr('string'),
    avatarUrl : DS.attr('string')
});

App.User.FIXTURES = [
    {
        id: 1,
        name: 'Julien Knebel',
        email: 'julienknebel@gmail.com',
        bio: 'Freelance web & print designer + front-end developer',
        avatarUrl: './images/avatars/jk.jpg'
    }, 
    {
        id: 2,
        name: 'Sponge Bob',
        email: 'bob@sponge.com',
        bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
        avatarUrl: './images/avatars/sb.jpg'
    },
    {
        id: 3,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        avatarUrl: './images/avatars/default.png'
    },
    {
        id: 4,
        name: 'Jane Doe',
        email: 'jane@doe.com',
        bio: 'Duis aute irure in voluptate velit esse cillum nulla pariatur.',
        avatarUrl: './images/avatars/default.png'
    },
    {
        id: 5,
        name: 'Dean Winchester',
        email: 'deany@plopmail.com',
        bio: ':)',
        avatarUrl: './images/avatars/dean.jpg'
    },
    {
        id: 6,
        name: 'John Doe',
        email: 'john@doe.com',
        bio: 'Sed do eiusmod tempor velit esse cillum dolore eu fugiat pariatur.',
        avatarUrl: './images/avatars/default.png'
    }
];
