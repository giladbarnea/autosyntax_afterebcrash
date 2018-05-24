// set_style("continue_arrow", "visibility", "none");

// console.log('\n\nHI!@!!\n');

window.onload = () => {
    by_id("continue_arrow").style["display"] = "none";
    on_event_do("animation_1", "click",
        () => animations_toggle("animation_1",
            "animation_2"));
    on_event_do("animation_2", "click",
        () => animations_toggle("animation_2",
            "animation_1"));

    on_event_do("animation_3", "click",
        () => animations_toggle("animation_3",
            "animation_4"));
    on_event_do("animation_4", "click",
        () => animations_toggle("animation_4",
            "animation_3"));

    on_event_do("animation_5", "click",
        () => animations_toggle("animation_5",
            "animation_6"));
    on_event_do("animation_6", "click",
        () => animations_toggle("animation_6",
            "animation_5"));
    set_style("back", "display", "unset");

    let sidebar_items = by_id("sidebar").children;
    // let new_sidebar_items = sidebar_items.filter(
    //     i => i.tagName === "DIV");
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

function animations_toggle(element, other) {
    element = element_or_by_fn(element, by_id);
    other = element_or_by_fn(other, by_id);
    set_style(element, "display", "none");
    set_style(other, "display", "inherit");

}