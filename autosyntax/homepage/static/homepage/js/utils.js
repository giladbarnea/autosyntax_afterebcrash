// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('utils.js\n');

function by_id(id) {
    return document.getElementById(id);
}

function by_class(name) {
    return document.getElementsByClassName(name);
}

function scroll_to(target) {
    element_or_by_fn(target, by_id).scrollIntoView({
        behavior: "smooth",
        block: "start", inline: "nearest"
    });
}

function element_or_by_fn(element, fn) {
    return typeof element === "string" ? fn(element) : element;
    // if (typeof element === "string")
    //     return fn(element);
    //
    // else
    //     return element;

}

function on_event_do_to_collection(collection, event, fn) {
    let new_collection = element_or_by_fn(collection, by_class);
    for (let i = 0; i < new_collection.length; i++)
        on_event_do(new_collection[i], event, fn);
}


function on_event_do(element, event, fn, once = false) {
    let ret = element_or_by_fn(element, by_id);
    ret.addEventListener(event, fn, {once: once});
    return ret;

}

function get_rect(element) {
    return element_or_by_fn(element, by_id)
        .getBoundingClientRect();

}

function user_below(threshold) {
    // return window.scrollY - 200 > threshold;
    return window.scrollY + 100 > threshold;
}


function set_style_to_collection(collection, att, val) {
    let new_collection = element_or_by_fn(collection, by_class);
    for (let i = 0; i < new_collection.length; i++)
        set_style(new_collection[i], att, val);

}

function set_style(element, att, val) {
    let new_val = typeof val === "number" ? val.toString() + "px" : val;
    element_or_by_fn(element, by_id)
        .style[att] = new_val;

}


function fade_opacity(element, limit, factor, up, then = "") {
    // element = element_or_by_fn(element, by_id);

    function _fade_opacity() {
        let current_opacity = element.style["opacity"];

        if (current_opacity === "") {
            current_opacity = 0;
        }

        let direction = up ? 1 : -1;
        let new_opacity = parseFloat(current_opacity) + (direction * 0.07 * factor);
        let condition;
        if (up)
            condition = new_opacity >= limit - 0.04;
        else
            condition = new_opacity <= limit + 0.04;

        if (condition) {
            element.style.opacity = limit;
            clearInterval(timer);
            if (then !== "")
                then();
        }
        else {
            element.style.opacity = new_opacity.toString();
        }


    }

    let timer = setInterval(_fade_opacity, 10);
}

function increase_opacity(element, limit, factor) {
    fade_opacity(element, limit, factor, true);

}

function decrease_opacity(element, limit, factor) {
    fade_opacity(element, limit, factor, false);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}