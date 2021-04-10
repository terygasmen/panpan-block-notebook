/* Set the width of the sidebar to 28vw and the left margin of the page content to 25vw */
function openNav() {
  document.getElementById("mySidebar").style.width = "380px";
  document.getElementById("main").style.marginLeft = "380px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


/* FULLSCREEN MODE */
var elem = document.getElementById("user_txt");

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

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
    $( ".typing_area" ).removeClass( "darkmode__enabled" );
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
    $( ".typing_area" ).addClass( "darkmode__enabled" );
  }
}

