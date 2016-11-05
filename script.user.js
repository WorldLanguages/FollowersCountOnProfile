// ==UserScript==
// @name         Scratch followers number enabler
// @version      1.0.1
// @description  Followers number on user profiles
// @author       @World_Languages on Scratch
// @match        https://scratch.mit.edu/users/*
// @exclude      https://scratch.mit.edu/users/*/*/
// ==/UserScript==


// Get script updates
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://raw.githubusercontent.com/WorldLanguages/FollowersNumberEnabler/master/currentversion.md', false );
xmlHttp.send( null );
var request = xmlHttp.responseText;

if (request != 1.0) {
    var update = confirm('You NEED to update the followers number enabler to make it work. \n\nUpdate? It just takes 10 seconds');
    if (update === true) {
    window.location = "https://github.com/WorldLanguages/FollowersNumberEnabler/blob/master/How%20to%20update.md";}
    if (update === false) {
    stop();}}
//





// Run
window.onload = function() {
    getFollowing();
getFollowers();};

//















var url = window.location.href;
var user1 = url.substring(30,100);
var user = user1.substring(0, user1.indexOf('/'));

var divtofind = 6;

var html = document.documentElement.innerHTML;
html = html.search("Studios I'm Following");
if (html == -1) {
    divtofind = divtofind-1;}

var html2 = document.documentElement.innerHTML;
html2 = html2.search("Studios I Curate");
if (html2 == -1) {
    divtofind = divtofind-1;}










function getFollowers() {


// Get followers amount
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://scratch.mit.edu/users/' + user + '/followers/', false );
xmlHttp.send( null );
var response  = xmlHttp.responseText;
var find = response.search("Followers");
var find2 = (response.substring(find+10,find+17));
var follownum = find2.replace(/\D/g,'');
//

// Show followers amount
    setTimeout(function () {
var a = '<h4>Followers (' + follownum + ')</h4> <a href="/users/' + user + '/followers/" data-control="viewall">View all</a>';
var b = document.getElementsByClassName("box-head");
b[divtofind].innerHTML = a;
    }, 500);}

//






function getFollowing() {


// Get following amount
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", 'https://scratch.mit.edu/users/' + user + '/following/', false );
xmlHttp.send( null );
var response  = xmlHttp.responseText;
var find = response.search("Following");
var find2 = (response.substring(find+11,find+17));
var follownum = find2.replace(/\D/g,'');
//

// Show following amount
    setTimeout(function () {
var a = '<h4>Following (' + follownum + ')</h4> <a href="/users/' + user + '/following/" data-control="viewall">View all</a>';
var b = document.getElementsByClassName("box-head");
b[divtofind-1].innerHTML = a;
    }, 500);}
//
