module.exports = {
    get_name_from_msg: function(msg , connection , callback){
        let words = msg.split(/[\s,]+/);
        if(words.length === 0) return false;
        if(connection === null || callback === null){
            let keywords = ["selam" , "merhaba", "ben" , "benim" , "adım"];
            for(let i = 0; i < words.length ; i++){
                let word = words[i];
                let keyword_exist = false;
                for(let j = 0; j < keywords.length ; j++){
                    let keyword = keywords[j];
                    if(word.includes(keyword)){
                        keyword_exist = true;
                        break;
                    }
                }
                if(!keyword_exist){
                    console.log("NAME " + word);
                    return word; // possible name
                }
            }   
            return false;
        }else{
            console.log("create query");
            var Select = 'SELECT name ';
            var From = 'From Names ';
            var Where = 'WHERE ';
            var sql = Select + From + Where;
        
            for(let i = 0 ; i < words.length; i++){
                sql += "name='" + words[i] + "' ";
                if(i != words.length - 1){
                    sql += " or ";
                }else{
               
                }
            }
            console.log(sql);
            connection.query(sql, function(err, rows){
                console.log("query done");
                if(err){
                    console.log(err); 
                }  
                return callback(rows);
            });
        }
    }
    
};
