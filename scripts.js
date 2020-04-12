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
    $('.introduction').css('display', 'none');
    });
};

//Create high contrast button
ama.highContrast = () => {
    $('.highContrast').on('click', function() {
        $('body').toggleClass('dark');
    })
};

//Reveal the section associated with the button selection
ama.showPath = () => {
    $('button').on('click', function() {
        let pathReveal = $(this).attr('class');
        $(`section.${pathReveal}`).css('display', 'block');
        //Save the story section into a recap area
        $(this).siblings('p').appendTo('section.storyRecap');
        //Hide the previous part of the story
        $(this).parent('section').css('display', 'none');
    });
};

//Restart button 
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
    ama.highContrast();
};

//Document ready
$(function(){
    ama.init();
});