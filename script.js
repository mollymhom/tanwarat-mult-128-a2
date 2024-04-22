// Wait until the DOM is fully loaded.
$(document).ready(function() {

    // Attach a click event handler to all elements with the class 'answer-btn'.
    $('.answer-btn').click(function() {
        // Retrieve the data attribute 'data-correct' to check if the clicked answer is correct.
        var isCorrect = $(this).data('correct');
        // Display feedback in the element with id 'feedback' based on the correctness of the answer.
        $('#feedback').text(isCorrect ? "Correct!" : "Try again!");
    });

    // Attach an event handler to the window's scroll event.
    $(window).scroll(function() {
        // As the window is scrolled, change the CSS transform property of the '#scroll-image' to translate the Y position.
        // The translation amount is a quarter of the scroll position, creating a parallax scrolling effect.
        $('#scroll-image').css('transform', 'translateY(' + $(window).scrollTop() / 4 + 'px)');
    });

    // Make the element with id 'adventure-bulldog' visible on the page.
    $('#adventure-bulldog').show();

    // Initialize an animation on the '#adventure-bulldog' element using Anime.js.
    anime({
        targets: '#adventure-bulldog', // Define the element to animate.
        translateX: [ // Define horizontal movement animation sequence.
            {value: 300, duration: 800}, // Move 300px to the right over 800ms.
            {value: 0, duration: 800}    // Move back to the original position over 800ms.
        ],
        rotate: { // Define a rotation animation.
            value: '1turn', // Rotate the element one full turn.
            easing: 'easeInOutSine' // Use 'easeInOutSine' easing function for a smooth animation.
        },
        scale: [ // Define a scaling animation sequence.
            {value: 1.2, duration: 800}, // Scale up the element by 20% over 800ms.
            {value: 1, duration: 800}    // Scale back down to original size over 800ms.
        ],
        delay: 500, // Start the animation after a 500ms delay.
        loop: true // Repeat the animation indefinitely.
    });
});

// Define a function to move an image in a specified direction.
function moveImage(direction) {
    // Select the element with id 'moveable-image'.
    var $img = $('#moveable-image');
    
    // Based on the direction parameter, apply a corresponding translation using Anime.js.
    switch (direction) {
        case 'up': // Move the image up by 10px.
            anime({
                targets: $img.get(0),
                translateY: '-=10',
                easing: 'linear'
            });
            break;
        case 'down': // Move the image down by 10px.
            anime({
                targets: $img.get(0),
                translateY: '+=10',
                easing: 'linear'
            });
            break;
        case 'left': // Move the image left by 10px.
            anime({
                targets: $img.get(0),
                translateX: '-=10',
                easing: 'linear'
            });
            break;
        case 'right': // Move the image right by 10px.
            anime({
                targets: $img.get(0),
                translateX: '+=10',
                easing: 'linear'
            });
            break;
    }
}