// let continue_arrow_lbl_visible = false;
// let user_currently_viewing = {
//     'landing': true,
//     'whatisit': false,
//     'download': false
// };
// try {
by_id("continue_arrow_lbl").innerHTML = "What is it";
let user_currently_viewing = "landing";
console.log(user_currently_viewing);
let whatisit_content_orig_top = get_rect("whatisit_content").top;
let download_content_orig_top = get_rect("download_content").top;
let howtouse_content_orig_top = get_rect("howtouse_content").top;

on_event_do("continue_arrow", "mouseover", display_continue_arrow_lbl);
on_event_do("continue_arrow", "mouseleave", hide_continue_arrow_lbl);

function display_continue_arrow_lbl() {
    // if (!continue_arrow_lbl_visible) {
    increase_opacity(by_id("continue_arrow_lbl"), 0.5, factor = 0.5);
    // continue_arrow_lbl_visible = true;
    // }
}

function hide_continue_arrow_lbl() {
    // if (continue_arrow_lbl_visible) {
    setTimeout(() => {
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1)
    }, 700);
    // continue_arrow_lbl_visible = false;
    // }
}

function continue_arrow_handler() {
    if (user_below(download_content_orig_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to("whoami_content"));
        by_id("continue_arrow_lbl").innerHTML = "Who am I"
    }
    else if (user_below(whatisit_content_orig_top)) {
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

function continue_arrow_handler_old() {
    if (user_below(whatisit_content_orig_top)
    // && user_currently_viewing === 'landing'
    ) {
        console.log('Continue arrow: user below whatisit. Changing lbl to Download');
        user_currently_viewing = "whatisit";
        // _set_all_viewing_false_but('whatisit');
        on_event_do("continue_arrow", "click",
            () => scroll_to("download_content"));
        by_id("continue_arrow_lbl").innerHTML = "Download"
    }
    // above whatisit
    else if (user_below(download_content_orig_top)
    // && user_currently_viewing === "whatisit"
    ) {
        console.log('Continue arrow: user below download. Changing lbl to How to use');
        user_currently_viewing = "download";
        on_event_do("continue_arrow", "click",
            () => scroll_to("howtouse_content"));

        by_id("continue_arrow_lbl").innerHTML = "How to use"
    }
    else if (user_below(howtouse_content_orig_top)
    // && user_currently_viewing === "download"
    ) {
        console.log('Continue arrow: user below howtouse. Changing lbl to Who am I');
        user_currently_viewing = "howtouse";
        on_event_do("continue_arrow", "click",
            () => scroll_to("whoami_content"));

        by_id("continue_arrow_lbl").innerHTML = "Who am I?"
    }
    else if (!user_below(whatisit_content_orig_top)
    // && user_currently_viewing === "howtouse"
    ) {
        console.log('Continue arrow: user NOT below whatisit. Changing lbl to What is it?');
        user_currently_viewing = "landing";
        on_event_do("continue_arrow", "click",
            () => scroll_to("whatisit_content"));

        by_id("continue_arrow_lbl").innerHTML = "What is it?"
    }
    else {
        console.log('Continue arrow: got into final empty else');
        console.log('\tuser_currently_viewing: ', user_currently_viewing);
    }

}

// catch (err) {
//     console.log('continue_arrow_fns error!: ', err);
// }
