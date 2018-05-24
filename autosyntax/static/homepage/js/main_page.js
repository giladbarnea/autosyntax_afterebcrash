set_style("whatisit_block", "paddingTop", window.screen.availHeight / 1.5);
set_style("download_block", "paddingTop", window.screen.availHeight / 1.5);
set_style("whoami_block", "paddingTop", window.screen.availHeight / 4);
on_event_do("continue_arrow", "click",
    () => {
        scroll_to("what_is_it_content");
        decrease_opacity(by_id("continue_arrow_lbl"), 0, factor = 1);
    }
);
// What is it?
on_event_do("sidebar_item_1", "click",
    () => scroll_to("what_is_it_content"));

// Download
on_event_do("sidebar_item_2", "click",
    () => scroll_to("download_content"));

// How to use
on_event_do("sidebar_item_3", "click",
    () => scroll_to("howtouse_content"));

// Who am I?
on_event_do("sidebar_item_4", "click",
    () => scroll_to("whoami_content"));