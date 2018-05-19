set_style("whatisit_block", "paddingTop", window.screen.availHeight);
increase_opacity(by_id("all"), 1, factor = 0.5);

on_call("continue_arrow", "click", () => scroll(by_id("what_is_it_content")));
on_call("go_up", "click", () => scroll(document.body));

let is_cons_menu_vis = false;
on_call("console_menu", "mouseover", show_console_menu);
on_call("console_menu", "click", hide_console_menu);
on_call("sidebar_item_1", "click", () => scroll(by_id("what_is_it_content")));


function hide_console_menu() {
    if (is_cons_menu_vis) { //if menu visible
        // hide menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++)
            decrease_opacity(sidebar_items[i], 0);

        // flag menu hidden
        is_cons_menu_vis = false;
    }
}

function show_console_menu() {
    if (!is_cons_menu_vis) { //if menu hidden
        // show menu
        let sidebar_items = by_class("sidebar-item");
        // foreach(sidebar_items, increase_opacity, 1);
        for (let i = 0; i < sidebar_items.length; i++)
            increase_opacity(sidebar_items[i], 1);

        // flag menu visible
        is_cons_menu_vis = true;
    }


}

