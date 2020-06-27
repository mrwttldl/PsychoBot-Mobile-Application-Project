var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
const uuidv1 = require('uuid/v1');
var app = express();

var context_msgs = require("./src/context_msgs.js");
var name_extractor = require("./src/name_extractor.js");
var dissase_detector = require("./src/dissases_detector.js");
var context_setter = require("./src/context_setter");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mBe500ksvwyal',
  database : 'ChatBot',
  insecureAuth:true
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});;

var users = [];

var procces_current_context = function(usr , msg , callback){
    console.log("e burda olam artık ama");
    msg = msg.toLowerCase();
    let current_context = usr['context']; 
    if(current_context === "") {
        usr['context'] = "ask_name";
        return callback();
    }

    if(current_context.includes("ask_name")) {
        if(connection.state !== 'disconnected'){
            console.log("ayem here");
            name_extractor.get_name_from_msg(msg,connection , function(row){
                console.log("name has completed");
                if(row.length > 1){
                    usr['name'] = row[0]['name'];
                    usr['context'] = "ask_how_are_you";
                }else{
                    usr['context'] = "ask_name_again";
                }
                callback();
            }); 
        }else{
            console.log("ayem here 2");
            let possible_name = name_extractor.get_name_from_msg(msg,null,null); 
            if(possible_name === false){
                usr['context'] = 'ask_name_again';
            }else{
                usr['name'] = possible_name + "";
                usr['context'] = "ask_how_are_you";
            }
            
            callback();
        }
    }else{
        console.log("ayem here 3");
        let dis = dissase_detector.detect_dissase_from_msg(msg);
        dis = get_largest_disorder(dis); 
        
        usr[dis['name']] += dis['value'];
    
        context_setter.set_next_context(usr, dis);
        callback();
    }
}

var get_largest_disorder = function(dissases){
    let largest_value = dissases[0];
    for(let i = 1 ; i < dissases.length; i++){
        let dis = dissases[i];
        if(dis['value'] > largest_value['value']){
            largest_value = dis;
        }
    }
    console.log(largest_value);
    return largest_value;
}

var get_user = function(id){
    for (let i = 0 ; i < users.length ; i++){
        let u = users[i];
        if(u['id'] === id){
            return u;
        }
    }
    return null;
}

app.get("/save/:id" , function(req , res){
    res.send("TODO : SAVE USERS PROCCESSSS");
});

app.get("/" , function(req , res){
    res.redirect('/auth');
});

app.get("/clear/1234", function (req , res){
    users = [];
    res.send("TEST CLEARD");
});

app.get("/auth" , function(req , res){
    let uid = uuidv1() + "";
    console.log(typeof(uid));
    let exist = get_user(uid);
    if(exist != null){
        console.log("ALSJDASJLD ERROR");
        res.send("alskjdaslkdj ERRORR");
    }

    let user = {
        id:uid,
        name:"",
        unclear:0,
        depresion:0,
        anxiety:0,
        diabetes:0,
        smoking:0,
        drugAddict:0,
        suicide:0,
        context:"",
        extra:""
    };
    users.push(user);

    for(let i = 0 ; i < users.length; i++){
        let u = users[i];
        console.log(u['id']);
    }

    console.log("USER COUT : " + users.length + " user \n" + user["id"]);

    res.send(user);
});

app.get("/chatbot", function(req, res){
    let id = req.query.id + "";
    let msg = req.query.msg;
    console.log("id : " + id);
    console.log(typeof(id));
    console.log("msg: " + msg);
    let usr = get_user(id);
    if(usr == null){
        console.log("No user id with : " + id);
        res.send("No user id with : " + id);
    }

    procces_current_context(usr , msg , function(){
        
        let result = {
            message: context_msgs.get_context_msg(usr),
            suggestion: context_msgs.get_suggestion_msg(usr)
        };
    
        console.log(usr)
        res.send(result)
    });
    
});

app.listen(3000, function(){
    console.log("app started on port 3000");
});