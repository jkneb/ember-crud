/* 
 * Creates default users in the browser's localStorage so the demo doesn't look like shit
*/

var defaultUsers = {
    "App.User":{
        "records":{
            "1":{
                "id":1,
                "name":"Julien Knebel",
                "email":"julienknebel@gmail.com",
                "bio":"Freelance UI/UX Interface Designer + Front-End Developer",
                "avatarUrl":"/ember-crud/assets/images/avatars/jk.jpg",
                "creationDate":"Mon, 26 Aug 2013 20:23:43 GMT"
            },
            "2":{
                "id":2,
                "name":"Sponge Bob",
                "email":"bob@sponge.com",
                "bio":"Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.",
                "avatarUrl":"/ember-crud/assets/images/avatars/sb.jpg",
                "creationDate":"Fri, 07 Aug 2013 10:10:10 GMT"
            },
            "3":{
                "id":3,
                "name":"Dean Winchester",
                "email":"deany@plopmail.com",
                "bio":":)",
                "avatarUrl":"/ember-crud/assets/images/avatars/dean.jpg",
                "creationDate":"Mon, 30 Jan 2013 12:12:12 GMT"
            },
            "4":{
                "id":4,
                "name":"John Doe",
                "email":"john@doe.com",
                "bio":"Sed do eiusmod tempor velit esse cillum dolore eu fugiat pariatur.",
                "avatarUrl":"/ember-crud/assets/images/avatars/default.png",
                "creationDate":"Tue, 22 May 2013 12:12:12 GMT"
            }
        }
    }
};

if (localStorage) {
    if ( !localStorage.getItem('DS.LSAdapter') )
        localStorage.setItem( 'DS.LSAdapter', JSON.stringify(defaultUsers) );
} else {
    throw new Error("Your browser doesn't seem to support localStorage, which is annoying for the purpose of this demo :P");
}
