var searchTimeout;
document.getElementById('user_txt').onkeypress = function () {
    if (searchTimeout != undefined) {
        clearTimeout(searchTimeout);
    } else {
        searchTimeout = setTimeout(callServerScript, 5000);
    }
};
function callServerScript() {
    document.getElementById('user_txt').innerText = '';
}
