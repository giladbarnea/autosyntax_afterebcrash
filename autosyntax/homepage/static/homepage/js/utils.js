function by_id(id) {
    return document.getElementById(id);
}

function by_class(name) {
    return document.getElementsByClassName(name);
}

function scroll(target) {

}

function element_or_by_id(element) {
    if (typeof element === "string") {
        return by_id(element);
    }
    else {
        return element;
    }
}

function on_call(element, event, fn) {
    let ret = element_or_by_id(element);
    ret.addEventListener(event, fn);
    return ret;

}

function set_style_to_collection(collection, att, val) {
    let new_collection;
    if (typeof collection === "string") {
        new_collection = by_class(collection);
    }
    else {
        new_collection = collection;
    }
    for (let i = 0; i < new_collection.length; i++) {
        set_style(new_collection[i], att, val);
    }
}

function set_style(element, att, val) {
    let new_val;
    if (typeof val === "number") {
        new_val = val.toString();
    }
    else {
        new_val = val;
    }

    let new_element;
    new_element = element_or_by_id(element);
  

    new_element.style[att] = new_val + "px";

}

function increase_opacity(element, limit) {
    function _increase_opacity() {
        let current_opacity = element.style.opacity;

        if (current_opacity === "")
            current_opacity = 0;


        let new_opacity = parseFloat(current_opacity) + 0.07;
        if (new_opacity >= limit - 0.04) {
            element.style.opacity = limit;
            clearInterval(timer);
        }
        else {
            element.style.opacity = new_opacity.toString();
        }
    }

    let timer = setInterval(_increase_opacity, 20);

}

function decrease_opacity(element, limit) {

    function _decrease_opacity() {
        let current_opacity = element.style.opacity;
        if (current_opacity === "") {
            current_opacity = 0;
        }

        let new_opacity = parseFloat(current_opacity) - 0.15;
        if (new_opacity <= limit + 0.04) {
            element.style.opacity = limit;
            clearInterval(timer);
        }
        else {
            element.style.opacity = new_opacity.toString();
        }
    }

    let timer = setInterval(_decrease_opacity, 20);

}
