console.log('cv.js');

by_id("continue_arrow").style["display"] = "none";
set_style("back", "display", "unset");
set_style("pad_body", "paddingLeft", 250);
let sidebar_items = by_id("sidebar").children;
let items = ['Overview', 'Experience', 'Skills',
    'Education', 'M.Service', 'Languages', 'Contact'];

on_event_do('email', 'click', () => {
    copy();
    by_id('email_msg').innerHTML = 'email copied to clipboard'
});
on_event_do('phone', 'click', () => {
    copy('0508675854');
    by_id('email_msg').innerHTML = 'phone copied to clipboard'
});

on_event_do('linkedin', 'click', () => {
    open_in_new_tab('https://www.linkedin.com/in/gilad-barnea/');
});

on_event_do('fb', 'click', () => {
    open_in_new_tab('https://www.facebook.com/gilad.barnea.3');
});

set_style('email_msg', 'paddingLeft', window.screen.availWidth / 4);


function open_in_new_tab(url) {
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    a.click();
}

function copy(value = 'giladbrn@gmail.com') {
    let temp = document.createElement('INPUT');
    document.body.appendChild(temp);
    temp.setAttribute('value', value);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    increase_opacity(by_id('email_msg'), 0.7, factor = 0.3);
    setTimeout(() => {
        decrease_opacity(by_id('email_msg'), 0, factor = 0.3);
    }, 1000);


}

let counter = 0;
for (let i = 0; i < sidebar_items.length; i++) {
    if (sidebar_items[i].tagName === "DIV") {
        sidebar_items[i].innerHTML = items[counter];
        counter += 1;
    }
}

// Operators
on_event_do("sidebar_item_1", "click",
    () => scroll_to("overview_cv"));

// .Dotted arguments
on_event_do("sidebar_item_2", "click",
    () => scroll_to("experience_cv"));

// Inline methods()
on_event_do("sidebar_item_3", "click",
    () => scroll_to("skills_cv"));

// Complex operators
on_event_do("sidebar_item_4", "click",
    () => scroll_to("education_cv"));

on_event_do("sidebar_item_5", "click",
    () => scroll_to("military_cv"));


on_event_do("sidebar_item_6", "click",
    () => scroll_to("languages_cv"));

on_event_do("sidebar_item_7", "click",
    () => scroll_to("contact_cv"));