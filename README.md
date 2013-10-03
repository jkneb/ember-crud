This repository is an Ember 1.0.0 + Ember Data 1.0.0-beta3 simple demo demonstrating: 

* a `Creation` / `Read` / `Update` / `Delete` of a collection of `users`
* complex CSS transitions / animations on `views`
* Handlebars templates precompiling with [Grunt](http://gruntjs.com/getting-started)
* test suite with [Karma](https://github.com/karma-runner/karma)
* fully responsive version (with touch events, and with animations between routes)


**Here's the demo ➔ [jkneb.github.io/ember-crud](http://jkneb.github.io/ember-crud)**

## Working with the files

### First install Grunt

[gruntjs.com/getting-started](http://gruntjs.com/getting-started) or `sudo npm install -g grunt-cli`

### Install the dev dependencies

First `cd` into the project and run `npm install`

This command will install locally the following node modules 

* [grunt](gruntjs.com)
* [grunt-contrib-sass](https://npmjs.org/package/grunt-contrib-sass)
* [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
* [grunt-ember-templates](https://npmjs.org/package/grunt-ember-templates)
* [grunt-karma](https://npmjs.org/package/grunt-karma)
* [karma-mocha](https://npmjs.org/package/karma-mocha)
* [karma-coverage](https://npmjs.org/package/karma-coverage)
* [karma-coffee-preprocessor](https://npmjs.org/package/karma-coffee-preprocessor)

### How to compile css

**Requirements:**  
Install Ruby ([RVM](https://rvm.io/rvm/install) is your friend), then `gem install sass`

Run the following command:  
`grunt watch` or `grunt sass`

### How to compile .hbs templates

Run the following command:  
`grunt watch` or `grunt emberTemplates`

### How to concatenate js files

Run the following command:  
`grunt watch` or `grunt concat`

### How to run tests

**Requirements:**  
You need [Karma](https://github.com/karma-runner/karma) on your machine  
`sudo npm install -g karma`  

Then run the following command:  
`karma start tests/conf/karma.unit.conf.js`

If you don't want to install Karma on your system you could simply use the `bin` located in the `node_modules/`. So you could run the same command as above but like this:  
`./node_modules/karma/bin/karma start conf/karma.unit.conf.js`
