### See the demo of this app

http://jkneb.github.io/ember-crud

### Install Grunt

http://gruntjs.com/getting-started  
`sudo npm install -g grunt-cli`

### Install the dev dependencies
cd into the project and run:  
`npm install`  
it will install locally the following node modules 
* grunt 
* grunt-contrib-sass 
* grunt-contrib-concat 
* grunt-contrib-watch 
* grunt-ember-handlebars
* grunt-karma
* karma-mocha
* karma-coverage
* karma-coffee-preprocessor

### How to compile css

Requirements:  
Install Ruby ([RVM](https://rvm.io/rvm/install) is your friend), then `gem install sass`

Run the following command:  
`grunt watch` or `grunt sass`

### How to compile .hbs templates

Run the following command:  
`grunt watch` or `grunt ember_handlebars`

### How to concatenate js files

Run the following command:  
`grunt watch` or `grunt concat`

