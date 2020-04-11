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
    });
};

//Reveal the section associated with the button selection
ama.showPath = () => {
    $('button').on('click', function() {
        let pathReveal = $(this).attr('class');
        $(`section.${pathReveal}`).css('display', 'block');
        //Disable the previous button and it's sibling button
        $(this).attr('disabled', 'disabled');
        $(this).siblings().attr('disabled', 'disabled');
    });
};

//Initialize
ama.init = () => {
    console.log('init');
    ama.saveName();
    ama.showPath();
};

/*

*Include a button at the end to reset the page which reverts all p to hidden.

*/ 
//Document ready
$(function(){
    ama.init();
});