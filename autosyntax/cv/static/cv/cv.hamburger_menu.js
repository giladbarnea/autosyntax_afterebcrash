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

let hamburger_menu = by_id('hamburger_menu');
for (let i = 5; i <= 7; i++) {
    add_child(hamburger_menu, {'tag': 'br'});
    add_child(hamburger_menu, {'tag': 'br'});
    add_child(hamburger_menu,
        {
            'tag': 'SPAN',
            'att': 'id',
            'att_value': `hamburger_item_${i}`,
            'inner': i === 5 ?
                'Military' :
                i === 6 ?
                    'Languages' :
                    'Contact'
        });
}
by_id('hamburger_item_1').innerHTML = 'Overview';
by_id('hamburger_item_2').innerHTML = 'Experience';
by_id('hamburger_item_3').innerHTML = 'Skills';
by_id('hamburger_item_4').innerHTML = 'Education';
set_style('hamburger_menu', 'marginTop', '-105%');
set_style('hamburger_menu', 'fontSize', '35px');


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


on_event_do("hamburger_item_5", "click",
    () => {
        scroll_to_bezier(military.init_top);
    });


on_event_do("hamburger_item_6", "click",
    () => {
        scroll_to_bezier(languages.init_top);
    });


on_event_do("hamburger_item_7", "click",
    () => {
        scroll_to_bezier(contact.init_top);
    });