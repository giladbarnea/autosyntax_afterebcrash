let w = window.screen.availWidth;
console.log('width:', w);
let div_by_avg = w / 11;
console.log('width / 11: ', div_by_avg);
console.log('Math.pow(w, 0.46): ', Math.pow(w, 0.46));
if (w < 1300) {
    set_style("pad_body", "paddingLeft", div_by_avg);
    let spaces = by_class("space");
    for (let i = 0; i < spaces.length; i++) {
        set_style(spaces[i], "fontSize", w / 20);
    }
}
if (w < 950) {
    let works = by_class("work");
    for (let i = 0; i < works.length; i++) {
        set_style(works[i], "fontSize", Math.pow(w, 0.46));
    }
}

set_style("whatisit_block", "paddingTop", window.screen.availHeight);
increase_opacity(by_id("pad_body"), 1);

on_call("continue_arrow", "click", scroll_to_whatisit);

let is_cons_menu_vis = false;
on_call("console_menu", "mouseover", show_console_menu);
on_call("console_menu", "click", hide_console_menu);
on_call("sidebar_item_1", "click", scroll_to_whatisit);

function hide_console_menu() {
    if (is_cons_menu_vis) { //if menu visible
        // hide menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++) {
            decrease_opacity(sidebar_items[i], 0);
        }
        // flag menu hidden
        is_cons_menu_vis = false;
    }
}

function show_console_menu() {
    if (!is_cons_menu_vis) { //if menu hidden
        // show menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++) {
            increase_opacity(sidebar_items[i], 1);
        }
        // flag menu visible
        is_cons_menu_vis = true;
    }


}

