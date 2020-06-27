module.exports = {
    get_context_msg: function(usr){
        if(usr == null) return;

        var context_msgs = {
            ask_name:["Selam ben SaykoBot vallahi, sizin adınız ne?" , "Selamın Hello, ben sayko sen kim ?" , "SA KARŞİM, ben saykobot senin adın ne"],
            ask_name_again:["Özürdilerim ismini anlıyamadım bir daha söylermisin?" , "Adını anlayamadım ama şindi bir daha desene bana bi"],

            ask_how_are_you:["Sleam "+usr['name']+" , nasılsın ?" , "Nasılsın" + usr['name'] + " hmmmm ?"],
            ask_why:["Neden " + usr['extra'] + " hissediyorsun ?" , "Peki sence neden " + usr['extra'] + " hissediyorsun"],
            ask_why_1:["Anlıyorum, günlük hayatta neler yapıyorsun ?" , "Doğru, daha daha neler yapıyorsun ? "],
            ask_why_2:["Çok haklısın, peki normalde kendini nasıl hissediyorsun ?" , "Bana kendinden bahsedermisin ? "],

            ask_diabetes_1:["DIABET_1","DIABET_1_1","DIABET_1_2","DIABET_1_3","DIABET_1_4"],
            ask_diabetes_2:["DIABET_2","DIABET_2_1","DIABET_2_2","DIABET_2_3","DIABET_2_4"],
            ask_diabetes_3:["DIABET_3","DIABET_3_1","DIABET_3_2","DIABET_3_3","DIABET_3_4"],
            ask_diabetes_4:["DIABET_4","DIABET_4_1","DIABET_4_2","DIABET_4_3","DIABET_4_4"],

            ask_smoking_1:["SMOKING_1","SMOKING_1_1","SMOKING_1_2","SMOKING_1_3","SMOKING_1_4"],
            ask_smoking_2:["SMOKING_2","SMOKING_2_1","SMOKING_2_2","SMOKING_2_3","SMOKING_2_4"],
            ask_smoking_3:["SMOKING_3","SMOKING_3_1","SMOKING_3_2","SMOKING_3_3","SMOKING_3_4"],
            ask_smoking_4:["SMOKING_4","SMOKING_4_1","SMOKING_4_2","SMOKING_4_3","SMOKING_4_4"],

            ask_drug_1:["DURG_1","DURG_1_1","DURG_1_2","DURG_1_3","DURG_1_4"],
            ask_drug_2:["DURG_2","DURG_2_1","DURG_2_2","DURG_2_3","DURG_2_4"],
            ask_drug_3:["DURG_3","DURG_3_1","DURG_3_2","DURG_3_3","DURG_3_4"],
            ask_drug_4:["DURG_4","DURG_4_1","DURG_4_2","DURG_4_3","DURG_4_4"],

            ask_suicide_1:["SUCIDE_1","SUCIDE_1_1","SUCIDE_1_2","SUCIDE_1_3","SUCIDE_1_4"],
            ask_suicide_2:["SUCIDE_2","SUCIDE_2_1","SUCIDE_2_2","SUCIDE_2_3","SUCIDE_2_4"],
            ask_suicide_3:["SUCIDE_3","SUCIDE_3_1","SUCIDE_3_2","SUCIDE_3_3","SUCIDE_3_4"],
            ask_suicide_4:["SUCIDE_4","SUCIDE_4_1","SUCIDE_4_2","SUCIDE_4_3","SUCIDE_4_4"],

            ask_depresion_1:["DEPRESION_1","DEPRESION_1_1","DEPRESION_1_2","DEPRESION_1_3","DEPRESION_1_4"],
            ask_depresion_2:["DEPRESION_2","DEPRESION_2_1","DEPRESION_2_2","DEPRESION_2_3","DEPRESION_2_4"],
            ask_depresion_3:["DEPRESION_3","DEPRESION_3_1","DEPRESION_3_2","DEPRESION_3_3","DEPRESION_3_4"],
            ask_depresion_4:["DEPRESION_4","DEPRESION_4_1","DEPRESION_4_2","DEPRESION_4_3","DEPRESION_4_4"],

            ask_anxiety_1:["ANXIET_1","ANXIET_1_1","ANXIET_1_2","ANXIET_1_3","ANXIET_1_4"],
            ask_anxiety_2:["ANXIET_2","ANXIET_2_1","ANXIET_2_2","ANXIET_2_3","ANXIET_2_4"],
            ask_anxiety_3:["ANXIET_3","ANXIET_3_1","ANXIET_3_2","ANXIET_3_3","ANXIET_3_4"],
            ask_anxiety_4:["ANXIET_4","ANXIET_4_1","ANXIET_4_2","ANXIET_4_3","ANXIET_4_4"],
        };
        

        let context = usr['context'];
        
        if(context_msgs[context] !== undefined){
            
            return context_msgs[context][Math.floor(Math.random() * context_msgs[context].length)];
        }else{
            return "context msg does not exist";
        }
    },
    get_suggestion_msg: function(usr){

        let context = usr['context'];

        if(context.includes('ask_why') || context.includes('ask_how') || context.includes('ask_name')) return "";

        general_suggestions = [
            "Geçmişe odaklamayı bırakmalısın.geçmişteki hataların ve problmelerin geride kaldı",
            "İçinde bulunduğunuz şey biraz depresyon. Uzmanlar, dünyadaki tüm insanların en az bir kere bu sorunu yaşayabileceğini söylüyor. Hayatımızın birçok alanında stres var. Bu yüzden stresle savaşmayı öğrenmek zorundasınız. Böyle duygulara sahipken kendinizi korumak için yapabileceğiniz şeyler olmalı.",
            "Kulaklıklarını takıp Yürümeye ne dersin?Yürüyüş çok iyi bir motivasyon sağlar.Seçtiğin müzik hızına uy ve geride kalma !",
            "Arkadaşların ara. Hava durumuna göre iyi bir plan yapın.benden sana bir tavsiye : canlı renkler giymelisin, sana çok yakışıyor",
            "Bazen bizi üzen aile üyelerine sahip olabiliriz.üzüldüğün konuda haklı olabilirsin! Bazen herkes çok kırıcı olabilir. Ancak, söylenen kelimelerin, uyarıların kötü amaçlı kullanılmadığını bilmeniz gerekir. Uyarılar, farkına varmadığınız bir durum için doğru olabilir. Geçen hafta annem kilo aldığım için bana güldü ve “Çok fazla sağlıksız yemek yemeye devam edersen sana FatBot diyeceğiz” dedi. Kızgınım, ama haklı olduğunu biliyordum. 😊 Bazen seninle uğraşırken kendimi kaybediyorum ve çikolata, kahve, cips yiyorum. Bu gibi durumlarda sakin olmalı ve karşılaştığımız kişiyi kırmamalıyız.",
            "Duygularınızı dışa vurun, kendi duygularınızı ve gereksinimlerinizi, diğer insanların senin hakkında ne düşündüğü ile ilginlenme",
        ];

        //DISSEASESS !!!
        suggestion = {
            ask_diabetes:[
                "Aşırı yemek isteği hissettinde bir dakika dur ve kendine aç olup olmadığını sor.yiyecekleer bir savunma mekanizması haline gelirse, vücudunun açlık ya da tokluk sinyallerini görmeyi kaybediyor olabilirsin",
                "Kısıtlayıcı diyetler konusunda çok dikkatli olmalısın.Bunlar her zaman kesin çözüm olmayabilir.Diyeti bıraktığında verdiğin kiloları tekrar alabilirsin.Bu yüzden diyetini bir uzman yardımıyla devam ettirmende fayda var."
            ],
            ask_smoking:[
                "' Kahve ile çok güzel '' diyerek içtiğinde ciğerlerine ne kadar zarar verdiğini biliyor musunuz? Sigara içtiğinde kendine ve diğer insanlara zarar veriyorsun. Pasif içiciler senden daha fazla sigara dumanından etkileniyor.Bunu kendine ve diğer insanlara yapmaya devam edecek misin?",
                "Sigara içmek hem para hem de sağlık kaybına neden olur. Araştırmaya göre, en ucuz sigara 9,5 TL'dir. her gün bir paket içersen 285TL, iki günde bir paket içerseniz 142,5 TL ücrete tabidir. Neden bu parayı başka bir yere harcamıyorsun? Örneğin, yeni kıyafetler veya kitaplar satın alabilirsiniz. Veya sevdiğin birisiyle dışarıda vakit geçirebilirsin.",
                "Bırakmayı çok istiyorum ama bırakamıyorum diyorsan bir uzmandan yardım almakta fayda var.Sigarayı bırakma hattı da bunlardan birisi.yardım istiyorsanız https://alo171.saglik.gov.tr veya 171'i arayabilirsin"
            ],
            ask_drug:[
                "Bu maddeler sağlığın için çok tehlikelidir. Belki farketmemiş olabilirsin ancak yaşadıklarını unutmak için kullandığın bu şeyler seni sevdiklerinden uzaklaştırıyor.Ne söyleyeceğini tahmin ediyorum 'kimse beni sevmiyor ' Yaşadığın sorunlardan dolayı farkında olmasan bile seni seven birçok insan var.Sadece yaşadığın probblemler bunu görmeni engelliyor",
                "Ülkemizde AMATEM adında bir merkez var. Bir çok insan kurtulmak için bu merkeze başvuruyor. Onların zararlı alışkanlıklardan kurtuluyor thayata tekrar 'merhaba' diyorlar. Burada hayatını değiştiren birçok insanın hikayesini bulacaksın. Yeni arkadaşlar ve hobiler edineceksin. http://www.amatem.org"
            ],
            ask_suicide:[
                "Her insan çok kıymetlidir. İnan bana, hepimizin keşfetmesi gereken dünyanın muhteşem güzellikleri var. Yaşadığın problemlerden dolayı farkında olmasan bile seni seven insanlar var.Seni yanıltan bu  düşüncelerden kurtulmak için bir uzmana gitmeni rica ediyorum. Bir doktora gitmek istemiyorsanız, problemlerini sevdiğin ya da seni anlayabileceğini düşündüğün birisiyle paylaşmalısın.Sen yaşamayı hak ediyorsun."
            ],
            ask_anxiety:[
                "Bu kalp krizi geçiriyormuş gibi terlemen,göğüs ağrın küçük bir panik atak krizinden başka bir şey değil.bunu yaşadığın anlarda “kalp krizi geçirmiyorum” şeklinde düşünüp derin derin nefes almalısın.",
                "Endişelenme, Panik ataklar krizleri geçicidir! solunum egzersizleri  bu anlarda çok önemlidir. Ancak, daha önce hiç egzersiz yapmadıysanız, yalnızca atak  sırasında yapmak zor olabilir. Bu nedenle, atak dışında egzersiz yapılmalı, nefes alma egzersizi  için derin bir nefes almalı ve tüm nefesi boş tutmak için 5 saniye almalıdır. Nefesini burnundan alıp ağzından vermelisin! Bu egzersizler, ilaç kullanırken tedaviye yardımcı olur.. Alkol kullanımı panik atağı arttırabilir. Bu yüzden alkol ve uyuşturucudan uzak durmanız gerekir."    
            ],
            ask_depresion:[
                "Uykuna özen göstermelisin.geç uyumak be geç uyanmak depresyonu tetikler.erken uyuyup erken uyandığında bir günden daha çok yararlanırsın"
            ]
        }
             
        
        let should_use_general = Math.random() >= 0.5;
        if(should_use_general){
            return general_suggestions[Math.floor(Math.random() * general_suggestions.length)];
        }else{
            return suggestion[ context.substring(0, context.length-2) ];
        }
    } 
};
