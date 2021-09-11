module.exports.profile = function(req,res){
    return res.end("<h1>User profile</h1>")
}

module.exports.score = function(req,res){
    return res.end("<h1>Scored points are</h1>")
}

module.exports.likes=function(req,res){
    return res.end("<h1>Liked it</h1>");
}