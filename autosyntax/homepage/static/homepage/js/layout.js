set_style("whatisit_block", "paddingTop", window.screen.availHeight);
increase_opacity(by_id("all"), 1);

on_call("continue_arrow", "click", scroll_to_whatisit);
on_call("go_up", "click", scroll_to_top);

let is_cons_menu_vis = false;
on_call("console_menu", "mouseover", show_console_menu);
on_call("console_menu", "click", hide_console_menu);
on_call("sidebar_item_1", "click", scroll_to_whatisit);

function scroll_to_top() {
    // window.scrollTop();
    // window.scrollBy((0, 0), {behavior: "smooth", block: "start", inline: "nearest"});
    // let what_is_it_content = by_id("what_is_it_content");
    document.body.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

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

