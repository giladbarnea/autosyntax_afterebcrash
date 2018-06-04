// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('common/mobile.js\t\t\t\tFROM common.layout.html\n');

function tablet_portrait() {
    to_mobile();

    let width = window.screen.availWidth;
    let height = window.screen.availHeight;
    let filename = get_filename();

    let body_margin_left = 90 + ((width - 900) / 5);
    let body_margin_top = 50 + ((width - 900) / 7.5);
    body_margins(body_margin_top, right = body_margin_left / 2, bottom = 60, body_margin_left);
    let ham_img_pad_bott = body_margin_top + (10 + (600 - width) / 10);
    let ham_img_pad_top = body_margin_top + (15 + (600 - width) / 15);

    hamburger_img(mt = -body_margin_top - 5, pb = ham_img_pad_bott, pt = ham_img_pad_top, pr = width);
    set_style('hamburger_home', 'marginLeft', '37%');
    let fshamburger;
    let ham_menu_mt;
    let ham_menu_ml;
    if (filename === 'cv') {

        fshamburger = height / 20 < width / 14 ? height / 20 : width / 14;
        ham_menu_mt = '-110%';
        ham_menu_ml = '-95%';
    } else {

        fshamburger = height / 17 < width / 14 ? height / 17 : width / 14;
        ham_menu_mt = '-100%';
        ham_menu_ml = '-100%';
    }

    fonts_sizes(_60 = 45, _35 = 35, _32 = 28, _30 = 22, _25 = 20, _23 = 18, _20 = 14, _15 = 15,
        fshamburger);
    hamburger_menu(mt = ham_menu_mt, ml = ham_menu_ml);
    pad_body(0);
    add_classes('pad_body', 'row-1');
    tops(_88 = '90%', _84 = '81%');
    _left('85%');
    heights(_60 = 40, _30 = 25);
    widths(_60 = 40, _30 = 25);
    padding_tops(_20 = 15, _25 = 25);

    let padding_left_40 = "25px";
    padding_lefts(_20 = 15, _30 = 23, _40 = padding_left_40, _45 = 35, _65 = 65);
    margin_rights(_100 = '100px', _200 = 60, _300 = 30, _400 = 30, _500 = 60);
    margin_tops(_20 = 15, _25 = 20);
    my_ul('1em');
    margin_lefts(_100 = 70, _136 = 110, _150 = 120);
    // back(left = '6%', _width = 70);
    let works = by_class('work');
    for (let i = 0; i < works.length; i++) {
        if (works[i].tagName === "DIV" &&
            works[i].style['paddingLeft'] === padding_left_40) {
            set_style(works[i], 'paddingLeft', 0);
        }
    }


}

function phone_landscape() {
    to_mobile();

    let width = window.screen.availWidth;
    let height = window.screen.availHeight;
    let filename = get_filename();

    let body_margin_left = 73 + ((width - 600) / 5);
    let body_margin_top = 50 + ((width - 600) / 7.5);
    body_margins(body_margin_top, right = 10, bottom = 60, body_margin_left);
    let ham_img_pad_bott = body_margin_top + (5 + (360 - width) / (60 / 7));
    let ham_img_pad_top = body_margin_top + (15 + (360 - width) / 30);
    hamburger_img(mt = -body_margin_top - 5, pb = ham_img_pad_bott, pt = ham_img_pad_top, pr = width);
    set_style('hamburger_home', 'marginLeft', '32%');
    let fshamburger;
    let ham_menu_mt;
    let ham_menu_ml;
    if (filename === 'cv') {

        fshamburger = height / 20 < width / 14 ? height / 20 : width / 14;
        ham_menu_mt = '-110%';
        ham_menu_ml = '-95%';
    } else {

        fshamburger = height / 17 < width / 14 ? height / 17 : width / 14;
        ham_menu_mt = '-100%';
        ham_menu_ml = '-100%';
    }
    fonts_sizes(_60 = 25, _35 = 35, _32 = 15, _30 = 16,
        _25 = 12, _23 = 11, _20 = 10, _15 = 9, fshamburger);

    hamburger_menu(mt = ham_menu_mt, ml = ham_menu_ml);
    pad_body(0);
    add_classes('pad_body', 'row-1');
    tops(_88 = '90%', _84 = '81%');
    _left('85%');
    heights(_60 = 40, _30 = 25);
    widths(_60 = 40, _30 = 25);
    padding_tops(_20 = 10, _25 = 15);

    let padding_left_40 = "0px";

    if (filename === 'cv')
        padding_lefts(_20 = 15, _30 = 7, _40 = 17, _45 = 35, _65 = 30);

    else
        padding_lefts(_20 = 15, _30 = 10, _40 = padding_left_40, _45 = 35, _65 = 65);

    if (filename === 'cv')
        margin_rights(_100 = 20, _200 = 20, _300 = 30, _400 = 20, _500 = 20);
    else if (filename === 'how')
        margin_rights(_100 = 20, _200 = 20, _300 = 30, _400 = 20, _500 = 60);
    else
        margin_rights(_100 = 20, _200 = 60, _300 = 30, _400 = 20, _500 = 60);


    if (filename === 'how')
        margin_tops(_20 = 10, _25 = 10);
    else if (filename === 'cv')
        margin_tops(_20 = 10, _25 = 15);
    else
        margin_tops(_20 = 15, _25 = 20);

    my_ul('1em');
    margin_lefts(_100 = 30, _136 = 44, _150 = 50);
    // back(left = '6%', _width = 70);
    if (filename === undefined)
        set_style('download_file_size', 'marginLeft', 0);
    let works = by_class('work');
    for (let i = 0; i < works.length; i++) {
        if (works[i].tagName === "DIV" &&
            works[i].style['paddingLeft'] === padding_left_40) {
            set_style(works[i], 'paddingLeft', 0);
        }
    }

}