// TOP SCRIPT, DONT CALL ANY FNS HERE
console.log('common/responsive.js\t\tFROM common.layout.html\n');

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
// create_bullet_list('overview_cv_list');
// create_bullet_list('skills_languages_cv');
// create_bullet_list('skills_tech_py_cv');
// create_bullet_list('skills_tech_net_cv');
// create_bullet_list('skills_tech_webcloud_cv');
// create_bullet_list('skills_tech_editing_cv');
// create_bullet_list('education_sela_cv');
// create_bullet_list('education_bgu_cv');
// create_bullet_list('military_list_cv');
// create_bullet_list('languages_list_cv');
on_resize();


function big_desktop_resize() {
    // let filename = window.location.pathname
    //     .split("/")
    //     .filter(c => c.length)
    //     .pop();

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
    // let filename = window.location.pathname
    //     .split("/")
    //     .filter(c => c.length)
    //     .pop();
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
        // set_style_to_collection('mr400', 'marginRight', 175);
        // set_style_to_collection('mr300', 'marginRight', 125);
        // set_style_to_collection('mr200', 'marginRight', 100);
    }
    else {
        margin_rights(_100 = '100px', _200 = 100, _300 = 150, _400 = 200, _500 = 200);
        // set_style_to_collection('mr400', 'marginRight', 200);
        // set_style_to_collection('mr300', 'marginRight', 150);
        // set_style_to_collection('mr200', 'marginRight', 100);
    }
    // set_style_to_collection('mr500', 'marginRight', 200);
    margin_tops();


    if (filename === 'cv') {
        my_ul('1em');
        // set_style_to_collection('my-ul', 'paddingLeft', "1em");
    }
    else {
        my_ul('2.5em');
        // set_style_to_collection('my-ul', 'paddingLeft', "2.5em");
    }

    margin_lefts(_100 = 100, _136 = 139, _150 = 150);
    // ML MARGIN LEFT

    back();
    remove_class('pad_body', 'row-1');
    // set_style_to_collection('top88', 'top', "86%");
    // set_style_to_collection('top84', 'top', "81%");
    // set_style_to_collection('l90', 'left', "90%");
    // set_style_to_collection('height60', 'height', 45);
    // set_style_to_collection('height30', 'height', 25);
    // set_style_to_collection('width60', 'width', 45);
    // set_style_to_collection('width30', 'width', 25);
    // set_style_to_collection('pt20', 'paddingTop', 20);
    // set_style_to_collection('pl20', 'paddingLeft', 20);
    // set_style_to_collection('pl30', 'paddingLeft', 25);
    // set_style_to_collection('pl40', 'paddingLeft', 35);
    // //NO USE TO PL45
    // set_style_to_collection('pl45', 'paddingLeft', 35);
    // set_style_to_collection('pl65', 'paddingLeft', 65);
    // set_style_to_collection('mt20', 'marginTop', 20);
    // set_style_to_collection('mt25', 'marginTop', 25);
    // set_style_to_collection('ml100', 'marginLeft', 100);
    //PRESS TO TOGGLE .NUTELLA COMPENSATION
    // set_style_to_collection('ml150', 'marginLeft', 150);
    // set_style_to_collection('ml136', 'marginLeft', 139);
    // set_style('back', 'left', '5%');
    // set_style('back', 'width', '80px');
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
    back(left = '6%', width = 70);
    // set_style_to_collection('fs60', 'fontSize', 40);
    //
    // // BR 2.5
    // set_style_to_collection('fs35', 'fontSize', 35);
    // set_style_to_collection('fs32', 'fontSize', 28);
    // set_style_to_collection('fs30', 'fontSize', 22);
    // set_style_to_collection('fs25', 'fontSize', 20);
    // set_style_to_collection('fs23', 'fontSize', 18);
    //
    // set_style_to_collection('fs20', 'fontSize', 14);
    // set_style_to_collection('fs15', 'fontSize', 15);
    //


    // PAD-BODY
    if (filename === 'cv')
        pad_body(140);
    // set_style_to_collection('pad-body', 'paddingLeft', 140);

    else
        pad_body(180);
    // set_style_to_collection('pad-body', 'paddingLeft', 180);

    // set_style_to_collection('top88', 'top', "86%");
    // set_style_to_collection('top84', 'top', "81%");
    // set_style_to_collection('l90', 'left', "90%");
    //

    // HEIGHT WIDTH
    // set_style_to_collection('height60', 'height', 40);
    // set_style_to_collection('height30', 'height', 25);
    //
    // set_style_to_collection('width60', 'width', 40);
    // set_style_to_collection('width30', 'width', 25);
    //

    // PT PADDING TOP

    // set_style_to_collection('pt20', 'paddingTop', 15);


    // PL PADDING LEFT
    // set_style_to_collection('pl20', 'paddingLeft', 15);
    // set_style_to_collection('pl30', 'paddingLeft', 23);

    if (filename === 'cv') {
        padding_lefts(_20 = 15, _30 = 23, _40 = 17, _45 = 35, _65 = 50);
        // set_style_to_collection('pl65', 'paddingLeft', 50);
        // set_style_to_collection('pl40', 'paddingLeft', 17);
    }
    else if (filename === 'how') {
        padding_lefts(_20 = 15, _30 = 23, _40 = 20, _45 = 35, _65 = 50);
        // set_style_to_collection('pl65', 'paddingLeft', 50);
        // pl 40 is the monospace code tabbing
        // set_style_to_collection('pl40', 'paddingLeft', 20);
    }
    else {
        padding_lefts(_20 = 15, _30 = 23, _40 = 30, _45 = 35, _65 = 65);
        // set_style_to_collection('pl40', 'paddingLeft', 30);
        // set_style_to_collection('pl65', 'paddingLeft', 65);
    }


    //
    // //NO USE TO PL45
    // set_style_to_collection('pl45', 'paddingLeft', 35);
    //

    // MR MARGIN RIGHT
    if (filename === 'how') {
        margin_rights(_100 = '100px', _200 = 30, _300 = 0, _400 = 80, _500 = 60);
        // set_style_to_collection('mr400', 'marginRight', 80);
        // set_style_to_collection('mr300', 'marginRight', 0);
        //because pl40 is 20
        // set_style_to_collection('mr200', 'marginRight', 30);
    }
    else if (filename === 'cv') {
        margin_rights(_100 = '100px', _200 = 60, _300 = 0, _400 = 80, _500 = 60);
        // BECAUSE CLASS IS JIW, and pad-body is 150
        // set_style_to_collection('mr400', 'marginRight', 80);
        // set_style_to_collection('mr300', 'marginRight', 0);
        // set_style_to_collection('mr200', 'marginRight', 60);
    }
    // homepage
    else {
        margin_rights(_100 = '100px', _200 = 60, _300 = 100, _400 = 100, _500 = 60);
        // because pad-body is 180
        // set_style_to_collection('mr400', 'marginRight', 100);
        // set_style_to_collection('mr300', 'marginRight', 100);
        // set_style_to_collection('mr200', 'marginRight', 60);
    }
    // set_style_to_collection('mr500', 'marginRight', 60);


    // MT MARGIN TOP

    // set_style_to_collection('mt20', 'marginTop', 15);
    // set_style_to_collection('mt25', 'marginTop', 20);


    // MY-UL
    // set_style_to_collection('my-ul', 'paddingLeft', "1em");

    // ML MARGIN LEFT
    // set_style_to_collection('ml100', 'marginLeft', 70);

    // //PRESS TO TOGGLE .NUTELLA COMPENSATION
    // set_style_to_collection('ml150', 'marginLeft', 120);
    // set_style_to_collection('ml136', 'marginLeft', 110);

    // set_style('back', 'left', '6%');
    // set_style('back', 'width', '70px');


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