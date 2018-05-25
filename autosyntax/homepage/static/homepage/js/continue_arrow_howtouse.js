console.log('continue_arrow_howtouse.js\n');
set_init_lbl_html("Operators");
// let operators_init_top = get_init_top("operators_htu");
// let dotted_init_top = get_init_top("dotted_htu");
// let inline_init_top = get_init_top("inline_htu");
//
on_event_do("continue_arrow", "mouseover", display_continue_arrow_lbl);
on_event_do("continue_arrow", "mouseleave", hide_continue_arrow_lbl);


let [operators, dotted, inline] = [
    new Section("operators_htu", "Operators"),
    new Section("dotted_htu", "Dotted arguments"),
    new Section("inline_htu", "Inline methods"),
];


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