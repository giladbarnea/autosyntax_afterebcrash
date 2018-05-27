// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('continue_arrow.js\n');

function set_init_lbl_html(value) {
    by_id("continue_arrow_lbl").innerHTML = value;
}

function get_init_top(id) {
    return get_rect(id).top + window.scrollY;
}

function display_continue_arrow_lbl() {
    increase_opacity(by_id("continue_arrow_lbl"), 0.5, factor = 0.5);
}

function hide_continue_arrow_lbl() {
    setTimeout(() => {
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1)
    }, 700);
}

class Section {
    constructor(sect_id, lbl) {
        this.sect_id = sect_id;
        this.init_top = get_init_top(sect_id);
        this.lbl = lbl;
    }
}


