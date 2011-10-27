function login(username, password) {
    console.log(arguments);
    
    var users = {
        peterwooley: "Freedom",
        iphone: "1",
        williamshatner: "CaptainKirk"
    };
    
    var authenticated = false;
    
    if(users[username] === password) {
        authenticated = true;
    }
    
    return authenticated;
};

var smart = {};

smart.add = function() {
    var sum = 0;
    
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    
    return sum;
}

var pwooley = {};

pwooley.add = function() {
    return 0;
}

console.log(stupid.add(1,2,3,4,5,6,7,8,9,10,11,12,13));

document.write()





