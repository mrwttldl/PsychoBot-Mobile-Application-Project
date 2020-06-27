var keyword = require("./keyword.js");

module.exports = {
    detect_dissase_from_msg: function(msg){
        let detected_diabetes = {
            name:"diabetes",
            detected_words: keyword.get_diabetes_keyword(msg),
            value:0
        };
        
        let detected_smoking = {
            name:"smoking",
            detected_words: keyword.get_smoking_keyword(msg),
            value:0
        };
        
        let detected_drugAddict = {
            name:"drugAddict",
            detected_words: keyword.get_drugAddict_keyword(msg),
            value:0
        };
        
        let detected_suicide = {
            name:"suicide",
            detected_words: keyword.get_suicide_keyword(msg),
            value:0
        };
        
        let detected_depresion = {
            name:"depresion",
            detected_words: keyword.get_depresion_keyword(msg),
            value:0
        };
        
        let detected_anxiety = {
            name:"anxiety",
            detected_words: keyword.get_anxiety_keyword(msg),
            value:0
        };
        
        
        let detected_unclear = {
            name:"unclear",
            detected_words: keyword.get_unclear_keyword(msg),
            value:0
        };
        
        for(let i = 0 ; i < detected_unclear['detected_words'].length ; i++){
            detected_unclear['value'] += keyword.unclear_keywords[
                detected_unclear['detected_words'][i]
            ];
        }
        
        for(let i = 0 ; i < detected_diabetes['detected_words'].length ; i++){
            detected_diabetes['value'] += keyword.diabetes_keyword_values[
                detected_diabetes['detected_words'][i]
            ];
        }
        
        for(let i = 0 ; i < detected_smoking['detected_words'].length ; i++){
            detected_smoking['value'] += keyword.smoking_keyword_values[
                detected_smoking['detected_words'][i]
            ];
        }

        for(let i = 0 ; i < detected_drugAddict['detected_words'].length ; i++){
            detected_drugAddict['value'] += keyword.drugAddict_keyword_values[
                detected_drugAddict['detected_words'][i]
            ];
        }
        
        for(let i = 0 ; i < detected_suicide['detected_words'].length ; i++){
            detected_suicide['value'] += keyword.suicide_keyword_values[
                detected_suicide['detected_words'][i]
            ];
        }
        
        for(let i = 0 ; i < detected_depresion['detected_words'].length ; i++){
            detected_depresion['value'] += keyword.depresion_keyword_values[
                detected_depresion['detected_words'][i]
            ];
        }
        
        for(let i = 0 ; i < detected_anxiety['detected_words'].length ; i++){
            detected_anxiety['value'] += keyword.anxiety_keyword_values[
                detected_anxiety['detected_words'][i]
            ];
        }
        
        let result = []
        result.push(detected_depresion);
        result.push(detected_anxiety);
        result.push(detected_suicide);
        result.push(detected_drugAddict);
        result.push(detected_smoking);
        result.push(detected_diabetes);
        result.push(detected_unclear);
        return result;
    }
};