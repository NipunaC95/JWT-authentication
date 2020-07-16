# Introduction

JWT is a mechanism to verify the owner of some JSON data. It’s an encoded string, which is URL safe, that can contain an unlimited amount of data (unlike a cookie), and it’s cryptographically signed.

In this API after a user signed in or logged in, the user receives a   JWT then the user can access other routes by providing that JWT. 
 
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

 
### Routes specific arguments and return types
#### /user
- get request 
-  Should pass user id in URL .
    eg:- https://www.herokuappone.com/user/23hj23g41h2g3541
- Should pass JWT in the authentication header 


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

