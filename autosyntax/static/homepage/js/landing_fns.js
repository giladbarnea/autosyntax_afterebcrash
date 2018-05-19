function scroll_to_whatisit() {
    by_id("what_is_it_content")
        .scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}