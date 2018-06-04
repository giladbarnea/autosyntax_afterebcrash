// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('common/responsive.js\t\t\tFROM common.layout.html\n');

// defaults to big desktop up
class ContinueArrow {
    constructor() {
        this.center = "48.5%";
        this.left = '14%';
        this.top = '85%';
    }

    set(media, filename) {
        if (media === big_desktop_up) {
            this.center = "48.5%";
            this.left = '14%';
            if (filename === 'how')
                this.top = '65%';

            else
                this.top = '85%';
        }
        else if (media === desktop_up) {
            this.center = "48.5%";
            this.left = '14%';
            this.top = '85%';
        }
        else {
            this.center = "48.5%";
            this.left = '17%';
            this.top = '85%';
        }
    }
}

let arrow = new ContinueArrow();
set_style("continue_arrow", "left", arrow.center);
set_style("continue_arrow", "top", arrow.top);


const phone_max = 599;
const tablet_portrait_up = 600;
const tablet_landscape_up = 901;
const desktop_up = 1200;
const big_desktop_up = 1800;


on_event_do(window, "resize", on_resize);
try {
    create_bullet_list('overview_cv_list');
    create_bullet_list('skills_languages_cv');
    create_bullet_list('skills_tech_py_cv');
    create_bullet_list('skills_tech_net_cv');
    create_bullet_list('skills_tech_webcloud_cv');
    create_bullet_list('skills_tech_editing_cv');
    create_bullet_list('education_sela_cv');
    create_bullet_list('education_bgu_cv');
    create_bullet_list('military_list_cv');
    create_bullet_list('languages_list_cv');
}
catch (e) {

}

on_resize();


function big_desktop_resize() {

    let filename = get_filename();
    arrow.set(big_desktop_up, filename);
    to_none_mobile();
    body_margins(50, 60, 60, 60);
    fonts_sizes(_60 = 60, _35 = 40,
        _32 = 32, _30 = 30,
        _25 = 25, _23 = 23,
        _20 = 20, _15 = 15);

    pad_body(350);
    tops();
    _left();
    heights();
    widths();
    padding_tops();
    padding_lefts();
    margin_rights();
    margin_tops();
    my_ul();
    margin_lefts();
    back();
    remove_class('pad_body', 'row-1');
}


function desktop_resize() {
    let filename = get_filename();
    arrow.set(desktop_up);
    to_none_mobile();
    body_margins();

    fonts_sizes(_60 = 48, _35 = 40,
        _32 = 28, _30 = 24,
        _25 = 23, _23 = 20,
        _20 = 18, _15 = 15);

    if (filename === 'cv')
        pad_body(230);
    else
        pad_body(250);

    tops(_88 = '86%', _84 = '84%');
    heights(_60 = 45, _30 = 25);
    widths(_60 = 45, _30 = 25);
    padding_tops();
    padding_lefts(_20 = 20, _30 = 25, _40 = 35, _45 = 35, _65 = 65);
    _left(_90 = '90%');

    if (filename === 'how') {
        margin_rights(_100 = '100px', _200 = 100, _300 = 125, _400 = 175, _500 = 200);
    }
    else {
        margin_rights(_100 = '100px', _200 = 100, _300 = 150, _400 = 200, _500 = 200);
    }
    margin_tops();


    if (filename === 'cv') {
        my_ul('1em');
    }
    else {
        my_ul('2.5em');
    }

    margin_lefts(_100 = 100, _136 = 139, _150 = 150);

    back();
    remove_class('pad_body', 'row-1');

}


function tablet_landscape_resize() {
    arrow.set(tablet_landscape_up);

    to_none_mobile();

    // BODY
    body_margins(top = 50, right = 40, bottom = 60, left = 40);

    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();

    // FONT SIZE
    fonts_sizes(_60 = 40, _35 = 35, _32 = 28, _30 = 22, _25 = 20, _23 = 18, _20 = 14, _15 = 15);
    remove_class('pad_body', 'row-1');
    tops(_88 = '86%', _84 = '81%');
    _left(_90 = '90%');
    heights(_60 = 40, _30 = 25);
    widths(_60 = 40, _30 = 25);
    padding_tops(_20 = 15, _25 = 25);
    margin_tops(_20 = 15, _25 = 20);
    my_ul('1em');
    margin_lefts(_100 = 70, _136 = 110, _150 = 120);
    back(left = '6%', _width = 70);


    if (filename === 'cv')
        pad_body(140);

    else
        pad_body(180);


    if (filename === 'cv') {
        padding_lefts(_20 = 15, _30 = 23, _40 = 17, _45 = 35, _65 = 50);
    }
    else if (filename === 'how') {
        padding_lefts(_20 = 15, _30 = 23, _40 = 20, _45 = 35, _65 = 50);
    }
    else {
        padding_lefts(_20 = 15, _30 = 23, _40 = 30, _45 = 35, _65 = 65);
    }


    if (filename === 'how') {
        margin_rights(_100 = '100px', _200 = 30, _300 = 0, _400 = 80, _500 = 60);
    }
    else if (filename === 'cv') {
        margin_rights(_100 = '100px', _200 = 60, _300 = 0, _400 = 80, _500 = 60);
    }
    else {
        margin_rights(_100 = '100px', _200 = 60, _300 = 100, _400 = 100, _500 = 60);
    }


}


function on_resize() {
    let w = window.screen.availWidth;
    if (w >= big_desktop_up) {
        console.log('big_desktop_up. w: ', w);
        big_desktop_resize();
    }
    else if (w >= desktop_up) {
        console.log('desktop_up. w: ', w);
        desktop_resize();
    }
    else if (w >= tablet_landscape_up) {
        console.log('tablet_landscape_up. w: ', w);
        tablet_landscape_resize();
    }
    else if (w >= tablet_portrait_up) {
        console.log('tablet_portrait_up. w: ', w);
        tablet_portrait();
    }
    else if (w <= phone_max) {
        console.log('phone_max. w: ', w);
        phone_landscape();
    }
    else {
        console.warn('Got to final else in responsive. w: ', w);
    }
}