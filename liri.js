//ENV VARIABLES
require("dotenv").config();
//IMPORTS
const keys = require("./keys.js");
const request = require('request');
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const fs = require('fs');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// variable for user selection
var userArg = {
  userSelection: null
};

// available commands for use
var commands = {
  twitterCMD: "my-tweets",
  spotifyCMD: "spotify-this-song",
  omdbCMD: "movie-this",
  meCMD: "do-what-it-says"
};

// Welcome user
console.log("\nWelcome to LIRI!");

//Check for argument after program name
if (process.argv[2]) {
  userArg.userSelection = process.argv[2];
  console.log(" userArg.userSelection=",userArg.userSelection);
}

//Check for command use
if (userArg.userSelection === commands.twitterCMD) {
  console.log("\nLoading twitter");
} else if (userArg.userSelection === commands.spotifyCMD) {
  console.log("\nLoading spotify");
} else if (userArg.userSelection === commands.omdbCMD) {
  console.log("\nLoading omdb");
} else if (userArg.userSelection === commands.meCMD) {
  console.log("\nLoading me");
}
