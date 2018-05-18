function by_id(id) {
    return document.getElementById(id);
}

function by_class(name) {
    return document.getElementsByClassName(name);
}

function on_call(element, event, fn) {
    if (typeof element === "string") {
        let ret_element = by_id(element);

        ret_element.addEventListener(event, fn);
        return ret_element;
    }
    else {
        element.addEventListener(event, fn)
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
    if (typeof element === "string") {
        new_element = by_id(element);
    }
    else {
        new_element = element;
    }
    let before = new_element.style[att];
    new_element.style[att] = new_val;
    if (before === new_element.style[att]) {
        new_element.style[att] = new_val + "px";
    }
    else {
        new_element.style[att] = new_val + "px";
    }

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
