console.log('homepage/home.js\t\t\t\tFROM home.landing.html\n');

set_style("whatisit_block", "paddingTop", window.screen.availHeight / 3);
set_style("download_block", "paddingTop", window.screen.availHeight / 5);
set_style("whoami_block", "paddingTop", window.screen.availHeight / 4);


let has_whoami_been_emphasized = false;

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

function emphasize_whoami() {
    let fs23_fontsize = by_class('fs23')[0].style['fontSize'];
    set_style('sidebar_item_4', 'fontSize', fs23_fontsize);
    set_style('sidebar_item_4', 'color', 'white');
    has_whoami_been_emphasized = true;
}

// Who am I? => white
// set_style('sidebar_item_4', 'color', 'white');
// set_style('sidebar_item_4', 'opacity', '0.7');
// remove_class(`sidebar_item_4`, 'fs20');
// add_classes(`sidebar_item_4`, 'fs23');



