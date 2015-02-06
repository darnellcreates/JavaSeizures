// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
document.getElementById('red').onclick = function () {
    addClass(this, 'activeRed');
    this.innerHTML = 'Red is Ready!';
};

document.getElementById('yellow').onclick = function () {
    addClass(this, 'activeYellow');
    this.innerHTML = 'Yellow Is Ready!';
};

document.getElementById('green').onclick = function () {
    addClass(this, 'activeGreen');
    this.innerHTML = 'Green Is Ready!';
};


