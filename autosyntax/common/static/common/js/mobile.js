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
    // set_style('hamburger', 'position', 'fixed');
    // set_style('hamburger_img', 'position', 'fixed');


    // arrow.set(tablet_landscape_up);
    // BODY
    document.body.style['marginLeft'] = "30px";
    document.body.style['marginRight'] = "10px";
    document.body.style['marginTop'] = "10px";


    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();

    // FONT SIZE
    set_style_to_collection('fs60', 'fontSize', 45);

    // lorem
    set_style_to_collection('fs35', 'fontSize', 35);
    // BR 2.5
    set_style_to_collection('fs32', 'fontSize', 28);

    set_style_to_collection('fs30', 'fontSize', 22);
    set_style_to_collection('fs25', 'fontSize', 20);
    set_style_to_collection('fs23', 'fontSize', 18);

    set_style_to_collection('fs20', 'fontSize', 14);
    set_style_to_collection('fs15', 'fontSize', 15);
    //


    // PAD-BODY
    set_style_to_collection('pad-body', 'paddingLeft', 0);

    add_class('pad_body', 'row-1');


    //
    set_style_to_collection('top88', 'top', "90%");
    set_style_to_collection('top84', 'top', "81%");


    set_style_to_collection('l90', 'left', "85%");
    //

    // HEIGHT WIDTH
    set_style_to_collection('height60', 'height', 40);
    // hamburger is 50
    set_style_to_collection('height50', 'height', 45);
    set_style_to_collection('height30', 'height', 25);
    //
    set_style_to_collection('width60', 'width', 40);
    // hamburger is 50
    set_style_to_collection('width50', 'width', 45);
    set_style_to_collection('width30', 'width', 25);
    //

    // PT PADDING TOP
    set_style_to_collection('pt20', 'paddingTop', 15);


    // PL PADDING LEFT
    set_style_to_collection('pl20', 'paddingLeft', 15);
    set_style_to_collection('pl30', 'paddingLeft', 23);

    let padding_left_40 = "25px";
    set_style_to_collection('pl40', 'paddingLeft', padding_left_40);
    set_style_to_collection('pl65', 'paddingLeft', 65);


    //
    // //NO USE TO PL45
    set_style_to_collection('pl45', 'paddingLeft', 35);
    //

    // MR MARGIN RIGHT
    // because pad-body is 180
    set_style_to_collection('mr400', 'marginRight', 30);
    set_style_to_collection('mr300', 'marginRight', 30);
    set_style_to_collection('mr200', 'marginRight', 60);
    set_style_to_collection('mr500', 'marginRight', 60);


    // MT MARGIN TOP
    set_style_to_collection('mt20', 'marginTop', 15);
    set_style_to_collection('mt25', 'marginTop', 20);


    // MY-UL
    set_style_to_collection('my-ul', 'paddingLeft', "1em");

    // ML MARGIN LEFT
    set_style_to_collection('ml100', 'marginLeft', 70);

    // //PRESS TO TOGGLE .NUTELLA COMPENSATION
    set_style_to_collection('ml150', 'marginLeft', 120);
    set_style_to_collection('ml136', 'marginLeft', 110);


    let works = by_class('work');
    for (let i = 0; i < works.length; i++) {
        if (works[i].tagName === "DIV" &&
            works[i].style['paddingLeft'] === padding_left_40) {
            set_style(works[i], 'paddingLeft', 0);
        }
    }
    // set_style('hamburger', 'position', 'fixed');
    // if (filename === undefined || filename === 'cv') {
    //     set_style('go_up', 'fontSize', 23);
    //     set_style('go_up', 'top', "91%");
    //     set_style('go_up', 'left', "83%");
    // }
}