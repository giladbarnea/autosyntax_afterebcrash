window.addEventListener("resize", response);
response();

function response() {
    let w = window.screen.availWidth;
    console.log(w);
    let div_by_avg = w / 11;
    if (w < 1300) {
        set_style("pad_body", "paddingLeft", div_by_avg);
        let spaces = by_class("space");
        set_style_to_collection(spaces, "fontSize", w / 20);
    }
    let works = by_class("work");
    if (w < 1000 && w > 800) {

    }
    else if (w <= 800 && w > 650) {
        set_style_to_collection(works, "fontSize", Math.pow(w, 0.46));
        console.log('work size (0.46): ', Math.pow(w, 0.46));
    }
    else if (w <= 650) {
        set_style_to_collection(works, "fontSize", Math.pow(w, 0.43));
        console.log('work size (0.43): ', Math.pow(w, 0.43));
    }
    else {
        set_style_to_collection(works, "fontSize", 30);
        console.log('work size (30-c): ', 30);
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

