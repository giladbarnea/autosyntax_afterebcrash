console.log('home.continue_arrow.js\n');
set_init_lbl_html("What is it?");


let [whoami, howtouse, download, whatisit] = [
    new Section("whoami_content", "Who am I"),
    new Section("howtouse_content", "How to use"),
    new Section("download_content", "Download"),
    new Section("whatisit_content", "What is it?")
];
on_event_do("continue_arrow", "click", () =>
    scroll_to("whatisit_content"));
// DOES NOT persist in other pages
on_event_do(window, "scroll", continue_arrow_hndl);


function continue_arrow_hndl() {
    if (user_below(howtouse.init_top)) {
        console.warn('user below how to use');
        on_event_do("continue_arrow", "click",
            () => scroll_to(whoami.sect_id));
        by_id("continue_arrow_lbl").innerHTML = whoami.lbl
    }
    else if (user_below(download.init_top)) {
        console.warn('user below download');
        on_event_do("continue_arrow", "click",
            () => scroll_to(howtouse.sect_id));
        by_id("continue_arrow_lbl").innerHTML = howtouse.lbl
    }
    else if (user_below(whatisit.init_top)) {
        console.warn('user below whatisit');
        on_event_do("continue_arrow", "click",
            () => scroll_to(download.sect_id));

        by_id("continue_arrow_lbl").innerHTML = download.lbl
    }
    else {
        console.warn('user below else');
        on_event_do("continue_arrow", "click",
            () => scroll_to(whatisit.sect_id));

        by_id("continue_arrow_lbl").innerHTML = whatisit.lbl
    }
}

// function continue_arrow_handler() {
//     if (user_below(howtouse.init_top)) {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to(whoami.sect_id));
//         by_id("continue_arrow_lbl").innerHTML = whoami.lbl
//     }
//     else if (user_below(download.init_top)) {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to(howtouse.sect_id));
//         by_id("continue_arrow_lbl").innerHTML = howtouse.lbl
//     }
//     else if (user_below(whatisit.init_top)) {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to(download.sect_id));
//
//         by_id("continue_arrow_lbl").innerHTML = download.lbl
//     }
//     else {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to(whatisit.sect_id));
//
//         by_id("continue_arrow_lbl").innerHTML = whatisit.lbl
//     }
//
// }

// function continue_arrow_handler_old() {
//     if (user_below(howtouse_init_top)) {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to("whoami_content"));
//         by_id("continue_arrow_lbl").innerHTML = "Who am I"
//     }
//     else if (user_below(download_init_top)) {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to("howtouse_content"));
//         by_id("continue_arrow_lbl").innerHTML = "How to use"
//     }
//     else if (user_below(whatisit_init_top)) {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to("download_content"));
//
//         by_id("continue_arrow_lbl").innerHTML = "Download"
//     }
//     else {
//         on_event_do("continue_arrow", "click",
//             () => scroll_to("whatisit_content"));
//
//         by_id("continue_arrow_lbl").innerHTML = "What is it?"
//     }
//
// }

