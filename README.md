# Viemo Code Challenge

Carousel and main layout with photos, information and links to trailers.

# Getting Started

## NPM or YARN

You should have npm or yarn installed in your environment if not go to [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/en/) for installation, whichever you prefer.

```
$ npm -v
6.5.0

$ yarn -v
1.6.0
```

## React JS

This App is built on the [React Js](https://reactjs.org) framework, yea it is totally needed.

```
$ npm info react version
16.7.0
```
***


# Installing

To install the app we will begin by cloning the repository. You may also change the name of the folder on your end.

```JavaScript
$ git clone https://github.com/crissyCodestar/vimeo.git  <YOUR_DIR_NAME>
$ cd <YOUR_DIR_NAME>
$ npm install
```
Everything should compile from package.json and install your node_modules.

## Configure App

You will need your own [Vimeo](https://data.donorschoose.org) access token to receive information from the api. If you do not already have a free Vimeo account, register for a new account.

### Insert your access_token

```JavaScript
  //Located in src folder go to ./util/Vimeo.js
  //Replace const access_token = process.env.REACT_APP_ACCESS_TOKEN; with...

  const access_token = 'INSERT_DONORS_API_KEY';
```
or if you are publishing or want to add to a public area you can be fancy like myself and create a .env file to protect your access_token.

```JavaScript
  //Create a .env file in main folder, add...

  REACT_APP_ACCESS_TOKEN='INSERT_DONORS_API_KEY';
```

# Start App

Now you can explore. Run the start command for React...

```JavaScript
$ npm start
```

***

# Languages & Tools

## JavaScript

* React JS for UI framework

## API's

* Vimeo database

***

# Author(s)

Crystal Grant - Initial work

> Programming today is a race between software engineers striving to build bigger and better idiot-proof
> programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.

> ―- Rick Cook, The Wizardry Compiled

# Vimeo Code Challenge
