// window.onload = () => {
console.log('responsiveness_mgr.js\n');
let phone_max = 599;
let tablet_portrait_up = 600;
let tablet_landscape_up = 900;
let desktop_up = 1200;
let big_desktop_up = 1800;


on_event_do(window, "resize", on_resize);

// RESOLUTIONS
// 1920
// 1536
// 1200X800 GUY

on_resize();


function on_resize() {
    let w = window.screen.availWidth;
    console.log('w: ', w);
    let dyn_console_menu = true;
    let dyn_body_left = true;
    let dyn_body_right = true;
    let dyn_pad_body = true;
    let dyn_works = true;
    let dyn_sidebar = true;
    let dyn_space = true;
    resize_nav_buttons();
    // resize_body_left();
    // resize_body_right();
    resize_pad_body();
    // resize_work();
    // resize_space();
    resize_sidebar();
    resize_margin_right_classes();


    function resize_margin_right_classes() {
        let m_right_300 = by_class("mr300");
        let m_right_200 = by_class("m-right-200");
        // let code_blocks = by_class("code-block");
        // let basic_texts = by_class("basic-text");
        if (w < 1536 && w > 1300) {
            set_style_to_collection(m_right_300, "marginRight", 200);
            // set_style_to_collection(code_blocks, "marginRight", 200);
            // set_style_to_collection(basic_texts, "marginRight", 200);
            set_style_to_collection(m_right_200, "marginRight", 150);
        }
        else if (w <= 1300 && w > 1000) {
            set_style_to_collection(m_right_300, "marginRight", 150);
            // set_style_to_collection(code_blocks, "marginRight", 150);
            // set_style_to_collection(basic_texts, "marginRight", 150);
            set_style_to_collection(m_right_200, "marginRight", 100);
        }
        else {
            set_style_to_collection(m_right_300, "marginRight", 300);
            // set_style_to_collection(code_blocks, "marginRight", 300);
            // set_style_to_collection(basic_texts, "marginRight", 200);
            set_style_to_collection(m_right_200, "marginRight", 200);
        }
    }

    function resize_nav_buttons() {
        if (w < 700 && w > 550) {
            // dyn_console_menu = true;
            // set_style("console_menu", "height", w / 24);
            // set_style("continue_arrow", "height", w / 14.4);
            // set_style("go_up", "height", w / 14.4);

            dyn_console_menu = false;
            set_style("console_menu", "height", 30);
            set_style("continue_arrow", "height", 50);
            set_style("go_up", "height", 50);
            set_style("back", "height", 50);

        }
        else if (w <= 550) {
            // dyn_console_menu = true;
            // set_style("console_menu", "height", w / 20);
            // set_style("continue_arrow", "height", w / 12);
            // set_style("go_up", "height", w / 12);
            // set_style("back", "height", w / 12);

            dyn_console_menu = false;
            set_style("console_menu", "height", 30);
            set_style("continue_arrow", "height", 50);
            set_style("go_up", "height", 50);
            set_style("back", "height", 50);
        }
        else if (dyn_console_menu) {
            dyn_console_menu = false;
            set_style("console_menu", "height", 30);
            set_style("continue_arrow", "height", 50);
            set_style("go_up", "height", 50);
            set_style("back", "height", 50);
        }
    }

    function resize_body_left() {
        if (w < 700 && w > 550) {
            dyn_body_left = true;
            set_style(document.body, "marginLeft", Math.pow(w, 0.6));
        }
        else if (w <= 550) {
            dyn_body_left = true;
            set_style(document.body, "marginLeft", Math.pow(w, 0.5));
        }
        else if (dyn_body_left) {
            dyn_body_left = false;
            set_style(document.body, "marginLeft", 60);
        }
    }

    function resize_body_right() {
        if (w <= 500) {
            dyn_body_right = true;
            set_style(document.body, "marginRight", w / 10);
            // console.log('body margin right: ', w / 10);
        }
        else if (dyn_body_right) {
            dyn_body_right = false;
            set_style(document.body, "marginRight", 60);
        }

    }

    function resize_space() {
        let spaces = by_class("space");
        if (w < 1300 && w > 500) {
            // dyn_space = true;
            // set_style_to_collection(spaces, "fontSize", w / 21.7);

            dyn_space = false;
            set_style_to_collection(spaces, "fontSize", 60);
        }
        else if (w <= 500) {
            // dyn_space = true;
            // set_style_to_collection(spaces, "fontSize", w / 24.5);

            dyn_space = false;
            set_style_to_collection(spaces, "fontSize", 60);
        }
        else if (dyn_space) {
            dyn_space = false;
            set_style_to_collection(spaces, "fontSize", 60);
        }
    }

    function resize_pad_body() {
        if (w < 1920 && w > 1300) {
            dyn_pad_body = true;
            // set_style("pad_body", "paddingLeft", w / 4.5);
            set_style("pad_body", "paddingLeft", 250);
        }
        else if (w <= 1300 && w > 1000) {
            dyn_pad_body = true;
            // set_style("pad_body", "paddingLeft", w / 4.5);
            set_style("pad_body", "paddingLeft", 250);
        }
        else if (w <= 1000 && w > 880) {
            dyn_pad_body = true;
            // set_style("pad_body", "paddingLeft", w / 4.2);
            set_style("pad_body", "paddingLeft", 250);
        }
        else if (w <= 880 && w > 550) {
            dyn_pad_body = true;
            // set_style("pad_body", "paddingLeft", w / 3.7);
            set_style("pad_body", "paddingLeft", 250);
        }
        else if (w <= 550) {
            dyn_pad_body = true;
            // set_style("pad_body", "paddingLeft", w / 3.7);
            set_style("pad_body", "paddingLeft", 250);
        }
        else if (dyn_pad_body) {
            dyn_pad_body = false;
            set_style("pad_body", "paddingLeft", 350);
        }
    }

    function resize_sidebar() {
        let sidebar_items = by_class("sidebar-item");
        if (w < 1300 && w > 1000) {
            // dyn_sidebar = true;
            // set_style("sidebar", "paddingLeft", 20);
            // set_style_to_collection(sidebar_items, "fontSize", Math.pow(w, 0.43));

            dyn_sidebar = false;
            set_style("sidebar", "paddingLeft", 20);
            // set_style_to_collection(sidebar_items, "fontSize", 23);
        }
        else if (w <= 1000) {
            // dyn_sidebar = true;
            // set_style("sidebar", "paddingLeft", w / 100);
            // set_style_to_collection(sidebar_items, "fontSize", Math.pow(w, 0.44));

            dyn_sidebar = false;
            set_style("sidebar", "paddingLeft", 20);
            // set_style_to_collection(sidebar_items, "fontSize", 23);
        }
        else if (dyn_sidebar) {
            dyn_sidebar = false;
            set_style("sidebar", "paddingLeft", 20);
            // set_style_to_collection(sidebar_items, "fontSize", 23);
        }
    }

    function resize_work() {
        let works = by_class("fs30");
        if (w < 1300 && w > 800) {
            // dyn_works = true;
            // set_style_to_collection(works, "fontSize", Math.pow(w, 0.47));

            dyn_works = false;
            set_style_to_collection(works, "fontSize", 30);

        }
        else if (w <= 800 && w > 650) {
            // dyn_works = true;
            // set_style_to_collection(works, "fontSize", Math.pow(w, 0.46));

            dyn_works = false;
            set_style_to_collection(works, "fontSize", 30);
        }
        else if (w <= 650) {
            // dyn_works = true;
            // set_style_to_collection(works, "fontSize", Math.pow(w, 0.43));

            dyn_works = false;
            set_style_to_collection(works, "fontSize", 30);
        }
        else if (dyn_works) {
            dyn_works = false;
            set_style_to_collection(works, "fontSize", 30);

        }
    }

}

// };