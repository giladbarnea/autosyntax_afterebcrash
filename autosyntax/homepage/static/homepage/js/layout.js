window.addEventListener("resize", on_resize);
on_resize();

function on_resize() {
    let w = window.screen.availWidth;
    console.log(w);
    by_id("width_flag").innerHTML = w;
    set_style("width_flag", "fontSize", w / 21.7);
    resize_body_left();
    resize_body_right();
    resize_pad_body();
    resize_works();
    resize_console_menu();
    resize_space();
    resize_sidebar();

    function resize_console_menu() {
        if (w < 700 && w > 550) {
            set_style("console_menu", "height", w / 24);
        }
        else if (w <= 550) {
            set_style("console_menu", "height", w / 20);
        }
        else {
            set_style("console_menu", "height", 30);
        }
    }

    function resize_body_left() {
        if (w < 700 && w > 550) {
            set_style(document.body, "marginLeft", Math.pow(w, 0.6));
            // console.log('body margin left: ', Math.pow(w, 0.6))
        }
        else if (w <= 550) {
            set_style(document.body, "marginLeft", Math.pow(w, 0.5));
            // console.log('body margin left: ', Math.pow(w, 0.5))
        }
        else {
            set_style(document.body, "marginLeft", 60);
        }
    }

    function resize_body_right() {
        if (w < 1300 && w > 500) {
            set_style(document.body, "marginRight", 60);
        }
        else if (w <= 500) {
            set_style(document.body, "marginRight", w / 10);
            console.log('body margin right: ', w / 10);
        }

    }

    function resize_space() {
        let spaces = by_class("space");
        if (w < 1300) {
            set_style_to_collection(spaces, "fontSize", w / 21.7);
        }
        else {
            set_style_to_collection(spaces, "fontSize", 60);
        }
    }

    function resize_pad_body() {
        if (w < 1300 && w > 1000) {
            set_style("pad_body", "paddingLeft", w / 4.5);
            // console.log('pad body: ', w / 4.5)
        }
        else if (w <= 1000 && w > 880) {
            set_style("pad_body", "paddingLeft", w / 4.2);
            // console.log('pad body: ', w / 4.2)
        }
        else if (w <= 880 && w > 550) {
            set_style("pad_body", "paddingLeft", w / 3.7);
            // console.log('pad body: ', w / 3.7)
        }
        else if (w <= 550) {
            set_style("pad_body", "paddingLeft", w / 3.7);
            // console.log('pad body: ', w / 3.7)
        }
        else {
            set_style("pad_body", "paddingLeft", 250);
        }
    }

    function resize_sidebar() {
        let sidebar_items = by_class("sidebar-item");
        if (w < 1300 && w > 1000) {
            set_style("sidebar", "paddingLeft", 20);
            set_style_to_collection(sidebar_items, "fontSize", Math.pow(w, 0.43));
        }
        else if (w <= 1000) {
            set_style("sidebar", "paddingLeft", w / 100);
            set_style_to_collection(sidebar_items, "fontSize", Math.pow(w, 0.44));
        }
        else {
            set_style("sidebar", "paddingLeft", 20);
            set_style_to_collection(sidebar_items, "fontSize", 23);
        }
    }

    function resize_works() {
        let works = by_class("work");
        if (w < 1300 && w > 800) {
            set_style_to_collection(works, "fontSize", Math.pow(w, 0.47));

        }
        else if (w <= 800 && w > 650) {
            set_style_to_collection(works, "fontSize", Math.pow(w, 0.46));
        }
        else if (w <= 650) {
            set_style_to_collection(works, "fontSize", Math.pow(w, 0.43));
        }
        else {
            set_style_to_collection(works, "fontSize", 30);

        }
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

