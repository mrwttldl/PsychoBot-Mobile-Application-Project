var keyword = require("./keyword.js");

module.exports = {
    set_next_context: function(usr, dis){
        if(dis['name'] === "unclear"){
            if(!usr['context'].includes("ask_why")) usr['context'] = "ask_why";
            else if(usr['context'] === "ask_why")   usr['context'] = "ask_why_1";
            else if(usr['context'] === "ask_why_1") usr['context'] = "ask_why_2";
            else if(usr['context'] === "ask_why_2") usr['context'] = "ask_why";
            
            usr['extra'] = keyword.unclear_keywords_answers[dis['detected_words'][0]];
        }else if(dis['name'] === "diabetes"){
            if(!usr['context'].includes("ask_diabetes")) usr['context'] = "ask_diabetes_1";
            else if(usr['context'] === "ask_diabetes_1") usr['context'] = "ask_diabetes_2";
            else if(usr['context'] === "ask_diabetes_2") usr['context'] = "ask_diabetes_3";
            else if(usr['context'] === "ask_diabetes_3") usr['context'] = "ask_diabetes_4";
            else if(usr['context'] === "ask_diabetes_4") usr['context'] = "ask_diabetes_1";
        

        }else if(dis['name'] === "smoking"){
            if(!usr['context'].includes("ask_smoking")) usr['context'] = "ask_smoking_1";
            else if(usr['context'] === "ask_smoking_1")  usr['context'] = "ask_smoking_2";
            else if(usr['context'] === "ask_smoking_2")  usr['context'] = "ask_smoking_3";
            else if(usr['context'] === "ask_smoking_3")  usr['context'] = "ask_smoking_4";
            else if(usr['context'] === "ask_smoking_4")  usr['context'] = "ask_smoking_1";
            
        }else if(dis['name'] === "drugAddict"){
            if(!usr['context'].includes("ask_drug")) usr['context'] = "ask_drug_1";
            else if(usr['context'] === "ask_drug_1")  usr['context'] = "ask_drug_2";
            else if(usr['context'] === "ask_drug_2")  usr['context'] = "ask_drug_3";
            else if(usr['context'] === "ask_drug_3")  usr['context'] = "ask_drug_4";
            else if(usr['context'] === "ask_drug_4")  usr['context'] = "ask_drug_1";
            
        }else if(dis['name'] === "suicide"){
            if(!usr['context'].includes("ask_suicide")) usr['context'] = "ask_suicide_1";
            else if(usr['context'] === "ask_suicide_1")  usr['context'] = "ask_suicide_2";
            else if(usr['context'] === "ask_suicide_2")  usr['context'] = "ask_suicide_3";
            else if(usr['context'] === "ask_suicide_3")  usr['context'] = "ask_suicide_4";
            else if(usr['context'] === "ask_suicide_4")  usr['context'] = "ask_suicide_1";
            
        }else if(dis['name'] === "depresion"){
            if(!usr['context'].includes("ask_depresion"))  usr['context'] = "ask_depresion_1";
            else if(usr['context'] === "ask_depresion_1")  usr['context'] = "ask_depresion_2";
            else if(usr['context'] === "ask_depresion_2")  usr['context'] = "ask_depresion_3";
            else if(usr['context'] === "ask_depresion_3")  usr['context'] = "ask_depresion_4";
            else if(usr['context'] === "ask_depresion_4")  usr['context'] = "ask_depresion_1";
            
        }else if(dis['name'] === "anxiety"){
            if(!usr['context'].includes("ask_anxiety")) usr['context'] = "ask_anxiety_1";
            else if(usr['context'] === "ask_anxiety_1")  usr['context'] = "ask_anxiety_2";
            else if(usr['context'] === "ask_anxiety_2")  usr['context'] = "ask_anxiety_3";
            else if(usr['context'] === "ask_anxiety_3")  usr['context'] = "ask_anxiety_4";
            else if(usr['context'] === "ask_anxiety_4")  usr['context'] = "ask_anxiety_1";
            
        }
    }
};