function by_id(id) {
    return document.getElementById(id);
}

function by_class(name) {
    return document.getElementsByClassName(name);
}

function scroll(target) {

}

function element_or_by_fn(element, fn) {
    if (typeof element === "string")
        return fn(element);

    else
        return element;

}


function on_call(element, event, fn) {
    let ret = element_or_by_fn(element, by_id);
    ret.addEventListener(event, fn);
    return ret;

}

function set_style_to_collection(collection, att, val) {
    let new_collection = element_or_by_fn(collection, by_class);

    for (let i = 0; i < new_collection.length; i++)
        set_style(new_collection[i], att, val);

}

function number_to_string(val) {
    if (typeof val === "number")
        return val.toString();

    else
        return val;
}

function set_style(element, att, val) {
    element_or_by_fn(element, by_id)
        .style[att] = number_to_string(val) + "px";

}

function fade_opacity(element, limit, factor = 1, up = true) {
    function _fade_opacity() {
        let current_opacity = element.style.opacity;

        if (current_opacity === "")
            current_opacity = 0;

        let direction = up ? 1 : -1;
        let condition;
        if (up) {
            condition = () => new_opacity >= limit - 0.04;
        }
        else {
            condition = () => new_opacity <= limit + 0.04;
        }
        let new_opacity = parseFloat(current_opacity) + (direction * 0.07);
        // if (new_opacity >= limit - 0.04) {
        if (condition) {
            element.style.opacity = limit;
            clearInterval(timer);
        }
        else {
            element.style.opacity = new_opacity.toString();
        }
    }

    let timer = setInterval(_fade_opacity, 20 * factor);
}

function increase_opacity(element, limit, factor = 1) {

    function _increase_opacity() {
        let current_opacity = element.style.opacity;

        if (current_opacity === "")
            current_opacity = 0;


        let new_opacity = parseFloat(current_opacity) + (0.07);
        if (new_opacity >= limit - 0.04) {
            element.style.opacity = limit;
            clearInterval(timer);
        }
        else {
            element.style.opacity = new_opacity.toString();
        }
    }

    let timer = setInterval(_increase_opacity, 20 * factor);

}

function decrease_opacity(element, limit, factor = 1) {

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

    let timer = setInterval(_decrease_opacity, 20 * factor);

}
