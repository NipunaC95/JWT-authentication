# IdeaBrain - Login server
 
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)   [![License](https://img.shields.io/badge/color-Beerware-blue.svg)](https://en.wikipedia.org/wiki/Beerware) 


## Development setup

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

## About JWT 

jwt is stored in local storage of the browser it is named  as token. It contains some usefull infromation regarding the user and it's encrypted . To decrypt that we need a special code 


### Routes specific arguments and return types
#### /user
- get request 
-  Should pass user id in URL .
    eg:- https://www.herokuappone.com/user/23hj23g41h2g3541
- Should pass JWT in authentication header 


#### /users
- get request 
- Should pass JWT in authentication header 

#### /userLogin
- post request 
- Should pass email and password in JSON 
  eg :- { "email":"aaa@a.com", "password":"bbb"}


#### /userSignUp
- post request 
- Should pass following details  in JSON ->  name , district , email , password 
  eg :- { "name":"Jhon " , "district" : "Kaluthara" , "email" : "aaa@a.com", "password" : "bbb" , "telephone" :"0992341235" }
- Returns a  JWT 


#### /userUpdate
- post request 
- Should pass a JWT as authentication header 
- Should pass following details  in JSON ->  name , district , email , password , telephone
  eg :- { "name":"Jhon " , "district" : "Kaluthara" , "email" : "aaa@a.com", "password" : "bbb" , "telephone" :"0992341235"} 


#### /userDelete
- post request 
- Should pass JWT in authentication header 
-  Should pass user id in URL . 
    eg:- https://www.herokuappone.com/userDelete/23hj23g41h2g3541

