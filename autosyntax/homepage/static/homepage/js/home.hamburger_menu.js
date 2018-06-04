console.log('homepage/home.hamburger_menu.js\tFROM home.landing.html\tMODULE\n');
import {howtouse, whoami, download, whatisit} from './home.continue_arrow.js'
// HAMBURGER ITEMS
// What is it?
on_event_do("hamburger_item_1", "click",
    () => {
        scroll_to_bezier(whatisit.init_top);
    });

// Download
on_event_do("hamburger_item_2", "click",
    () => {
        scroll_to_bezier(download.init_top);
    });

// How to use
on_event_do("hamburger_item_3", "click",
    () => {
        scroll_to_bezier(howtouse.init_top);

    });

// Who am I?
on_event_do("hamburger_item_4", "click",
    () => {
        console.log('whoami.init_top: ', whoami.init_top);
        scroll_to_bezier(whoami.init_top);
    });

