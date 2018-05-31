console.log('responsive_new.js\n');

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
            if (filename === 'how') {
                this.top = '65%';
            }
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
// function set_continue_arrow(media) {
//     if (media === big_desktop_up) {
//         arrow_attrs = {
//             'arrow_c': "48.5%",
//             'lbl_c': "47.5%",
//             'arrow_l': '14%',
//             'lbl_l': '12.7%'
//         }
//     }
//     else if (media === desktop_up) {
//         arrow_attrs = {
//             'arrow_c': "48.5%",
//             'lbl_c': "46%",
//             'arrow_l': '14%',
//             'lbl_l': '12%'
//         }
//     }
//     else if (media === tablet_landscape_up) {
//         arrow_attrs = {
//             'arrow_c': "48.5%",
//             'lbl_c': "44.5%",
//             'arrow_l': '14%',
//             'lbl_l': '10%'
//         }
//     }
//     else {
//         console.error('implement get_continue_arrow fn in respopnsive')
//     }
//
//
// }

const phone_max = 599;
const tablet_portrait_up = 600;
const tablet_landscape_up = 900;
const desktop_up = 1200;
const big_desktop_up = 1800;


on_event_do(window, "resize", on_resize);

on_resize();


function big_desktop_resize() {
    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();
    arrow.set(big_desktop_up, filename);
    document.body.style['marginLeft'] = "60px";
    document.body.style['marginRight'] = "60px";

    set_style_to_collection('fs60', 'fontSize', 60);

    //BR 2.5 - DEFAULT 40
    set_style_to_collection('fs35', 'fontSize', 40);
    set_style_to_collection('fs32', 'fontSize', 32);
    set_style_to_collection('fs30', 'fontSize', 30);
    set_style_to_collection('fs25', 'fontSize', 25);
    set_style_to_collection('fs23', 'fontSize', 23);
    set_style_to_collection('fs20', 'fontSize', 20);
    set_style_to_collection('fs15', 'fontSize', 15);

    set_style_to_collection('pad-body', 'paddingLeft', 350);

    set_style_to_collection('top88', 'top', "88%");
    set_style_to_collection('top84', 'top', "84%");

    set_style_to_collection('l90', 'left', "90%");

    set_style_to_collection('height60', 'height', 60);
    set_style_to_collection('height30', 'height', 30);

    set_style_to_collection('width60', 'width', 60);
    set_style_to_collection('width30', 'width', 30);

    set_style_to_collection('pt20', 'paddingTop', 20);

    set_style_to_collection('pl20', 'paddingLeft', 20);
    set_style_to_collection('pl30', 'paddingLeft', 30);
    set_style_to_collection('pl45', 'paddingLeft', 45);
    set_style_to_collection('pl65', 'paddingLeft', 65);

    set_style_to_collection('mr400', 'marginRight', 400);
    set_style_to_collection('mr300', 'marginRight', 300);

    set_style_to_collection('mt20', 'marginTop', 20);
    set_style_to_collection('mt25', 'marginTop', 25);

    set_style_to_collection('my-ul', 'paddingLeft', "2.5em");

    // ML MARGIN LEFT
    set_style_to_collection('ml100', 'marginLeft', 100);
    //PRESS TO TOGGLE .NUTELLA COMPENSATION
    set_style_to_collection('ml150', 'marginLeft', 150);
    set_style_to_collection('ml136', 'marginLeft', 136);

    set_style('back', 'left', '5%');
    set_style('back', 'width', '80px');
}

function desktop_resize() {
    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();
    arrow.set(desktop_up);

    document.body.style['marginLeft'] = "60px";
    document.body.style['marginRight'] = "60px";

    //FONTS 80% for fs60
    set_style_to_collection('fs60', 'fontSize', 48);

    //BR 2.5 - DEFAULT 40
    set_style_to_collection('fs35', 'fontSize', 40);
    set_style_to_collection('fs32', 'fontSize', 28);
    set_style_to_collection('fs30', 'fontSize', 24);
    set_style_to_collection('fs25', 'fontSize', 23);
    set_style_to_collection('fs23', 'fontSize', 20);
    set_style_to_collection('fs20', 'fontSize', 18);
    set_style_to_collection('fs15', 'fontSize', 15);


    if (filename === 'cv') {
        set_style_to_collection('pad-body', 'paddingLeft', 230);
    }
    else {
        set_style_to_collection('pad-body', 'paddingLeft', 250);
    }

    set_style_to_collection('top88', 'top', "86%");
    set_style_to_collection('top84', 'top', "81%");

    set_style_to_collection('l90', 'left', "90%");

    set_style_to_collection('height60', 'height', 45);
    set_style_to_collection('height30', 'height', 25);

    set_style_to_collection('width60', 'width', 45);
    set_style_to_collection('width30', 'width', 25);

    set_style_to_collection('pt20', 'paddingTop', 20);

    set_style_to_collection('pl20', 'paddingLeft', 20);
    set_style_to_collection('pl30', 'paddingLeft', 25);
    set_style_to_collection('pl40', 'paddingLeft', 35);
    //NO USE TO PL45
    set_style_to_collection('pl45', 'paddingLeft', 35);
    set_style_to_collection('pl65', 'paddingLeft', 65);

    if (filename === 'how') {
        set_style_to_collection('mr400', 'marginRight', 175);
        set_style_to_collection('mr300', 'marginRight', 125);
        set_style_to_collection('mr200', 'marginRight', 100);
    }
    else {
        set_style_to_collection('mr400', 'marginRight', 200);
        set_style_to_collection('mr300', 'marginRight', 150);
        set_style_to_collection('mr200', 'marginRight', 100);
    }
    set_style_to_collection('mr500', 'marginRight', 200);

    set_style_to_collection('mt20', 'marginTop', 20);
    set_style_to_collection('mt25', 'marginTop', 25);

    if (filename === 'cv') {
        set_style_to_collection('my-ul', 'paddingLeft', "1em");
    }
    else {
        set_style_to_collection('my-ul', 'paddingLeft', "2.5em");
    }

    // ML MARGIN LEFT
    set_style_to_collection('ml100', 'marginLeft', 100);

    //PRESS TO TOGGLE .NUTELLA COMPENSATION
    set_style_to_collection('ml150', 'marginLeft', 150);
    set_style_to_collection('ml136', 'marginLeft', 139);


    set_style('back', 'left', '5%');
    set_style('back', 'width', '80px');
}

