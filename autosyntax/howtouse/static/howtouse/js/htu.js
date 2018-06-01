console.log('howtouse/htu.js\t\t\t\t\tFROM htu.howtouse.html\n');
toggle_pair("animation_1", "animation_2");
toggle_pair("animation_3", "animation_4");
toggle_pair("animation_5", "animation_6");
// toggle_pair("animation_7", "animation_8");
// toggle_pair("animation_9", "animation_10");
set_style("back", "display", "unset");

create_bullet_list('ops_list_overview');
create_bullet_list('complex_ops_ul1');
create_bullet_list('complex_ops_ul2');
create_bullet_list('complex_ops_ul3');
create_bullet_list('complex_ops_ul4');
set_ops_list(
    list = ['list', 'tuple', 'set', 'dict', 'for', 'def', 'class', 'listcomp', 'str', 'print'],
    id = 'ops_list_overview_3'
);
set_ops_list(
    list = ['list', 'tuple', 'set', 'dict', 'str', 'print'],
    id = 'ops_list_dotted'
);

set_ops_list(
    list = ['for', 'listcomp'],
    id = 'ops_list_for'
);


function set_ops_list(list, id) {

    for (let i = 0; i < list.length; i++) {
        let li = by_id(id);

        if (i < list.length - 1)
            li.innerHTML += span(list[i], cls = "monospace-bg it", tail = ', ');
        else
            li.innerHTML += span(list[i], cls = "monospace-bg it", tail = '.');

    }
}

// let sidebar_items = by_id("sidebar").children;
// let items = ["Operators", "Dotted arguments",
//     "Inline methods", "Complex operators"];
//
// let counter = 0;
// for (let i = 0; i < sidebar_items.length; i++) {
//     if (sidebar_items[i].tagName === "DIV") {
//         sidebar_items[i].innerHTML = items[counter];
//         counter += 1;
//     }
// }

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