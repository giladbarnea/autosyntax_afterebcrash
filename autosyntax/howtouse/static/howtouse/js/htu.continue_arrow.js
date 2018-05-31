console.log('continue_arrow_howtouse.js\n');
set_init_lbl_html("Operators");


let [operators, dotted, inline, complex] = [
    new Section("operators_htu", "Operators"),
    new Section("dotted_htu", "Dotted args"),
    new Section("inline_htu", "Inline methods"),
    new Section("complex_htu", "Complex ops"),
];

on_event_do("continue_arrow", "click",
    () => {
        scroll_to("operators_htu");
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1);
        continue_arrow_hndl();
    }
);
window.addEventListener("scroll", continue_arrow_hndl);

function continue_arrow_hndl() {
    if (user_below(inline.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(complex.sect_id));
        by_id("continue_arrow_lbl").innerHTML = complex.lbl;
    }
    else if (user_below(dotted.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(inline.sect_id));
        by_id("continue_arrow_lbl").innerHTML = inline.lbl;
    }
    else if (user_below(operators.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(dotted.sect_id));
        by_id("continue_arrow_lbl").innerHTML = dotted.lbl;
    }
    else {
        on_event_do("continue_arrow", "click",
            () => scroll_to(operators.sect_id));

        by_id("continue_arrow_lbl").innerHTML = operators.lbl;
    }

}
