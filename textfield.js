var searchTimeout;
document.getElementById('user_txt').onkeypress = function () {
    if (searchTimeout != undefined) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(callServerScript, 10000);
};

function callServerScript() {
    $('#user_txt').fadeOut(1500, function() {
        $('#user_txt').val('');
    });
    $('#user_txt').fadeIn(0);
}
