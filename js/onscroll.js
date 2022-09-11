
const desert = document.getElementById("desert");



window.addEventListener('scroll', function () {
    var value = window.scrollY;
    
    desert.style.top = value * 0.15 + 'px';

    text.style.top = value * 1 + 'px';

});



