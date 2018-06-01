console.log('cv/cv.hamburger_menu.js\tFROM cv.html\tMODULE\n');
let [overview, experience, skills, education, military, languages, contact] = [
    new Section("overview_cv", "Who am I"),
    new Section("experience_cv", "How to use"),
    new Section("skills_cv", "Download"),
    new Section("education_cv", "What is it?"),
    new Section("military_cv", "What is it?"),
    new Section("languages_cv", "What is it?"),
    new Section("contact_cv", "What is it?")
];


by_id('hamburger_item_1').innerHTML = 'Overview';
by_id('hamburger_item_2').innerHTML = 'Experience';
by_id('hamburger_item_3').innerHTML = 'Skills';
by_id('hamburger_item_4').innerHTML = 'Education';

let hamburger_menu = by_id('hamburger_menu');
hamburger_menu.appendChild(document.createElement('br'));
hamburger_menu.appendChild(document.createElement('br'));
// let span = document.createElement('SPAN');
// span.setAttribute('id', 'hamburger_item_5');
let span = create('SPAN', 'id', 'hamburger_item_5', inner = 'Military');
// span.innerHTML = 'lololo';
hamburger_menu.appendChild(span);


// What is it?
on_event_do("hamburger_item_1", "click",
    () => {
        scroll_to_bezier(overview.init_top);
    });

// Download
on_event_do("hamburger_item_2", "click",
    () => {
        scroll_to_bezier(experience.init_top);
    });

// How to use
on_event_do("hamburger_item_3", "click",
    () => {
        scroll_to_bezier(skills.init_top);

    });

// Who am I?
on_event_do("hamburger_item_4", "click",
    () => {
        scroll_to_bezier(education.init_top);
    });