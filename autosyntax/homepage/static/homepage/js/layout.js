set_style("whatisit_block", "paddingTop", window.screen.availHeight / 1.5);
set_style("download_block", "paddingTop", window.screen.availHeight / 1.5);
let continue_arrow_lbl_visible = false;
on_event_do(window, "scroll",
    () => {
        first_scroll_fade_ins();
        show_console_menu();
        continue_arrow_handler();
        // increase_opacity(by_id("continue_arrow_lbl"), 0.5, factor = 0.05)
    });
on_event_do("go_up", "click", () => scroll_to(document.body));
by_id("continue_arrow_lbl").innerHTML = "What is it";
on_event_do("continue_arrow", "mouseover",

    () => {
        if (!continue_arrow_lbl_visible) {
            increase_opacity(by_id("continue_arrow_lbl"), 0.5, factor = 2);
            continue_arrow_lbl_visible = true;
        }
    });
on_event_do("continue_arrow", "mouseleave",
    () => {
        if (continue_arrow_lbl_visible) {
            setTimeout(() => {
                decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 2)
            }, 700);
            continue_arrow_lbl_visible = false;
        }

    }
);


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
    () => scroll_to("what_is_it_content"));

on_event_do("sidebar_item_2", "click",
    () => scroll_to("download_content"));
on_event_do_to_collection("download-link", "click",
    () => scroll_to("download_content"));

on_event_do("continue_arrow", "click",
    () => {
        scroll_to("what_is_it_content");
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1);
    }
);
increase_opacity(by_id("all"), 1, factor = 0.5);


// on_event_do("scroll_hover", "mouseover", () => scroll_to("scroll_hover"));


function continue_arrow_handler() {
    function _set_all_viewing_false_but(key) {

        for (let k in user_currently_viewing)
            user_currently_viewing[k] = k === key;
    }

    if (!user_currently_viewing['whatisit'] &&
        user_below(whatisit_content_orig_top)) {

        _set_all_viewing_false_but('whatisit');
        on_event_do("continue_arrow", "click",
            () => scroll_to("download_content"));
        by_id("continue_arrow_lbl").innerHTML = "Download"
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
            () => scroll_to("what_is_it_content"));

        by_id("continue_arrow_lbl").innerHTML = "What is it"
    }


}

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
        for (let i = 0; i < sidebar_items.length; i++)
            increase_opacity(sidebar_items[i], 1, factor = 1);

        // flag menu visible
        is_cons_menu_vis = true;
    }


}

