set_style("whatisit_block", "paddingTop", window.screen.availHeight / 1.5);
set_style("download_block", "paddingTop", window.screen.availHeight / 1.5);

on_event_do(window, "scroll",
    () => {
        first_scroll_fade_ins();
        show_console_menu();
        continue_arrow_handler();
    });
on_event_do("go_up", "click", () => scroll_to(document.body));


let is_console_menu_vis = false;
on_event_do("console_menu", "mouseover", show_console_menu);
on_event_do("console_menu", "click", hide_console_menu);

on_event_do("sidebar_item_1", "click",
    () => scroll_to("what_is_it_content"));

on_event_do("sidebar_item_2", "click",
    () => scroll_to("download_content"));

on_event_do("sidebar_item_3", "click",
    () => scroll_to("howotuse_content"));

on_event_do_to_collection("download-link", "click",
    () => scroll_to("download_content"));

on_event_do("continue_arrow", "click",
    () => {
        scroll_to("what_is_it_content");
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1);
    }
);
increase_opacity(by_id("all"), 1, factor = 0.5);


function first_scroll_fade_ins() {

    if (window.scrollY > 200 && !is_go_up_visible) {
        is_go_up_visible = true;
        increase_opacity(by_id("go_up"), 0.7, factor = 1);
        set_style("continue_arrow", "left", "10%");
        set_style("continue_arrow_lbl", "left", "8.8%");
        decrease_opacity(by_id("continue_arrow"), 0.7, factor = 0.05);
    }
    else if (window.scrollY <= 200 && is_go_up_visible) {
        is_go_up_visible = false;
        decrease_opacity(by_id("go_up"), 0, factor = 1);
        set_style("continue_arrow", "left", "49.8%");
        set_style("continue_arrow_lbl", "left", "48.6%");
        increase_opacity(by_id("continue_arrow"), 1, factor = 0.05);
    }
}

function hide_console_menu() {
    if (is_console_menu_vis) { //if menu visible
        // hide menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++)
            decrease_opacity(sidebar_items[i], 0, factor = 1);

        // flag menu hidden
        is_console_menu_vis = false;
    }
}

function show_console_menu() {
    if (!is_console_menu_vis) { //if menu hidden
        // show menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++)
            increase_opacity(sidebar_items[i], 1, factor = 1);

        // flag menu visible
        is_console_menu_vis = true;
    }


}

