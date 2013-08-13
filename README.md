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

**Requirements:**  
Install Ruby ([RVM](https://rvm.io/rvm/install) is your friend), then `gem install sass`

Run the following command:  
`grunt watch` or `grunt sass`

### How to compile .hbs templates

Run the following command:  
`grunt watch` or `grunt ember_handlebars`

### How to concatenate js files

Run the following command:  
`grunt watch` or `grunt concat`

### How to run tests

**Requirements:**  
You need [Karma](https://github.com/karma-runner/karma) on your machine  
`sudo npm install -g karma`  

Then run the following command:  
`karma start tests/conf/karma.unit.conf.js`

Or you could simply use the bin located in the node_module, so no need to `npm install -g`.

And you can run the same command as above but like this:  
`./node_modules/karma/bin/karma start conf/karma.unit.conf.js`
