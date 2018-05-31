console.log('mobile.js');

function open_hamb_menu() {
    console.warn('menu');
}

function to_mobile() {
    set_style('grid_0', 'display', 'none');
    set_style('continue_arrow', 'display', 'none');
    set_style('back', 'display', 'none');
    set_style('go_up', 'display', 'none');
    set_style('hamburger', 'display', 'unset');
    on_event_do('hamburger_img', 'click', open_hamb_menu);
}

function tablet_portrait() {
    to_mobile();

    let width = window.screen.availWidth;
    let body_margin_left = 90 + ((width - 900) / 5);
    let body_margin_top = 50 + ((width - 900) / 7.5);
    body_margins(body_margin_top, right = 10, bottom = 60, body_margin_left);
    let ham_pad_bott = body_margin_top + (5 + (600 - width) / (60 / 7));
    let ham_pad_top = body_margin_top + (15 + (600 - width) / 30);
    hamburger(mt = -body_margin_top - 5, pb = ham_pad_bott, pt = ham_pad_top, pr = width);


    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();
    fonts_sizes(_60 = 45, _35 = 35, _32 = 28, _30 = 22, _25 = 20, _23 = 18, _20 = 14, _15 = 15);
    pad_body(0);
    add_class('pad_body', 'row-1');
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

    let works = by_class('work');
    for (let i = 0; i < works.length; i++) {
        if (works[i].tagName === "DIV" &&
            works[i].style['paddingLeft'] === padding_left_40) {
            set_style(works[i], 'paddingLeft', 0);
        }
    }
    // set_style_to_collection('pt20', 'paddingTop', 15);
    // set_style('hamburger', 'position', 'fixed');
    // set_style('hamburger_img', 'position', 'fixed');
    // arrow.set(tablet_landscape_up);
    // BODY
    // document.body.style['marginLeft'] = "30px";
    // document.body.style['marginRight'] = "10px";
    // document.body.style['marginTop'] = "10px";
    // FONT SIZE
    // set_style_to_collection('fs60', 'fontSize', 45);
    // // lorem
    // set_style_to_collection('fs35', 'fontSize', 35);
    // // BR 2.5
    // set_style_to_collection('fs32', 'fontSize', 28);
    //
    // set_style_to_collection('fs30', 'fontSize', 22);
    // set_style_to_collection('fs25', 'fontSize', 20);
    // set_style_to_collection('fs23', 'fontSize', 18);
    //
    // set_style_to_collection('fs20', 'fontSize', 14);
    // set_style_to_collection('fs15', 'fontSize', 15);
    //
    // PAD-BODY
    // set_style_to_collection('pad-body', 'paddingLeft', 0);
    //
    // set_style_to_collection('top88', 'top', "90%");
    // set_style_to_collection('top84', 'top', "81%");
    // set_style_to_collection('l90', 'left', "85%");
    //
    // HEIGHT WIDTH
    // set_style_to_collection('height60', 'height', 40);
    // hamburger is 50
    // set_style_to_collection('height30', 'height', 25);
    // set_style_to_collection('width60', 'width', 40);
    // hamburger is 50
    // set_style_to_collection('width30', 'width', 25);
    //
    // PT PADDING TOP
    // PL PADDING LEFT
    // set_style_to_collection('pl20', 'paddingLeft', 15);
    // set_style_to_collection('pl30', 'paddingLeft', 23);
    // set_style_to_collection('pl40', 'paddingLeft', padding_left_40);
    // set_style_to_collection('pl65', 'paddingLeft', 65);
    //
    // //NO USE TO PL45
    // set_style_to_collection('pl45', 'paddingLeft', 35);
    //
    // MR MARGIN RIGHT
    // because pad-body is 180
    // set_style_to_collection('mr400', 'marginRight', 30);
    // set_style_to_collection('mr300', 'marginRight', 30);
    // set_style_to_collection('mr200', 'marginRight', 60);
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


}

function phone_landscape() {
    to_mobile();

    let width = window.screen.availWidth;
    let body_margin_left = 73 + ((width - 600) / 5);
    let body_margin_top = 50 + ((width - 600) / 7.5);
    body_margins(body_margin_top, right = 10, bottom = 60, body_margin_left);
    let ham_pad_bott = body_margin_top + (5 + (360 - width) / (60 / 7));
    let ham_pad_top = body_margin_top + (15 + (360 - width) / 30);
    hamburger(mt = -body_margin_top - 5, pb = ham_pad_bott, pt = ham_pad_top, pr = width);


    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();
    fonts_sizes(_60 = 25, _35 = 35, _32 = 15, _30 = 16, _25 = 12, _23 = 11, _20 = 10, _15 = 9);
    pad_body(0);
    add_class('pad_body', 'row-1');
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