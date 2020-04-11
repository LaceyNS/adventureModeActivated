//Name Space the app
const ama = {};
let adventurerName = "";

//Store the form submuit input as a variable 
ama.saveName = () => {
    $('.nameButton').on('click', function(e) {
    e.preventDefault();
    adventurerName = $('input').val();
    // insert entered name into story
    $('span.adventurerName').append(adventurerName);
    console.log(adventurerName);
    });
};


ama.init = () => {
    console.log('init');
    ama.saveName();
};
/* Adventure Mode Activated

* A landing page with the title and greeting.

*Underneath the greeting, an input for the adventurer name and an image.

*Save the name input value as a variable to be used as the name in the story.

*On submitting the name data, a block of text of the opening to the story is displayed. 

*Two buttons with options for the adventurer to take. 

*The button uses toggleClass or .hide to next block of text in the story. 

*Repeat until the end of the story.

*Include a button at the end to reset the page which reverts all p to hidden.

*/ 

$(function(){
    ama.init();
});