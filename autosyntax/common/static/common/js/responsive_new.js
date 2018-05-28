console.log('responsive_new.js\n');

let phone_max = 599;
let tablet_portrait_up = 600;
let tablet_landscape_up = 900;
let desktop_up = 1200;
let big_desktop_up = 1800;


on_event_do(window, "resize", on_resize);

on_resize();


function big_desktop_resize() {
    set_style_to_collection('fs60', 'fontSize', 60);
    set_style_to_collection('fs30', 'fontSize', 30);
    set_style_to_collection('fs20', 'fontSize', 20);
    set_style_to_collection('fs25', 'fontSize', 25);
    set_style_to_collection('pad-body', 'paddingLeft', 350);
    set_style_to_collection('top84', 'top', "84%");
    set_style_to_collection('top88', 'top', "88%");
    set_style_to_collection('height60', 'height', 60);
    set_style_to_collection('width60', 'width', 60);
    set_style_to_collection('height30', 'height', 30);
    set_style_to_collection('width30', 'width', 30);
    set_style_to_collection('mr400', 'marginRight', 400);
}

function desktop_resize() {
    //FONTS 80% for fs60
    set_style_to_collection('fs60', 'fontSize', 48);
    set_style_to_collection('fs30', 'fontSize', 24);
    set_style_to_collection('fs20', 'fontSize', 18);
    set_style_to_collection('fs25', 'fontSize', 23);
    set_style_to_collection('pad-body', 'paddingLeft', 250);
    set_style_to_collection('top84', 'top', "81%");
    set_style_to_collection('top88', 'top', "86%");
    set_style_to_collection('height60', 'height', 45);
    set_style_to_collection('width60', 'width', 45);
    set_style_to_collection('height30', 'height', 25);
    set_style_to_collection('width30', 'width', 25);
    set_style_to_collection('mr400', 'marginRight', 200);
}

function tablet_landscape_resize() {

}

function tablet_portrait_resize() {

}

function phone_resize() {

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
        tablet_portrait_resize();
    }
    else if (w >= phone_max) {
        console.log('phone_max. w: ', w);
        phone_resize();
    }
    else {
        console.warn('Got to final else in responsive. w: ', w);
    }
}