console.log('continue_arrow_howtouse.js\n');
set_init_lbl_html("Operators");
let operators_init_top = get_init_top("operators_htu");
let dotted_init_top = get_init_top("dotted_htu");
let inline_init_top = get_init_top("inline_htu");

on_event_do("continue_arrow", "mouseover", display_continue_arrow_lbl);
on_event_do("continue_arrow", "mouseleave", hide_continue_arrow_lbl);