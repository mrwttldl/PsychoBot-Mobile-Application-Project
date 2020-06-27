module.exports = {
    get_diabetes_keyword: function(str){
        let result = []
        if(str.includes("kilo")){
            result.push("kilo");
        }
        if(str.includes("şişman")){
            result.push("şişman");
        }
        if(str.includes("zayıf")){
            result.push("zayıf");
        }
        if(str.includes("fast food")){
            result.push("fast_food");
        }
        if(str.includes("mide bulantısı")){
            result.push ("bulantı");
        }
        if(str.includes("aşırı")){
            result.push ("aşırı");
        }
        if(str.includes("aç")){
            result.push ("aç");
        }
        if(str.includes("yemek")){
            result.push ("yemek");
        } 
        if(str.includes("cips")){
            result.push ("cips");
        } 
        if(str.includes("çiko")){
            result.push ("çikolata");
        } 
        if(str.includes("kola")){
            result.push ("kola");
        }
        if(str.includes("abur cubur")){
            result.push ("abur");
        }

        return result;
    },
    get_unclear_keyword: function(str){
        let result = []
        if(str.includes("kötü")){
            result.push("kötü");
        }
        if(str.includes("iyi")){
            result.push("iyi");
        }
        if(str.includes("evet")){
            result.push("evet");
        }
        if(str.includes("hayır")){
            result.push("hayır");
        }
        if(str.includes("mutlu")){
            result.push ("mutlu");
        }
        if(str.includes("mutsuz")){
            result.push ("mutsuz");
        }
        if(str.includes("yalnız")){
            result.push ("yalnız");
        }
        if(str.includes("yanlız")){
            result.push ("yalnız");
        } 
        if(str.includes("var")){
            result.push ("var");
        } 
        if(str.includes("yok")){
            result.push ("yok");
        } 
        if(str.includes("kaygı")){
            result.push("kaygım");
        }
        return result;
    },
    get_smoking_keyword: function(str){
        let result = []
        if(str.includes("sigara")){
            result.push("sigara");
        }
        if(str.includes("bağım")){
            result.push("bağımlı");
        }
        if(str.includes("zarar")){
            result.push("zararlı");
        }
        if(str.includes("içi")){
            result.push("içiyorum");
        }
        if(str.includes("kahve")){
            result.push ("kahve");
        }
        if(str.includes("nikotin")){
            result.push ("nikotin");
        }
        if(str.includes("kanser")){
            result.push ("kanser");
        }
        if(str.includes("akciğer")){
            result.push ("akciğer");
        } 
        if(str.includes("yemek")){
            result.push ("yemek");
        } 
        if(str.includes("kilo")){
            result.push ("kilo");
        } 
        if(str.includes("sakız")){
            result.push ("sakız");
        }
        if(str.includes("kafein")){
            result.push ("kafein");
        } 
        if(str.includes("bırakmak")){
            result.push ("bırakmak");
        } 
        return result;
    },
    get_smoking_keyword: function(str){
        let result = []
        if(str.includes("sigara")){
            result.push("sigara");
        }
        if(str.includes("bağım")){
            result.push("bağımlı");
        }
        if(str.includes("zarar")){
            result.push("zararlı");
        }
        if(str.includes("içi")){
            result.push("içiyorum");
        }
        if(str.includes("kahve")){
            result.push ("kahve");
        }
        if(str.includes("nikotin")){
            result.push ("nikotin");
        }
        if(str.includes("kanser")){
            result.push ("kanser");
        }
        if(str.includes("akciğer")){
            result.push ("akciğer");
        } 
        if(str.includes("yemek")){
            result.push ("yemek");
        } 
        if(str.includes("kilo")){
            result.push ("kilo");
        } 
        if(str.includes("sakız")){
            result.push ("sakız");
        }
        if(str.includes("kafein")){
            result.push ("kafein");
        } 
        if(str.includes("bırakmak")){
            result.push ("bırakmak");
        } 
        return result;
    },
    get_drugAddict_keyword: function(str){
        let result = []
        if(str.includes("ilaç")){
            result.push("ilaç");
        }
        if(str.includes("eroin")){
            result.push("eroin");
        }
        if(str.includes("kokain")){
            result.push("kokain");
        }
        if(str.includes("uyuş")){
            result.push("uyuşturucu");
        }
        if(str.includes("problem")){
            result.push ("problem");
        }
        if(str.includes("bağım")){
            result.push ("bağımlı");
        }
        if(str.includes("bırak")){
            result.push ("bırakamıyorum");
        }
        if(str.includes("zarar")){
            result.push ("zararlı");
        } 
        if(str.includes("kullan")){
            result.push ("kullanıyorum");
        } 
        if(str.includes("psikoloji")){
            result.push ("psikolojik");
        } 
        if(str.includes("arkadaş")){
            result.push ("arkadaş");
        }
        if(str.includes("tedavi")){
            result.push ("tedavi");
        } 
        if(str.includes("yalnız")){
            result.push ("yalnız");
        } 
        if(str.includes("yanlız")){
            result.push ("yalnız");
        } 
        if(str.includes("doz")){
            result.push ("doz");
        } 
        if(str.includes("madde")){
            result.push ("madde");
        } 
        if(str.includes("alkol")){
            result.push ("alkol");
        } 
        if(str.includes("bonzai")){
            result.push ("bonzai");
        } 
        if(str.includes("amfetamin")){
            result.push ("amfetamin");
        } 
        if(str.includes("metamfetamin")){
            result.push ("metamfetamin");
        } 
        if(str.includes("halisülasyon")){
            result.push ("hallusinasyon");
        }
        if(str.includes("hallusinasyon")){
            result.push ("hallusinasyon");
        }
        return result;
    },
    get_suicide_keyword: function(str){
        let result = []
        if(str.includes("öl")){
            result.push("ölmek");
        }
        if(str.includes("ilaç")){
            result.push("ilaç");
        }
        if(str.includes("nefret")){
            result.push("nefret");
        }
        if(str.includes("sevgi")){
            result.push("sevgili");
        }
        if(str.includes("ayrı")){
            result.push ("ayrılık");
        }
        if(str.includes("tepki")){
            result.push ("tepki");
        }
        if(str.includes("değer")){
            result.push ("değersiz");
        }
        if(str.includes("yaşa")){
            result.push ("yaşamak");
        } 
        if(str.includes("başarısız")){
            result.push ("başarısız");
        } 
        if(str.includes("hiçkimse")){
            result.push ("hiçkimse");
        } 
        if(str.includes("sevmiyor")){
            result.push ("sevmiyor");
        }
        if(str.includes("çaba")){
            result.push ("çaba");
        } 
        if(str.includes("sorun")){
            result.push ("sorun");
        } 
        if(str.includes("problem")){
            result.push ("problem");
        } 
        if(str.includes("kaybet")){
            result.push ("kaybetmek");
        } 
        if(str.includes("bık")){
            result.push ("bıkmak");
        } 
        if(str.includes("yeter")){
            result.push ("yetersiz");
        } 
        if(str.includes("yalnız")){
            result.push ("yalnızlık");
        } 
        if(str.includes("ağla")){
            result.push ("ağlamak");
        } 
        if(str.includes("ölüm")){
            result.push ("ölüm");
        } 
        if(str.includes("intihar")){
            result.push ("intihar");
        } 
        if(str.includes("teşeb")){
            result.push ("teşebbüs");
        } 
        if(str.includes("anksi")){
            result.push ("anksiyete");
        } 
        if(str.includes("depres")){
            result.push ("depresyon");
        } 
        if(str.includes("ceza")){
            result.push ("ceza");
        } 
        if(str.includes("suçla")){
            result.push ("suçladım");
        }
        if(str.includes("umut")){
            result.push ("umutsuzluk");
        } 
        if(str.includes("kork")){
            result.push ("korktum");
        } 

        return result;
    },
    get_depresion_keyword: function(str){
        let result = []
        if(str.includes("uyku")){
            result.push("uykusuz");
        }
        if(str.includes("yorgun")){
            result.push("yorgun");
        }
        if(str.includes("yaşa")){
            result.push("yaşamak");
        }
        if(str.includes("başarı")){
            result.push("başarısız");
        }
        if(str.includes("intihar")){
            result.push ("intihar");
        }
        if(str.includes("teşeb")){
            result.push ("teşebbüs");
        }
        if(str.includes("değer")){
            result.push ("değersiz");
        }
        if(str.includes("sevgi")){
            result.push ("sevgi");
        } 
        if(str.includes("ayrı")){
            result.push ("ayrılık");
        } 
        if(str.includes("özgüven")){
            result.push ("özgüven");
        } 
        if(str.includes("bitkin")){
            result.push ("bitkin");
        }
        if(str.includes("üzü")){
            result.push ("üzgün");
        } 
        if(str.includes("üzül")){
            result.push ("üzgün");
        } 
        if(str.includes("ağla")){
            result.push ("ağla");
        } 
        if(str.includes("huzur")){
            result.push ("huzursuz");
        } 
        if(str.includes("kötü")){
            result.push ("kötü");
        } 
        if(str.includes("psikoloji")){
            result.push ("psikoloji");
        } 
        if(str.includes("kilo")){
            result.push ("kilo");
        } 
        if(str.includes("sevgi")){
            result.push ("sevgi");
        } 
        if(str.includes("mutsuz")){
            result.push ("mutsuz");
        } 
        if(str.includes("endişe")){
            result.push ("endişe");
        } 
        if(str.includes("hiçkimse")){
            result.push ("hiçkimse");
        } 
        if(str.includes("hiçbirşey")){
            result.push ("hiçbirşey");
        } 
        if(str.includes("kaygı")){
            result.push ("kaygı");
        } 
        if(str.includes("mutlu")){
            result.push ("mutlu");
        } 
        if(str.includes("yalnız")){
            result.push ("yalnız");
        }
        if(str.includes("depres")){
            result.push ("depresyon");
        } 
        if(str.includes("stres")){
            result.push ("stres");
        } 
        if(str.includes("yetersiz")){
            result.push ("yetersiz");
        } 
        return result;
    },
    get_anxiety_keyword: function(str){
        let result = []
        if(str.includes("uyku")){
            result.push("uykusuz");
        }
        if(str.includes("korku")){
            result.push("korku");
        }
        if(str.includes("hiçkimse")){
            result.push("hiçkimse");
        }
        if(str.includes("hiçbirşey")){
            result.push("hiçbirşey");
        }
        if(str.includes("kaygı")){
            result.push("kaygı");
        }
        if(str.includes("mutsuz")){
            result.push("mutsuz");
        }
        if(str.includes("stres")){
            result.push("stres");
        }
        if(str.includes("ter")){
            result.push("terleme");
        }
        if(str.includes("çarp")){
            result.push("çarpıntı");
        }
        if(str.includes("ayrı")){
            result.push("ayrılık");
        }

        return result;
    },
    unclear_keywords: {
        kötü:1, 
        hissediyorum:1, 
        hisset:1,
        iyi:1, 
        hissetmiyorum:1, 
        lanet:1,
        mutsuz:1,
        mutlu:1, 
        yalnız:1, 
        var:1, 
        kaygılıyım:1,
        kaygım:1,
    },
    unclear_keywords_answers: {
        kötü:"kötüsün",
        iyi:"iyi hissetmiyorusun",
        hissetmiyorum:"iyi hissetmiyorusun",
        mutsuz:"mutsuzsun",
        yalnız:"yalnızsın",
        kaygılıyım:"kaygılı",
        kaygım:"kaygılı"
    },
    diabetes_keyword_values: {
        kilo:0.9,
        şişman:1,
        zayıf:0.9,
        diyet:1,
        fast_food:1,
        bulantı:0.6,
        aşırı:0.8,
        aç:0.9,
        yemek:0.8,
        cips:1,
        çikolata:1,
        kola:1,
        abur:1,
        cubur:1
    },
    smoking_keyword_values: {
        sigara:0.9,
        bağımlı:0.8,
        bırak:0.9,
        zarar:0.9,
        içiyorum:0.8,
        kahve:0.8,
        nikotin:1,
        kanser:0.9,
        akciğer:0.9,
        yemek:0.7,
        kilo:0.7,
        sakız:0.9,
        sağlık:0.7,
        kafein:0.8,
        bırakmak:0.9
    },
    drugAddict_keyword_values: {
        ilaç:0.8,
        eroin:1,
        kokain:1,
        uyuşturucu:1,
        problem:0.8,
        bağımlı:0.8,
        bırakamıyorum:0.9,
        zararlı:0.9,
        esrar:1,
        kullanıyorum:0.9,
        psikolojik:0.8,
        arkadaş:0.8,
        tedavi:0.9,
        çaba:0.9,
        yalnız:0.9,
        doz:1,
        madde:1,
        alkol:0.9,
        bonzai:1,
        amfetamin:1,
        metamfetamin:1,
        hallusinasyon:1
    },
    suicide_keyword_values: {
        ölmek:0.9,
        ilaç:0.9,
        nefret:0.9,
        sevgili:0.9,
        ayrılık:0.9,
        tepki:0.9,
        değersiz:0.9,
        yaşamak:0.9,
        başarısız:0.9,
        hiçkimse:0.9,
        sevmiyor:0.9,
        çaba:0.8,
        sorun:0.9,
        problem:0.9,
        kaybetmek:0.9,
        bıkmak:0.9,
        yetersiz:0.9,
        yalnızlık:0.8,
        ağlamak:0.7,
        ölüm:0.9,
        intihar:1,
        teşebbüs:0.9,
        anksiyete:0.9,
        depresyon:0.9,
        ceza:0.9,
        suçladım:0.9,
        umutsuzluk:0.9,
        korktum:0.9
    },
    depresion_keyword_values: {
        uykusuz:0.9,
        yorgun:0.9,
        yaşamak:0.9,
        başarısız:0.9,
        intihar:0.8,
        teşebbüs:0.9,
        değersiz:0.9,
        sevgi:0.9,
        ayrılık:0.9,
        özgüven:0.9,
        bitkin:0.9,
        üzgün:0.9,
        ağla:0.95,
        huzursuz:0.9,
        kötü:0.9,
        psikoloji:0.9,
        kilo:0.7,
        sevgi:0.9,
        mutsuz:0.9,
        endişe:0.9,
        hiçkimse:0.9,
        hiçbirşey:0.9,
        kaygı:0.9,
        mutlu:0.6,
        yalnız:0.9,
        depresyon:1,
        stres:0.9,
        yetersiz:0.8
    },
    anxiety_keyword_values: {
        uykusuz:0.9,
        korku:0.7,
        hiçkimse:0.9,
        hiçbirşey:0.9,
        kaygı:0.9,
        mutsuz:0.9,
        stres:0.9,
        terleme:0.9,
        çarpıntı:0.95,
        ayrılık:0.9
    }
};