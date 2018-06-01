console.log('howtouse/htu.hamburger_menu.js\tFROM htu.hamburger_menu.html\tMODULE\n');
import {operators, dotted, inline, complex} from './htu.continue_arrow.js';

by_id('hamburger_item_1').innerHTML = 'Operators overview';
by_id('hamburger_item_2').innerHTML = '.Dotted arguments';
by_id('hamburger_item_3').innerHTML = 'Inline methods()';
by_id('hamburger_item_4').innerHTML = 'Complex operators';
// HAMBURGER ITEMS
// What is it?
on_event_do("hamburger_item_1", "click",
    () => {
        scroll_to_bezier(operators.init_top);
    });

// Download
on_event_do("hamburger_item_2", "click",
    () => {
        scroll_to_bezier(dotted.init_top);
    });

// How to use
on_event_do("hamburger_item_3", "click",
    () => {
        scroll_to_bezier(inline.init_top);

    });

// Who am I?
on_event_do("hamburger_item_4", "click",
    () => {
        scroll_to_bezier(complex.init_top);
    });

