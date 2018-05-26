console.log('cv_page.js');

by_id("continue_arrow").style["display"] = "none";
set_style("back", "display", "unset");
set_style("pad_body", "paddingLeft", 150);
let sidebar_items = by_id("sidebar").children;
let items = ['Overview', 'Experience', 'Skills',
    'Education', 'M.Service', 'Languages', 'Experience'];

let counter = 0;
for (let i = 0; i < sidebar_items.length; i++) {
    if (sidebar_items[i].tagName === "DIV") {
        sidebar_items[i].innerHTML = items[counter];
        counter += 1;
    }
}

// Operators
on_event_do("sidebar_item_1", "click",
    () => scroll_to("overview_cv"));

// .Dotted arguments
on_event_do("sidebar_item_2", "click",
    () => scroll_to("experience_cv"));

// Inline methods()
on_event_do("sidebar_item_3", "click",
    () => scroll_to("skills_cv"));

// Complex operators
on_event_do("sidebar_item_4", "click",
    () => scroll_to("education_cv"));

on_event_do("sidebar_item_5", "click",
    () => scroll_to("military_cv"));


on_event_do("sidebar_item_6", "click",
    () => scroll_to("languages_cv"));
