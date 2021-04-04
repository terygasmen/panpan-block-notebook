/* Set the width of the sidebar to 28vw and the left margin of the page content to 25vw */
function openNav() {
  document.getElementById("mySidebar").style.width = "25vw";
  document.getElementById("main").style.marginLeft = "25vw";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function fullscreen() {
  if( $( ".typing_area_cont" ).hasClass( "fullscreen__enabled" )) {
    $( ".typing_area_cont" ).removeClass( "fullscreen__enabled" );
    writearea.removeChild(fullscreen_btn);
  } else {
    $( ".typing_area_cont" ).addClass( "fullscreen__enabled" );
    writearea.appendChild(fullscreen_btn);
  }
}

// escape key escapes fullscreen mode
var minimize = document.getElementById("fullScreen");
fullScreen.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
    event.preventDefault();
    document.getElementById("fullScreen").click();
    }
});

function darkmode() {
  if( $( "body" ).hasClass( "darkmode__enabled" )) {
    $( "body" ).removeClass( "darkmode__enabled" );
    $( ".sidebar_cont" ).removeClass( "darkmode__enabled__two" );
    $( ".closebtn" ).removeClass( "darkmode__enabled__two" );
    $( ".title_cont" ).removeClass( "darkmode__enabled__two" );
    $( ".decks_cont" ).removeClass( "darkmode__enabled__two" );
    $( ".main_deck" ).removeClass( "darkmode__enabled__two" );
    $( ".subdeck" ).removeClass( "darkmode__enabled__two" );
    $( ".list" ).removeClass( "darkmode__enabled__two" );
    $( ".title_input" ).removeClass( "darkmode__enabled__two" );
  } else {
    $( "body" ).addClass( "darkmode__enabled" );
    $( ".sidebar_cont" ).addClass( "darkmode__enabled__two" );
    $( ".closebtn" ).addClass( "darkmode__enabled__two" );
    $( ".title_cont" ).addClass( "darkmode__enabled__two" );
    $( ".decks_cont" ).addClass( "darkmode__enabled__two" );
    $( ".main_deck" ).addClass( "darkmode__enabled__two" );
    $( ".subdeck" ).addClass( "darkmode__enabled__two" );
    $( ".list" ).addClass( "darkmode__enabled__two" );
    $( ".title_input" ).addClass( "darkmode__enabled__two" );
  }
}

