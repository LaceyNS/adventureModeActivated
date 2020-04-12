//Name Space the app
const ama = {};
let adventurerName = "";

//Store the form submuit input as a variable for the name
ama.saveName = () => {
    $('.nameButton').on('click', function(e) {
    e.preventDefault();
    adventurerName = $('input').val();
    // insert entered name into story
    $('span.adventurerName').append(adventurerName);
    console.log(adventurerName);
    $('.opening').show();
    $('form').css('display', 'none');
    });
};

//Reveal the section associated with the button selection
ama.showPath = () => {
    $('button').on('click', function() {
        let pathReveal = $(this).attr('class');
        $(`section.${pathReveal}`).css('display', 'block');
        //Save the story section into a recap area
        $(this).siblings('p').appendTo('section.storyRecap');
        //Hide the previous part of the story
        $(this).parent().css('display', 'none');
    });
};

ama.refresh = () => {
    $('.refresh').on('click', function() {
        window.location.reload();
    });
};
//Initialize
ama.init = () => {
    console.log('init');
    ama.saveName();
    ama.showPath();
    ama.refresh();
};

/*

*Include a button at the end to reset the page which reverts all p to hidden.

*/ 
//Document ready
$(function(){
    ama.init();
});