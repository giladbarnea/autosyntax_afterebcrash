// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('common/utils.js\t\t\t\t\tFROM common.layout.html\n');

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

function scroll_to_bezier(target_y, freq_ms = 10) {
    let y = window.scrollY;
    let is_target_below = window.scrollY < target_y;
    let direction = is_target_below ? +1 : -1;
    let stop_cond = false;

    let distance;

    if (is_target_below) {
        if (target_y - 80 >= 0)
            stop_cond = () => window.scrollY >= target_y - 80;
        else
            stop_cond = () => window.scrollY >= target_y;


        distance = Math.abs(window.scrollY - target_y);
    }

    else {
        if (target_y - 80 >= 0)
            stop_cond = () => window.scrollY <= target_y - 80;
        else
            stop_cond = () => window.scrollY <= target_y;
        distance = Math.abs(window.scrollY - (target_y - 80));
    }


    let bezzed = get_bezzed(distance, freq_ms);
    // console.log('sum(bezzed): ', sum(bezzed));
    // console.log('distance: ', distance);
    // console.log('target_y: ', target_y);
    // console.log(`window.scrollY: ${window.scrollY}\n`);

    // console.log('bezzed.length: ', bezzed.length);
    let counter = 0;
    let timer = setInterval(() => {
        if (stop_cond()) {
            // console.warn(`\nreached stop condition`);
            // console.log(`counter: ${counter}\n`);
            // console.log('bezzed[counter]: ', bezzed[counter]);
            // console.log(`window.scrollY: ${window.scrollY}\n`);
            // console.log('target_y: ', target_y);
            // console.log('target_y - 80: ', target_y - 80);
            clearInterval(timer);
        }
        else {
            if (counter === bezzed.length - 1) {
                console.warn('counter reached end of bezzed: ', counter);
                console.warn('common.utils.scroll_to_bezier');
                console.log('bezzed[counter]: ', bezzed[counter]);
                console.log(`window.scrollY: ${window.scrollY}\n`);
                console.log('target_y: ', target_y);
                console.log('target_y - 80: ', target_y - 80);
                // counter = counter - 1;
            }
            window.scrollTo(0, window.scrollY + direction * bezzed[counter]);
            counter = counter + 1;

        }
    }, freq_ms);

}


function element_or_by_fn(element, fn) {
    return typeof element === "string" ? fn(element) : element;

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
    element = element_or_by_fn(element, by_id);
    let new_val = typeof val === "number" ? val.toString() + "px" : val;
    element.style[att] = new_val;

}


function fade_opacity(element, limit, factor, up) {

    function _fade_opacity() {
        let current_opacity = element.style["opacity"];

        if (current_opacity === "")
            current_opacity = 0;


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
        }

        else
            element.style.opacity = new_opacity.toString();

    }

    let timer = setInterval(_fade_opacity, 10);
}

function increase_opacity(element, limit, factor) {
    element = element_or_by_fn(element, by_id);
    fade_opacity(element, limit, factor, true);

}

function decrease_opacity(element, limit, factor) {
    element = element_or_by_fn(element, by_id);
    fade_opacity(element, limit, factor, false);

}

function set_opacity(element, limit, factor) {
    element = element_or_by_fn(element, by_id);

    let current_opacity = element.style["opacity"];

    if (current_opacity === "")
        current_opacity = 0;

    if (current_opacity < limit)
        increase_opacity(element, limit, factor);

    else if (current_opacity > limit)
        decrease_opacity(element, limit, factor);


}

function create_bullet_list(ul_id) {

    let list = by_id(ul_id);
    let list_ch = list.children;

    for (let i = 0; i < list_ch.length; i++) {
        let classes = i === 0 ? "pl30" : ["pl30", "pt25"];
        add_classes(list_ch[i], classes);
    }

}

function add_classes(element, classes) {
    element = element_or_by_fn(element, by_id);

    if (typeof classes !== 'string')
        for (let i = 0; i < classes.length; i++)
            element.classList.add(classes[i]);
    else
        element.classList.add(classes);

}

function span(inner, cls, tail = '', id = undefined) {
    let _id = id === undefined ? '' : `id="${id}"`;
    let _cls = `class="${cls}"`;
    return `<span ${_cls} ${_id}>${inner}</span>${tail}`;
}

// function add_class(element, add) {
//     element = element_or_by_fn(element, by_id);
//     let cls = element.className;
//     let add_idx = cls.indexOf(add);
//     if (add_idx === -1) {
//         element.className += ` ${add}`;
//     }
// }

function remove_class(element, remove) {
    element = element_or_by_fn(element, by_id);
    let cls = element.className;
    let remove_idx = cls.indexOf(remove);
    if (remove_idx !== -1) {
        let before = cls.substring(0, remove_idx);
        let after = cls.substring(remove_idx + remove.length + 1, cls.length);
        element.className = before + after;
    }
}

function create_element(tag, att = undefined, att_value = undefined, inner = undefined) {
    let element = document.createElement(tag);
    element.setAttribute(att, att_value);
    element.innerHTML = inner;
    return element;
}

function add_child(element, child_attrs) {
    element = element_or_by_fn(element, by_id);
    element.appendChild(create_element(
        child_attrs['tag'],
        child_attrs['att'],
        child_attrs['att_value'],
        child_attrs['inner'],
    ))
}

function get_filename() {
    return window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();
}
