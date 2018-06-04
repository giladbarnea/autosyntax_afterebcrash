// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('common/layout.js\t\t\t\tFROM common.layout.html\n');
let filename = get_filename();
console.log('filename: ', filename);
let is_go_up_visible = false;
if (window.scrollY >= 100) {
    show_go_up();
    left_continue_arrow();
}
set_style_to_collection("my-ul", 'listStyle', "outside url('static/common/img/NOTSURE/tiny7.png')");
// set_style_to_collection("my-ul", 'listStyle', "outside url('static/common/img/NOTSURE/arrow_serious/untitled.svg')");

on_event_do(window, "scroll",
    () => {
        // PERSISTS AS LONG AS LAYOUT.HTML IS EXTENDED FROM (i.e always)
        first_scroll_fade_ins();
        // show_console_menu();
    });

on_event_do("go_up", "click",
    () => scroll_to_bezier(0));

// let is_console_menu_vis = false;
// on_event_do("console_menu", "mouseover", show_console_menu);
// on_event_do("console_menu", "click", hide_console_menu);


on_event_do_to_collection("download-link", "click",
    () => scroll_to("download_content"));


increase_opacity(by_id("all"), 1, factor = 0.5);

function show_go_up() {
    is_go_up_visible = true;
    increase_opacity(by_id("go_up"), 0.7, factor = 1);
}

function hide_go_up() {
    is_go_up_visible = false;
    decrease_opacity(by_id("go_up"), 0, factor = 1);
}

function center_continue_arrow() {
    set_style("continue_arrow", "left", arrow.center);
    increase_opacity(by_id("continue_arrow"), 1, factor = 0.05);
}

function left_continue_arrow() {
    set_style("continue_arrow", "left", arrow.left);
    set_opacity('continue_arrow', 0.7, factor = 0.1);
}

function first_scroll_fade_ins() {
    // PERSISTS
    if (window.scrollY >= 100 && !is_go_up_visible) {
        show_go_up();
        left_continue_arrow();
    }
    else if (window.scrollY <= 100 && is_go_up_visible) {
        hide_go_up();
        center_continue_arrow();
    }
}


// function hide_console_menu() {
//     if (is_console_menu_vis) { //if menu visible
//         // hide menu
//         let sidebar_items = by_class("sidebar-item");
//         for (let i = 0; i < sidebar_items.length; i++)
//             decrease_opacity(sidebar_items[i], 0, factor = 1);
//
//         // flag menu hidden
//         is_console_menu_vis = false;
//     }
// }
// function show_console_menu() {
//     // PERSISTS
//     if (!is_console_menu_vis) {
//         let sidebar_items = by_class("sidebar-item");
//         for (let i = 0; i < sidebar_items.length; i++)
//             increase_opacity(sidebar_items[i], 1, factor = 1);
//
//         is_console_menu_vis = true;
//     }
//
//
// }

