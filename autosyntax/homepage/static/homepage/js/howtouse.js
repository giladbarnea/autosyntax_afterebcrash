// console.log('\n\nHI!@!!\n');
console.log('howtouse.js\n');
window.onload = () => {

    toggle_pair("animation_1", "animation_2");
    toggle_pair("animation_3", "animation_4");
    toggle_pair("animation_5", "animation_6");
    // toggle_pair("animation_7", "animation_8");
    toggle_pair("animation_9", "animation_10");

    set_style("back", "display", "unset");

    let sidebar_items = by_id("sidebar").children;
    let items = ["Operators", "Dotted arguments",
        "Inline methods", "something"];
    let counter = 0;
    for (let i = 0; i < sidebar_items.length; i++) {
        if (sidebar_items[i].tagName === "DIV") {
            sidebar_items[i].innerHTML = items[counter];
            counter += 1;
        }
    }
};

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