on_event_do("animation_1", "click",
    () => animations_toggle("animation_1",
        "animation_2"));
on_event_do("animation_2", "click",
    () => animations_toggle("animation_2",
        "animation_1"));


function animations_toggle(element, other) {
    element = element_or_by_fn(element, by_id);
    other = element_or_by_fn(other, by_id);
    set_style(element, "display", "none");
    set_style(other, "display", "inherit");

}