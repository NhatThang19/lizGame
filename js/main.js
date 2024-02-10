// Loading trang web
window.addEventListener('load', function () {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.getElementById('content-web');

    loadingScreen.style.display = 'none';
    content.style.display = 'block';
});

// Đổi theme
function changeColor() {
    var myDiv = document.getElementById('mydiv');
    var currentColor = myDiv.getAttribute('data-bs-theme');

    var light = 'light';
    var dark = 'dark';
    if (currentColor == light) {
        myDiv.setAttribute('data-bs-theme', dark);
    } else {
        myDiv.setAttribute('data-bs-theme', light);
    }
}
