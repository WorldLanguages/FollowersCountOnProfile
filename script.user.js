// ==UserScript==
// @name         Scratch followers number enabler
// @version      2.0
// @description  Followers number on user profiles
// @author       @World_Languages on Scratch
// @match        https://scratch.mit.edu/users/*
// @exclude      https://scratch.mit.edu/users/*/*/
// ==/UserScript==


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        var request = xmlhttp.responseText;
        if (request != 1.0) {
            var update = confirm('You NEED to update the followers number enabler to make it work. \n\nUpdate? It just takes 10 seconds');
            if (update === true) {
                window.location = "https://github.com/WorldLanguages/FollowersNumberEnabler/blob/master/How%20to%20update.md";}
            if (update === false) {
                stop();}}}}

xmlhttp.open( "GET", 'https://raw.githubusercontent.com/WorldLanguages/FollowersNumberEnabler/master/currentversion.md', true);
xmlhttp.send();






window.addEventListener('load', function () {
    getFollowers();
    getFollowing();
});

















var url = window.location.href;
var user1 = url.substring(30,100);
var username = user1.substring(0, user1.indexOf('/'));

dalength = document.getElementsByClassName("box-head").length;











function getFollowers() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response  = xmlhttp.responseText;
            var find = response.search("<h2>");
            follownum = response.substring(find,find+200).match(/\(([^)]+)\)/)[1];
            var a = '<h4>Followers (' + follownum + ')</h4> <a href="/users/' + username + '/followers/" data-control="viewall">View all</a>';
            document.getElementsByClassName("box-head")[dalength-2].innerHTML = a;}}

    xmlhttp.open('GET', 'https://scratch.mit.edu/users/' + username + '/followers/', true);
    xmlhttp.send();}





function getFollowing() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response  = xmlhttp.responseText;
            var find = response.search("<h2>");
            follownum = response.substring(find,find+200).match(/\(([^)]+)\)/)[1];
            var a = '<h4>Following (' + follownum + ')</h4> <a href="/users/' + username + '/following/" data-control="viewall">View all</a>';
            document.getElementsByClassName("box-head")[dalength-3].innerHTML = a;}}

    xmlhttp.open('GET', 'https://scratch.mit.edu/users/' + username + '/following/', true);
    xmlhttp.send();}
