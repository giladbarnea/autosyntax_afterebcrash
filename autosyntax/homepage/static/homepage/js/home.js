console.log('home.js\n');
set_style("whatisit_block", "paddingTop", window.screen.availHeight / 3);
set_style("download_block", "paddingTop", window.screen.availHeight / 5);
set_style("whoami_block", "paddingTop", window.screen.availHeight / 4);

create_bullet_list('principles_htu');

// What is it?
on_event_do("sidebar_item_1", "click",
    () => scroll_to("whatisit_content"));

// Download
on_event_do("sidebar_item_2", "click",
    () => scroll_to("download_content"));

// How to use
on_event_do("sidebar_item_3", "click",
    () => scroll_to("howtouse_content"));

// Who am I?
on_event_do("sidebar_item_4", "click",
    () => scroll_to("whoami_content"));


// HAMBURGER ITEMS
// What is it?
on_event_do("hamburger_item_1", "click",
    () => {
        // scroll_to_linear("whatisit_content", 10);
        scroll_to_linear(whatisit.init_top, 10);
        close_hamb_menu();
    });

// Download
on_event_do("hamburger_item_2", "click",
    () => {
        scroll_to_linear(download.init_top, 10);
        close_hamb_menu();
    });

// How to use
on_event_do("hamburger_item_3", "click",
    () => {
        scroll_to_linear(howtouse.init_top, 10);
        close_hamb_menu();

    });

// Who am I?
on_event_do("hamburger_item_4", "click",
    () => {
        scroll_to_linear(whoami.init_top, 10);
        close_hamb_menu();
    });