function tablet_landscape_resize() {
    arrow.set(tablet_landscape_up);
    // BODY
    document.body.style['marginLeft'] = "40px";
    document.body.style['marginRight'] = "40px";


    let filename = window.location.pathname
        .split("/")
        .filter(c => c.length)
        .pop();

    // FONT SIZE
    set_style_to_collection('fs60', 'fontSize', 40);

    // BR 2.5
    set_style_to_collection('fs35', 'fontSize', 35);
    set_style_to_collection('fs32', 'fontSize', 28);
    set_style_to_collection('fs30', 'fontSize', 22);
    set_style_to_collection('fs25', 'fontSize', 20);
    set_style_to_collection('fs23', 'fontSize', 18);

    set_style_to_collection('fs20', 'fontSize', 14);
    set_style_to_collection('fs15', 'fontSize', 15);
    //


    // PAD-BODY
    if (filename === 'cv') {
        set_style_to_collection('pad-body', 'paddingLeft', 140);
    }
    else {
        set_style_to_collection('pad-body', 'paddingLeft', 180);
    }
    //
    set_style_to_collection('top88', 'top', "86%");
    set_style_to_collection('top84', 'top', "81%");

    set_style_to_collection('l90', 'left', "90%");
    //

    // HEIGHT WIDTH
    set_style_to_collection('height60', 'height', 40);
    set_style_to_collection('height30', 'height', 25);
    //
    set_style_to_collection('width60', 'width', 40);
    set_style_to_collection('width30', 'width', 25);
    //

    // PT PADDING TOP
    set_style_to_collection('pt20', 'paddingTop', 15);


    // PL PADDING LEFT
    set_style_to_collection('pl20', 'paddingLeft', 15);
    set_style_to_collection('pl30', 'paddingLeft', 23);

    if (filename === 'cv') {
        set_style_to_collection('pl65', 'paddingLeft', 50);
        set_style_to_collection('pl40', 'paddingLeft', 17);
    }
    else if (filename === 'how') {
        set_style_to_collection('pl65', 'paddingLeft', 50);
        // pl 40 is the monospace code tabbing
        set_style_to_collection('pl40', 'paddingLeft', 20);
    }
    else {
        set_style_to_collection('pl40', 'paddingLeft', 30);
        set_style_to_collection('pl65', 'paddingLeft', 65);
    }


    //
    // //NO USE TO PL45
    set_style_to_collection('pl45', 'paddingLeft', 35);
    //

    // MR MARGIN RIGHT
    if (filename === 'how') {
        set_style_to_collection('mr400', 'marginRight', 80);
        set_style_to_collection('mr300', 'marginRight', 0);
        //because pl40 is 20
        set_style_to_collection('mr200', 'marginRight', 30);
    }
    else if (filename === 'cv') {
        // BECAUSE CLASS IS JIW, and pad-body is 150
        set_style_to_collection('mr400', 'marginRight', 80);
        set_style_to_collection('mr300', 'marginRight', 0);
        set_style_to_collection('mr200', 'marginRight', 60);
    }
    // homepage
    else {
        // because pad-body is 180
        set_style_to_collection('mr400', 'marginRight', 100);
        set_style_to_collection('mr300', 'marginRight', 100);
        set_style_to_collection('mr200', 'marginRight', 60);
    }
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


    set_style('back', 'left', '6%');
    set_style('back', 'width', '70px');


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
        console.warn('tablet_portrait_up. w: ', w);
        tablet_portrait();
    }
    else if (w <= phone_max) {
        console.log('phone_max. w: ', w);
        phone_resize();
    }
    else {
        console.warn('Got to final else in responsive. w: ', w);
    }
}