console.log('home.hamburger_menu.js');
import {howtouse, whoami, download, whatisit} from './home.continue_arrow.js'
// HAMBURGER ITEMS
// What is it?
on_event_do("hamburger_item_1", "click",
    () => {
        scroll_to_bezier(whatisit.init_top);
        // close_hamb_menu();
    });

// Download
on_event_do("hamburger_item_2", "click",
    () => {
        scroll_to_bezier(download.init_top);
        // close_hamb_menu();
    });

// How to use
on_event_do("hamburger_item_3", "click",
    () => {
        scroll_to_bezier(howtouse.init_top);
        // close_hamb_menu();

    });

// Who am I?
on_event_do("hamburger_item_4", "click",
    () => {
        scroll_to_bezier(whoami.init_top);
        // close_hamb_menu();
    });