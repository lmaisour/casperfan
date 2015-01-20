// Define email and password for fanduel authentication
var email = 'joefrank@sharklasers.com';
var auth = 'passwordpassword';


var casper = require('casper').create();


// Start at twitter.com with the defined twitter id
casper.start('http://www.fanduel.com/p/login#login', function() {

});

casper.then(function() {
// fill in the login form
  this.fillSelectors('form#ccf1', {
  'input[name="email"]': email,
  'input[name="password"]': auth
  }, true);
});

casper.then(function() {

    // Log the new URL
    console.log('just logged in, now going to create game');

});

casper.then(function() {
  // click the create contest link 
  this.click('.create-contest');
  console.log('just clicked the create contest button');

});

casper.then(function() {

    // Log the new URL
    console.log('new location is ' + this.getCurrentUrl());

});

casper.then(function(){
 // check if radio button exists to choose NBA games, if so, click on it
 if (this.exists('#-spsel-nba~ b')) {
 	this.click('#-spsel-nba~ b');
 }
 console.log("successfully clicked NBA games");
});


// unchecking and checking the free option 
casper.then(function(){
 if (this.exists('.entry-fee-option:nth-child(10) .boxed')) {
 	this.click('.entry-fee-option:nth-child(10) .boxed');
 }
});

casper.then(function(){
 if (this.exists('.entry-fee-option:nth-child(10) .boxed')) {
 	this.click('.entry-fee-option:nth-child(10) .boxed');
 	console.log('successfully clicked free play')
 }
});

casper.then(function(){
  //click the create game button
  this.click('.select-team');
  //TODO add a conditional to display successful if create game button value is clicked on webpage, else display different message
  console.log("successfully created game");
  casper.capture("fanduelcasper.png")
});



casper.then(function() {

    // Log the new URL
    this.echo(this.getCurrentUrl());

});


casper.run(function() {

    // Close Casper
    this.exit();
});






