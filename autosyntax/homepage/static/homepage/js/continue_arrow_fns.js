// let continue_arrow_lbl_visible = false;
// let user_currently_viewing = {
//     'landing': true,
//     'whatisit': false,
//     'download': false
// };
try {
    by_id("continue_arrow_lbl").innerHTML = "What is it";
    let user_currently_viewing = "landing";
    let whatisit_content_orig_top = get_rect("what_is_it_content").top;
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
        // console.log(user_currently_viewing);

        // function _set_all_viewing_false_but(key) {
        //     for (let k in user_currently_viewing)
        //         user_currently_viewing[k] = k === key;
        // }
        if (user_below(whatisit_content_orig_top)
            && user_currently_viewing === 'landing'
        ) {
            user_currently_viewing = "whatisit";
            // _set_all_viewing_false_but('whatisit');
            on_event_do("continue_arrow", "click",
                () => scroll_to("download_content"));
            by_id("continue_arrow_lbl").innerHTML = "Download"
        }
        // above whatisit
        else if (user_below(download_content_orig_top)
            && user_currently_viewing === "whatisit"
        ) {
            user_currently_viewing = "download";
            on_event_do("continue_arrow", "click",
                () => scroll_to("howtouse_content"));

            by_id("continue_arrow_lbl").innerHTML = "How to use"
        }
        else if (user_below(howtouse_content_orig_top)
            && user_currently_viewing === "download"
        ) {
            user_currently_viewing = "howtouse";
            on_event_do("continue_arrow", "click",
                () => scroll_to("whoami_content"));

            by_id("continue_arrow_lbl").innerHTML = "Who am I?"
        }
        else if (!user_below(whatisit_content_orig_top)
            && user_currently_viewing === "howtouse"
        ) {
            user_currently_viewing = "landing";
            on_event_do("continue_arrow", "click",
                () => scroll_to("what_is_it_content"));

            by_id("continue_arrow_lbl").innerHTML = "What is it?"
        }

    }
}
catch (err) {
    // console.log('error at getting blocks rect: ', err);
}
