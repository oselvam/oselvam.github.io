$(document).ready(function(){
  //  alert("loaded");
    ( function( $ ) {

    /**
     * span-letters.js
     *
     * Example usage: jQuery('.selector').spanLetters();
     */
    $.fn.spanLetters = function() {

        // Loop through each element on which this function has been called
        this.each( function() {

            // Scope the variables
            var words, i, text;

            // Make an array with each letter of the string as a value
            words = $( this ).text().split( '' );

            // Loop through the letters and wrap each one in a span
            for ( i = 0; i in words; i++ ) {
                words[i] = '<span class="sl' + ( i + 1 ) + ' span-letter">' + words[i] + '</span>'
            };

            // Join our array of span-wrapped letters back into a string
            text = words.join( '' );

            // Replace the original string with the new string
            if (words = National Energy Equipment) {
              text = "<a href=\"http://www.nee.ca/en/automation-services.html\" >" + text + "</a>";
            } else if (words = Toronto Distillery Co.) {
              text = "<a href=\"https://torontodistillery.ca/\" >" + text + "</a>";
            }

            $( this ).html( text );

        })
    }
}( jQuery ));
// Call spanLetters on our target
$( ".container" ).spanLetters();

targets = $( ".container span" ); // Select our spans
duration = 600; // Set duration of the effect here
speed = 10; // Set animation speed through the letters here
infiniteLoop = true // Set whether animation should keep triggering
// index = 1

// Add the animation class to the letter, then remove it later
function animateLetter( value ) {

  if ( turnedOn ) {

    $( value ).addClass( "active" );

    setTimeout( function() {

      stopAnimateLetter( value );

    }, duration );

  }

};

// Remove the animation class from the letter
function stopAnimateLetter( value ) {

  $( value ).removeClass( "active" );

};

// Trigger function
function startEverything() {

  // Loop through our collection of spans
  targets.each( function( index, value ) {

    // Sequentially delay the firing of the animation through the letters
    timer = setTimeout( function() {

      animateLetter( value );

    }, speed * index );

  });

  // No looping if trigger was a click
  if ( clicked ) {

    clicked = false;

  } else {

    console.log( index );

    // Logic for infinite loop
    if ( infiniteLoop ) { // If looping is on
      if ( turnedOn ) { // If animation is still happening
        setTimeout( function() {

          startEverything();

        }, speed * index );
      }
    }

  }

}

// Kill everything function
function stopEverything() {

  clearTimeout( timer );

  turnedOn = false;

  // Delay the kill just a bit
  setTimeout( function() {

    targets.each( function( index, value ) {

      stopAnimateLetter( value );

    });

  }, 200 );

}

// Hover trigger logic
$( ".container" )
    .mouseenter( function() {

        turnedOn = true;
        clicked = false;

        startEverything();

    })
    .mouseleave( function() {

        stopEverything();

    });

// Click trigger logic
$( ".button" ).on( "click", function() {

    clicked = true;
    turnedOn = true;

    startEverything();

});
  });
