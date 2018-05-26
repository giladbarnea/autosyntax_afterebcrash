console.log('howtouse_page.js\n');

toggle_pair("animation_1", "animation_2");
toggle_pair("animation_3", "animation_4");
toggle_pair("animation_5", "animation_6");
// toggle_pair("animation_7", "animation_8");
// toggle_pair("animation_9", "animation_10");

set_style("back", "display", "unset");

let sidebar_items = by_id("sidebar").children;
let items = ["Operators", "Dotted arguments",
    "Inline methods", "Complex operators"];

let counter = 0;
for (let i = 0; i < sidebar_items.length; i++) {
    if (sidebar_items[i].tagName === "DIV") {
        sidebar_items[i].innerHTML = items[counter];
        counter += 1;
    }
}

// Operators
on_event_do("sidebar_item_1", "click",
    () => scroll_to("operators_htu"));

// .Dotted arguments
on_event_do("sidebar_item_2", "click",
    () => scroll_to("dotted_htu"));

// Inline methods()
on_event_do("sidebar_item_3", "click",
    () => scroll_to("inline_htu"));

// Complex operators
on_event_do("sidebar_item_4", "click",
    () => scroll_to("complex_htu"));

on_event_do("1900_click", "click",
    () => {
        if (by_id('1900_res').style['display'] === 'none')
            set_style('1900_res', 'display', 'unset');

        else
            set_style('1900_res', 'display', 'none');
    });

function toggle_pair(a, b) {
    a = element_or_by_fn(a, by_id);
    b = element_or_by_fn(b, by_id);
    on_event_do(a, "click",
        () => _animations_toggle(a,
            b));
    on_event_do(b, "click",
        () => _animations_toggle(b,
            a));
}

function _animations_toggle(element, other) {
    // element = element_or_by_fn(element, by_id);
    // other = element_or_by_fn(other, by_id);
    set_style(element, "display", "none");
    set_style(other, "display", "inherit");

}