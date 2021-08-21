// Navbar
function nav_active(id) {
    var link_Color = document.querySelectorAll('.nav-link');
    document.getElementById('nav_index').value = id
    link_Color.forEach(function (value, key) {
        if (key == id) {
            value.style.color = '#da0c2f'
        }
    })

}

var link_Color = document.getElementsByClassName('nav-link')
window.onscroll = function () {
    var scroll = this.scrollY;
    var nav = document.getElementById('navbar')
    var contDet = document.getElementById('nav-cont-det');
    var index = document.getElementById('nav_index').value
    var logo = document.getElementById('logo')
    if (scroll > 0) {
        logo.src = 'br_logo_02.png'
        nav.style.backgroundColor = 'white'
        contDet.style.color = 'black'
        for (var i = 0; i < link_Color.length; i++) {
            link_Color[i].style.color = 'black'
        }
    }
    else {
        logo.src = 'wr_logo_01.png'
        contDet.style.color = 'white'
        for (var i = 0; i < link_Color.length; i++) {
            link_Color[i].style.color = 'white'
        }
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }
    nav_active(index)
}
// Navbar End

// About Counter 

var count = 0;
var head = document.getElementById('counter-head1');
var interval = setInterval(function () {
    var scroll = this.scrollY;
    if (scroll > 1150) {
        count = count + 5
        head.innerHTML = count
        if (count == 300) {
            clearInterval(interval)
        }
    }
}, 100)


var count1 = 0;
var head1 = document.getElementById('counter-head2');
var interval1 = setInterval(function () {
    var scroll = this.scrollY;
    if (scroll > 1150) {
        count1 = count1 + 5
        head1.innerHTML = count1
        if (count1 == 300) {
            clearInterval(interval1)
        }
    }
}, 100)


var count2 = 0;
var head2 = document.getElementById('counter-head3');
var interval2 = setInterval(function () {
    var scroll = this.scrollY;
    if (scroll > 1150) {
        count2 = count2 + 5
        head2.innerHTML = count2
        if (count2 == 300) {
            clearInterval(interval2)
        }
    }
}, 100)


// testimonial Section 
// vars
'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);


        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}
// testimonial Section End