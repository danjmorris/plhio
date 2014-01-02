# Premier League Hacking

PLH is a university league for hackathons. We hope to encourage greater participation in hackathons from universities across the country and foster a rich ecosystem of hackathons. Feel free to fork the code, make improvements, and open pull requests.

The site is based on the [MEAN stack](https://github.com/linnovate/mean) and [Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack). It uses [MongoDB](http://www.mongodb.org/), [Node.js](http://www.nodejs.org/), [Express](http://expressjs.com/), and [AngularJS](http://angularjs.org/).

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm
* MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - Make sure it's running on the default port (27017).

### Tools Prerequisites
* Yeoman - Install [Yeoman](http://yeoman.io/) with npm:

    ```
    $ npm install -g yo
    ```
    
    Yeoman comes with [Grunt](http://gruntjs.com/) (the JavaScript task runner) and [Bower](http://bower.io/) (the web package manager).

### Optional Tools for Deployment to Heroku
* [Generator-Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack) - Install with:

    ```
    $ npm install -g generator-angular-fullstack
    ```


* [Heroku Toolbelt](https://toolbelt.heroku.com/).

## Install
To start working on PLH, first fork the repo then clone it.

Install dependencies:

    $ npm install && bower install

Use [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt serve


## Troubleshooting
During install some of you may encounter some issues, most of this issues can be solved by one of the following tips.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*, usually updating those tools to the latest version solves the issue.

Updating NPM:
```
$ npm update -g npm
```

Updating Grunt:
```
$ npm update -g grunt-cli
```

Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

NPM Clean Cache:
```
$ npm cache clean
```

Bower Clean Cache:
```
$ bower cache clean
```

 
## Configuration
All configuration is specified in the [lib/config](lib/config/) folder, particularly the [env](lib/config/env/) files. Here you will need to specify your application name, database name, as well as hook up any social app keys if you want integration with Twitter, Facebook, GitHub or Google.

### Environmental Settings

There are three environments provided by default, __development__, __test__, and __production__.

To run with a different environment, just specify NODE_ENV as you call grunt:

	$ NODE_ENV=test grunt server

> NOTE: Running Node.js applications in the __production__ environment enables caching, which is disabled by default in all other environments.


## Heroku Quick Deployment
Before you start make sure you have [heroku toolbelt](https://toolbelt.heroku.com/) and [Generator-Angular-Fullstack](https://github.com/DaftMonk/generator-angular-fullstack) insalled. To deploy follow these steps:

1. `yo angular-fullstack:deploy heroku`

2. `cd heroku && git push heroku master`

3. `heroku addons:add mongohq`

That's it! Your app should be live and shareable. Type `heroku open` to view it.

## Contribution Help and Guidelines
Coming soon...

## Help
Any questions? Open an issue or message [@TimFogarty](https://github.com/TimFogarty).

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
