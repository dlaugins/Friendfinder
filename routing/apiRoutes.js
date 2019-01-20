// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friendData = require("../app/data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================
function findDiff(friend1, friend2) {
    var totalDiff = 0;
    for (var i = 0; i < friend1.length; i++) {
        var diff = friend1[i] - friend2[i];
        var posdiff = Math.abs(diff);
        totalDiff = totalDiff + posdiff;
    }
    return (totalDiff);
}

function FindClosestFriend(friend) {
    var closestFriend = friendData[0].name;
    var closestDiff = findDiff(friend.scores, friendData[0].scores)
    for (var i = 1; i < friendData.length; i++) {
        var newDif = findDiff(friend.scores, friendData[i].scores)
        if (newDif < closestDiff) {
            closestFriend = friendData[i].name;
            closestDiff = newDif;
        }
    }
    console.log("closest friend returns", closestFriend)
    return (closestFriend)
}

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var closest = FindClosestFriend(req.body);
        friendData.push(req.body);
        console.log("closest friend2", closest)
        res.json(closest);
    });

};

