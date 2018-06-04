console.log('howtouse/htu.continue_arrow.js\tFROM htu.howtouse.html\tMODULE\n');
// set_init_lbl_html("Operators");

//IMPORTANT TO KEEP IT HERE - FILE IS MODULE = LOADS LAST = scrollY's ACCURATE
export let [operators, dotted, inline, complex] = [
    new Section("operators_htu"),
    new Section("dotted_htu"),
    new Section("inline_htu"),
    new Section("complex_htu"),
];

on_event_do("continue_arrow", "click",
    () => {
        scroll_to("operators_htu");
        // decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1);
        continue_arrow_hndl();
    }
);
window.addEventListener("scroll", continue_arrow_hndl);

function continue_arrow_hndl() {
    if (user_below(inline.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(complex.sect_id));
        // by_id("continue_arrow_lbl").innerHTML = complex.lbl;
    }
    else if (user_below(dotted.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(inline.sect_id));
        // by_id("continue_arrow_lbl").innerHTML = inline.lbl;
    }
    else if (user_below(operators.init_top)) {
        on_event_do("continue_arrow", "click",
            () => scroll_to(dotted.sect_id));
        // by_id("continue_arrow_lbl").innerHTML = dotted.lbl;
    }
    else {
        on_event_do("continue_arrow", "click",
            () => scroll_to(operators.sect_id));

        // by_id("continue_arrow_lbl").innerHTML = operators.lbl;
    }

}
