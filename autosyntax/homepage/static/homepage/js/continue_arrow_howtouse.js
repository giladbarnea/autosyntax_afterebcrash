console.log('continue_arrow_howtouse.js\n');
set_init_lbl_html("Operators");

on_event_do("continue_arrow", "mouseover", display_continue_arrow_lbl);
on_event_do("continue_arrow", "mouseleave", hide_continue_arrow_lbl);


let [operators, dotted, inline] = [
    new Section("operators_htu", "Operators"),
    new Section("dotted_htu", "Dotted arguments"),
    new Section("inline_htu", "Inline methods"),
];

on_event_do("continue_arrow", "click",
    () => {
        scroll_to("operators_htu");
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1);
        continue_arrow_hndl_htu();
    }
);
window.addEventListener("scroll", continue_arrow_hndl_htu);

function continue_arrow_hndl_htu() {
    if (user_below(dotted.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(inline.sect_id));
        by_id("continue_arrow_lbl").innerHTML = inline.lbl
    }
    else if (user_below(operators.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(dotted.sect_id));
        by_id("continue_arrow_lbl").innerHTML = dotted.lbl
    }
    else {
        on_event_do("continue_arrow", "click",
            () => scroll_to(operators.sect_id));

        by_id("continue_arrow_lbl").innerHTML = operators.lbl
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