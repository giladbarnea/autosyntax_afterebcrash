function animations_toggle(element, next) {
    element = element_or_by_fn(element, by_id);
    next = element_or_by_fn(next, by_id);

    fade_opacity(element, 0.5, 1, false, () => {
        set_style(element, "display", "none");
        set_style(next, "display", "inherit");
        increase_opacity(next, 1, 1);
    })
}