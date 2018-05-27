console.log('responsive_new.js\n');

let phone_max = 599;
let tablet_portrait_up = 600;
let tablet_landscape_up = 900;
let desktop_up = 1200;
let big_desktop_up = 1800;


on_event_do(window, "resize", on_resize);

on_resize();


function big_desktop_resize() {
}

function desktop_resize() {
}

function tablet_landscape_resize() {

}

function tablet_portrait_resize() {

}

function phone_resize() {

}

function on_resize() {
    let w = window.screen.availWidth;
    console.log('w: ', w);
    if (w >= big_desktop_up) {
        console.warn('big_desktop_up. w: ', w);
        big_desktop_resize();
    }
    else if (w >= desktop_up) {
        console.warn('desktop_up. w: ', w);
        desktop_resize();
    }
    else if (w >= tablet_landscape_up) {
        console.warn('tablet_landscape_up. w: ', w);
        tablet_landscape_resize();
    }
    else if (w >= tablet_portrait_up) {
        console.warn('tablet_portrait_up. w: ', w);
        tablet_portrait_resize();
    }
    else if (w >= phone_max) {
        console.warn('phone_max. w: ', w);
        phone_resize();
    }
    else {
        console.warn('Got to final else in responsive. w: ', w);
    }
}