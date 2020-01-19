let proButtons = document.getElementsByClassName("btn");

for( let f=0; f<proButtons.length; f++){
    proButtons[f].addEventListener("click", () => {
        document.location=all_providers[f].site;
    })
}


let langPacket = document.getElementsByClassName("lang-btn");

for (let f of langPacket) {
    f.addEventListener("click", () => {
        let langMassive = document.getElementsByClassName("btn-f");
        let usersMassive = document.getElementsByClassName("users-btn");

        for (let g=0; g<langMassive.length;g++) {
            if (f.innerText == "AZE") {
                langMassive[g].innerText= features[g].aze;
            } else if (f.innerText == "ENG") {
                langMassive[g].innerText= features[g].eng;
            } else if (f.innerText == "RUS") {
                langMassive[g].innerText= features[g].rus;
            }
        }

        for( let k=0; k<usersMassive.length; k++){
            if (f.innerText == "AZE") {
                usersMassive[k].innerText=userG[k].aze;
            } else if (f.innerText == "ENG") {
                usersMassive[k].innerText=userG[k].eng;
            } else if (f.innerText == "RUS") {
                usersMassive[k].innerText=userG[k].rus;
            }
        }
    })
}