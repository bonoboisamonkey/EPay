createAllElements("div", "container", "cont-element");
createAllElements("div", "cont-element", "header");
createAllElements("div", "cont-element", "main");
createAllElements("div", "cont-element", "footer");
createAllElements("img", "header", null, null, "files/logo.jpg", "logo");
createAllElements("input", "header", null, null, null, null, "text", "Xidməti seçin");

createAllElements("div", "main", "providers");
createAllElements("div", "main", "features");

for (let i = 0; i < all_providers.length; i++) {
    createAllElements("button", "providers", "btn", all_providers[i].proName);
}

createAllElements("div", "footer", "lang");
createAllElements("div", "footer", "call", "QAYNAR XƏTT: 123");
createAllElements("div", "footer", "help-desk");

createAllElements("button", "lang", "lang-btn", "AZE", null, null, null, null, "aze");
createAllElements("button", "lang", "lang-btn", "ENG", null, null, null, null, "eng");
createAllElements("button", "lang", "lang-btn", "RUS", null, null, null, null, "rus");

for (let i = 0; i < features.length; i++) {
    createAllElements("button", "features", "btn-f", features[i].aze);
}

for(let i =0;i<userG.length;i++){
    createAllElements("button", "help-desk", "users-btn", userG[i].aze);
}