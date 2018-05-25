console.log('continue_arrow_mainpage.js\n');
set_init_lbl_html("What is it?");
let whatisit_init_top,
    download_init_top,
    howtouse_init_top = get_init_top(["whatisit_content",
        "download_content",
        "howtouse_content"]);
// let whatisit_init_top = get_rect("whatisit_content").top + window.scrollY;
// let download_init_top = get_rect("download_content").top + window.scrollY;
// let howtouse_init_top = get_rect("howtouse_content").top + window.scrollY;

on_event_do("continue_arrow", "mouseover", display_continue_arrow_lbl);
on_event_do("continue_arrow", "mouseleave", hide_continue_arrow_lbl);

function display_continue_arrow_lbl() {
    increase_opacity(by_id("continue_arrow_lbl"), 0.5, factor = 0.5);
}

function hide_continue_arrow_lbl() {
    setTimeout(() => {
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1)
    }, 700);
}

function continue_arrow_handler() {
    console.log('howtouse_init_top: ', howtouse_init_top);
    console.log('download_init_top: ', download_init_top);
    console.log('whatisit_init_top: ', whatisit_init_top);
    if (user_below(howtouse_init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to("whoami_content"));
        by_id("continue_arrow_lbl").innerHTML = "Who am I"
    }
    else if (user_below(download_init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to("howtouse_content"));
        by_id("continue_arrow_lbl").innerHTML = "How to use"
    }
    else if (user_below(whatisit_init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to("download_content"));

        by_id("continue_arrow_lbl").innerHTML = "Download"
    }
    else {
        on_event_do("continue_arrow", "click",
            () => scroll_to("whatisit_content"));

        by_id("continue_arrow_lbl").innerHTML = "What is it?"
    }

}

