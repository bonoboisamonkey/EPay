function Provider(name,webSite){
    this.proName=name,
    this.site=webSite
}

let expressbank = new Provider("Expressbank", "https://www.expressbank.az/");
let bakcell = new Provider("Bakcell","https://www.bakcell.com/az");
let narmobile = new Provider("Nar Mobile","https://www.nar.az/");
let azerenerji = new Provider("AzerEnerji","http://www.azerenerji.gov.az/");
let azersu = new Provider("AzerSu", "https://www.azersu.az/");
let ailetv = new Provider("AileTV", "http://aile.tv/");
let embefinans = new Provider("Embafinans", "http://embafinans.az/");

let all_providers = [
    expressbank,
    bakcell,
    narmobile,
    azerenerji,
    azersu,
    ailetv,
    embefinans
]


let features = [
    bank_button ={
        aze: "Bank Xidmətləri",
        eng: "Banking Services",
        rus: "Банковские услуги"
    },
    mobile_button ={
        aze: "Mobil operator",
        eng: "Carrier",
        rus: "оператор мобильной связи"
    },
    utility_button ={    
        aze: "Kamunal Ximətlər",
        eng: "Utilities",
        rus: "коммунальные услуги"
    },
    cable_button={
        aze: "Kabel TV",
        eng: "Cable TV",
        rus: "Кабельное телевидение"
    },
    net_button = {
        aze: "İnternet",
        eng: "Internet",
        rus: "Интернет"
    },
    entertain_button={
        aze: "Əyləncə",
        eng: "Entertainment",
        rus: "веселье"
    }
]

let userG = [
    user_guide={
        aze: "İstifadə qaydaları",
        eng: "Rules of use",
        rus: "Правила использования"
    },
    payment_button={
        aze: "Ödəniş yoxlanılması",
        eng: "Payment check",
        rus: "Платежный чек"
    }
]
