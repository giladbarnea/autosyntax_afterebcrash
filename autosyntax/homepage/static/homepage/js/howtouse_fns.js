// set_style("continue_arrow", "visibility", "none");

// console.log('\n\nHI!@!!\n');

window.onload = () => {
    by_id("continue_arrow").style["display"] = "none";

    // 1:2
    toggle_pair("animation_1", "animation_2");
    // on_event_do("animation_1", "click",
    //     () => _animations_toggle("animation_1",
    //         "animation_2"));
    // on_event_do("animation_2", "click",
    //     () => _animations_toggle("animation_2",
    //         "animation_1"));

    // 3:4
    toggle_pair("animation_3", "animation_4");
    // on_event_do("animation_3", "click",
    //     () => _animations_toggle("animation_3",
    //         "animation_4"));
    // on_event_do("animation_4", "click",
    //     () => _animations_toggle("animation_4",
    //         "animation_3"));
    // 5:6
    toggle_pair("animation_5", "animation_6");
    // on_event_do("animation_5", "click",
    //     () => _animations_toggle("animation_5",
    //         "animation_6"));
    // on_event_do("animation_6", "click",
    //     () => _animations_toggle("animation_6",
    //         "animation_5"));

    // 7:8
    toggle_pair("animation_7", "animation_8");
    // on_event_do("animation_7", "click",
    //     () => _animations_toggle("animation_7",
    //         "animation_8"));
    // on_event_do("animation_8", "click",
    //     () => _animations_toggle("animation_8",
    //         "animation_7"));

    // 9:10
    toggle_pair("animation_9", "animation_10");
    // on_event_do("animation_7", "click",
    //     () => _animations_toggle("animation_7",
    //         "animation_8"));
    // on_event_do("animation_8", "click",
    //     () => _animations_toggle("animation_8",
    //         "animation_7"));
    set_style("back", "display", "unset");

    let sidebar_items = by_id("sidebar").children;
    let items = ["General behavior", "Dotted arguments",
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
    a = element_or_by_fn(a);
    b = element_or_by_fn(b);
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