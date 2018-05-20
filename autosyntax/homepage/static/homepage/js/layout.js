set_style("whatisit_block", "paddingTop", window.screen.availHeight);
on_call(window, "scroll",
    () => {
        display_totop_button();
        show_console_menu();
    });
increase_opacity(by_id("all"), 1, factor = 0.5);
place_tabs_before_arrows_in_whatisit();

on_call("continue_arrow", "click", () => scroll(by_id("what_is_it_content")));
on_call("go_up", "click", () => scroll(document.body));

let is_cons_menu_vis = false;
on_call("console_menu", "mouseover", show_console_menu);
on_call("console_menu", "click", hide_console_menu);
on_call("sidebar_item_1", "click", () => scroll(by_id("what_is_it_content")));

function place_tabs_before_arrows_in_whatisit() {
    let tabs_16 = by_class("tabs-16");
    for (let i = 0; i < tabs_16.length; i++) {
        for (let j = 0; j < 16; j++)
            tabs_16[i].innerHTML += "&emsp;";
        tabs_16[i].innerHTML += ">";
    }
    let tabs_15 = by_class("tabs-15");
    for (let i = 0; i < tabs_15.length; i++) {
        for (let j = 0; j < 15; j++)
            tabs_15[i].innerHTML += "&emsp;";
        tabs_15[i].innerHTML += ">";
    }
    let tabs_17 = by_class("tabs-17");
    for (let i = 0; i < tabs_17.length; i++) {
        for (let j = 0; j < 17; j++)
            tabs_17[i].innerHTML += "&emsp;";
        tabs_17[i].innerHTML += ">";
    }
    let tabs_5 = by_class("tabs-5");
    for (let i = 0; i < tabs_5.length; i++) {
        for (let j = 0; j < 5; j++)
            tabs_5[i].innerHTML += "&emsp;";
        tabs_5[i].innerHTML += ">";
    }
    let tabs_21 = by_class("tabs-21");
    for (let i = 0; i < tabs_21.length; i++) {
        for (let j = 0; j < 21; j++)
            tabs_21[i].innerHTML += "&emsp;";
        tabs_21[i].innerHTML += ">";
    }
    let tabs_22 = by_class("tabs-22");
    for (let i = 0; i < tabs_22.length; i++) {
        for (let j = 0; j < 22; j++)
            tabs_22[i].innerHTML += "&emsp;";
        tabs_22[i].innerHTML += ">";
    }
    let tabs_19 = by_class("tabs-19");
    for (let i = 0; i < tabs_19.length; i++) {
        for (let j = 0; j < 19; j++)
            tabs_19[i].innerHTML += "&emsp;";
        tabs_19[i].innerHTML += ">";
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

