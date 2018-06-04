console.log('homepage/home.continue_arrow.js\tFROM home.landing.html\tMODULE\n');
// set_init_lbl_html("What is it?");

//IMPORTANT TO KEEP IT HERE - FILE IS MODULE = LOADS LAST = scrollY's ACCURATE
export let [whoami, howtouse, download, whatisit] = [
    new Section("whoami_content"),
    new Section("howtouse_content"),
    new Section("download_content"),
    new Section("whatisit_content")
];


on_event_do("continue_arrow", "click", () =>
    scroll_to("whatisit_content"));
// DOES NOT persist in other pages
on_event_do(window, "scroll", continue_arrow_hndl);


function continue_arrow_hndl() {
    if (user_below(howtouse.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(whoami.sect_id));
        // by_id("continue_arrow_lbl").innerHTML = whoami.lbl
    }
    else if (user_below(download.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(howtouse.sect_id));
        // by_id("continue_arrow_lbl").innerHTML = howtouse.lbl
    }
    else if (user_below(whatisit.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(download.sect_id));

        // by_id("continue_arrow_lbl").innerHTML = download.lbl
    }
    else {
        on_event_do("continue_arrow", "click",
            () => scroll_to(whatisit.sect_id));

        // by_id("continue_arrow_lbl").innerHTML = whatisit.lbl
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

