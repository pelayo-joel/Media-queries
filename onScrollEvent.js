
// OnScroll Animation //
function onscroll () {
    const content = document.querySelectorAll('.content');
    const contentBackground = document.getElementById('wrapper').getElementsByTagName('div');

    var elementTopVisible = 150;
    var elementBottomVisible = 500;
    var windowHeight = window.innerHeight;

    for (var i = 0; i < content.length; i++) {
        var contentTop = content[i].getBoundingClientRect().top;
        var contentBottom = content[i].getBoundingClientRect().bottom;

        if (elementTopVisible < windowHeight - contentTop && elementBottomVisible > windowHeight - contentBottom) {
            contentBackground[i].style.opacity = 1;
            content[i].classList.add('active');
        }
        else {
            contentBackground[i].style.opacity = 0;
            content[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', onscroll);

