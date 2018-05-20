on_call(window, "resize", on_resize);

let is_go_up_visible = false;
on_resize();


function on_resize() {
    let w = window.screen.availWidth;
    console.log(w);
    let dyn_console_menu = true;
    let dyn_body_left = true;
    let dyn_body_right = true;
    let dyn_pad_body = true;
    let dyn_works = true;
    let dyn_sidebar = true;
    let dyn_space = true;
    resize_body_left();
    resize_body_right();
    resize_pad_body();
    resize_work();
    resize_nav_buttons();
    resize_space();
    resize_sidebar();

    place_tabs_before_arrows_in_whatisit();

    function place_tabs_before_arrows_in_whatisit() {
        function _place_tabs(class_num, tabs_num) {
            let tabs = by_class("tabs-" + class_num);
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].innerHTML = "";
                for (let j = 0; j < tabs_num; j++)
                    tabs[i].innerHTML += "&emsp;";
                tabs[i].innerHTML += ">";
            }
        }

        let base = Math.round(w / 500);
        _place_tabs("5", base);
        _place_tabs("16", base + 11);
        _place_tabs("21", base + 16);
        _place_tabs("22", base + 17);

    }


    function resize_nav_buttons() {
        if (w < 700 && w > 550) {
            dyn_console_menu = true;
            set_style("console_menu", "height", w / 24);
            set_style("continue_arrow", "height", w / 14.4);
            set_style("go_up", "height", w / 14.4);

        }
        else if (w <= 550) {
            dyn_console_menu = true;
            set_style("console_menu", "height", w / 20);
            set_style("continue_arrow", "height", w / 12);
            set_style("go_up", "height", w / 12);
        }
        else if (dyn_console_menu) {
            dyn_console_menu = false;
            set_style("console_menu", "height", 30);
            set_style("continue_arrow", "height", 50);
            set_style("go_up", "height", 50);
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
            dyn_space = true;
            set_style_to_collection(spaces, "fontSize", w / 21.7);
        }
        else if (w <= 500) {
            dyn_space = true;
            set_style_to_collection(spaces, "fontSize", w / 24.5);
        }
        else if (dyn_space) {
            dyn_space = false;
            set_style_to_collection(spaces, "fontSize", 60);
        }
    }

    function resize_pad_body() {
        if (w < 1300 && w > 1000) {
            dyn_pad_body = true;
            set_style("pad_body", "paddingLeft", w / 4.5);
            // console.log('pad body: ', w / 4.5)
        }
        else if (w <= 1000 && w > 880) {
            dyn_pad_body = true;
            set_style("pad_body", "paddingLeft", w / 4.2);
            // console.log('pad body: ', w / 4.2)
        }
        else if (w <= 880 && w > 550) {
            dyn_pad_body = true;
            set_style("pad_body", "paddingLeft", w / 3.7);
            // console.log('pad body: ', w / 3.7)
        }
        else if (w <= 550) {
            dyn_pad_body = true;
            set_style("pad_body", "paddingLeft", w / 3.7);
            // console.log('pad body: ', w / 3.7)
        }
        else if (dyn_pad_body) {
            dyn_pad_body = false;
            set_style("pad_body", "paddingLeft", 250);
        }
    }

    function resize_sidebar() {
        let sidebar_items = by_class("sidebar-item");
        if (w < 1300 && w > 1000) {
            dyn_sidebar = true;
            set_style("sidebar", "paddingLeft", 20);
            set_style_to_collection(sidebar_items, "fontSize", Math.pow(w, 0.43));
        }
        else if (w <= 1000) {
            dyn_sidebar = true;
            set_style("sidebar", "paddingLeft", w / 100);
            set_style_to_collection(sidebar_items, "fontSize", Math.pow(w, 0.44));
        }
        else if (dyn_sidebar) {
            dyn_sidebar = false;
            set_style("sidebar", "paddingLeft", 20);
            set_style_to_collection(sidebar_items, "fontSize", 23);
        }
    }

    function resize_work() {
        let works = by_class("work");
        if (w < 1300 && w > 800) {
            dyn_works = true;
            set_style_to_collection(works, "fontSize", Math.pow(w, 0.47));

        }
        else if (w <= 800 && w > 650) {
            dyn_works = true;
            set_style_to_collection(works, "fontSize", Math.pow(w, 0.46));
        }
        else if (w <= 650) {
            dyn_works = true;
            set_style_to_collection(works, "fontSize", Math.pow(w, 0.43));
        }
        else if (dyn_works) {
            dyn_works = false;
            set_style_to_collection(works, "fontSize", 30);

        }
    }

}