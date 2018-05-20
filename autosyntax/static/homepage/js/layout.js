set_style("whatisit_block", "paddingTop", window.screen.availHeight);
set_style("download_block", "paddingTop", window.screen.availHeight);
on_event_do(window, "scroll",
    () => {
        display_totop_button();
        show_console_menu();
        continue_arrow_handler();
    });
increase_opacity(by_id("all"), 1, factor = 0.5);


on_event_do("go_up", "click", () => scroll_to(document.body));

let download_content_orig_top = get_rect("download_content").top;
let whatisit_content_orig_top = get_rect("what_is_it_content").top;
let user_currently_viewing = {
    'landing': true,
    'whatisit': false,
    'download': false
};

let is_cons_menu_vis = false;
on_event_do("console_menu", "mouseover", show_console_menu);
on_event_do("console_menu", "click", hide_console_menu);

on_event_do("sidebar_item_1", "click",
    () => scroll_to(by_id("what_is_it_content")));

on_event_do("sidebar_item_2", "click",
    () => scroll_to(by_id("download_content")));
on_event_do_to_collection("download-link", "click",
    () => scroll_to(by_id("download_content")));

on_event_do("continue_arrow", "click",
    () => scroll_to(by_id("what_is_it_content")));

function continue_arrow_handler() {
    function _set_all_viewing_false_but(key) {
		
        for (let k in user_currently_viewing)
            user_currently_viewing[k] = k === key;
    }

    if (!user_currently_viewing['whatisit'] &&
        user_below(whatisit_content_orig_top)) {

        _set_all_viewing_false_but('whatisit');
        on_event_do("continue_arrow", "click",
            () => scroll_to(by_id("download_content")));
    }
    // above whatisit
    else if (!user_currently_viewing["download"] &&
        user_below(download_content_orig_top)) {

        _set_all_viewing_false_but('download');
        // FUTURE: TO WHO AM I
    }
    else if (!user_currently_viewing["landing"] &&
        !user_below(whatisit_content_orig_top)) {

        debugger;
        _set_all_viewing_false_but('landing');
        on_event_do("continue_arrow", "click",
            () => scroll_to(by_id("what_is_it_content")));
    }


}

function display_totop_button() {

    if (window.scrollY > 200 && !is_go_up_visible) {
        is_go_up_visible = true;
        increase_opacity(by_id("go_up"), 0.7, factor = 1);
        set_style("continue_arrow", "left", "10%");
        decrease_opacity(by_id("continue_arrow"), 0.7, factor = 0.05);
    }
    else if (window.scrollY <= 200 && is_go_up_visible) {
        is_go_up_visible = false;
        decrease_opacity(by_id("go_up"), 0, factor = 1);
        set_style("continue_arrow", "left", "49.8%");
        increase_opacity(by_id("continue_arrow"), 1, factor = 0.05);
    }
}

function hide_console_menu() {
    if (is_cons_menu_vis) { //if menu visible
        // hide menu
        let sidebar_items = by_class("sidebar-item");
        for (let i = 0; i < sidebar_items.length; i++)
            decrease_opacity(sidebar_items[i], 0, factor = 1);

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
            increase_opacity(sidebar_items[i], 1, factor = 1);

        // flag menu visible
        is_cons_menu_vis = true;
    }


}

