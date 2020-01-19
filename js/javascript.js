let divC = document.createElement("div");
divC.className = "container";
document.body.appendChild(divC);

function createAllElements(tagName, where2add, className = null, innerText = null, src = null,
    alt = null, type = null, placeholder = null, id = null) {
    let element = document.createElement(tagName);
    if (className != null) {
        element.className = className;
    }

    if (src != null) {
        element.src = src;
    }
    if (alt != null) {
        element.alt = alt;
    }
    if (type != null) {
        element.type = type;
    }
    if (placeholder != null) {
        element.placeholder = placeholder;
    }
    if (innerText != null) {
        element.innerText = innerText;
    }
    if (id != null) {
        element.id = id;
    }
    document.getElementsByClassName(where2add)[0].appendChild(element);
}

