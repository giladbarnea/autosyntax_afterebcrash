// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('continue_arrow_utils.js\n');

function set_init_lbl_html(value) {
    by_id("continue_arrow_lbl").innerHTML = value;
}

function get_init_top(ids) {
    let ret = [];
    for (let i = 0; i < ids.length; i++) {
        console.log(ids[i]);
        ret.push(get_rect(ids[i]).top + window.scrollY);
    }
    return ret;
}
