function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    document.getElementById('feedback').innerHTML = `Logged in as: ${profile.getName()}`;
}

function onFailure(error) {
    document.getElementById('feedback').innerHTML = 'Login failed. Please try again.';
}

function renderButton() {
    gapi.signin2.render('loginButton', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn,
        'onfailure': onFailure
    });
}

window.onload = function() {
    renderButton();
};