# Introduction

I've made a backend to generate question paper as per marks weightage and difficulty settings

# Design decisions

-I've used MongoDB for my database where I have generated the sample database with easy,medium and hard questions.
-I've used NodeJS for the routing, modelling, and api calling.

# Brief

The heart of this code is at server.js, as you can see I've instantiated the express app there and I've configured my db using mogodb and mongoose orm, while the post and get calls are in routes and the functions to work are in the controllers.

# Installing dependencies

First do : npm init


npm i colors
npm i express
npm i express-async-handler
npm i mongoose



# Running the project

node server.js

# How to check if question paper is being generated

After hosting it on localhost : 5001, try posting any question according to the model suggested in /backend/models/questionModel
Try posting it on http://127.0.0.1:5001/api/questions/
Try generating a question paper : http://localhost:5001/api/questions/qp?subject=Physics&topic=Waves&marksTotal=100&easyRatio=20&mediumRatio=30&hardRatio=50&esMrk=2&mdMrk=3&hdMrk=5 

# Loopholes

- There are any Loopholes which I've noticed like getting the random combo for different marked questions. We can overcome this limitation using Dynamic programming and I've still made it such that you can implement it that way. If I were given the time , I could've overcome it.
