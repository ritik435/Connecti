module.exports.home = function(req,res){
    return res.end("<h1>Hey Controller is displayed</h1>");

}

module.exports.play =function(req,res){
    return res.end("<p>i am here because of error</p>")
}

module.exports.anime=function(req,res){
    return res.end("<h1>This is a great anime</h1>");
}