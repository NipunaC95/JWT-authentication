# IdeaBrain - Login server
 
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)   [![License](https://img.shields.io/badge/color-Beerware-blue.svg)](https://en.wikipedia.org/wiki/Beerware) 


## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.



```sh
npm i --save
node server
```


## Usage example

        'Heroku path' + 
          -'/user',      - used to get details about a specific user , Should pass JWT under authentication header
          -'/users',     - used to get a list of users , Should pass JWT under authentication header 
          -'/userLogin', - used to pass login credentials and get a realated JWT 
          -'/userSignUp' - used to pass signup credentials and get a realated JWT 
          -'/userUpdate' - used to update details of a  registered user, Should pass JWT under authentication header
          -'/userDelete' - used to delete details of a  registered user, Should pass JWT under authentication header

# About JWT 

jwt is stored in local storage of the browser it is named  as token. It contains some usefull infromation regarding the user and it's encrypted . So to decrypt that we need a special code 


### Routes specific arguments and return types




