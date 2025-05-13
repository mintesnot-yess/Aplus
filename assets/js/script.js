const sideMobNav = document.querySelector('.side-mobile-nav');
const sideNav = document.querySelector('.side-nav-mobile');


function sideNavTangle() {

    //   if sideNav.style:'flex' then set it to 'none' else set it to 'flex'
    if (sideMobNav.style.display === 'flex') {
        sideMobNav.style.opacity = '0';
        sideNav.style.transform = 'translate(100%)';
        setTimeout(() => {
            sideMobNav.style.display = 'none';

        }, 100);

    } else {
        sideMobNav.style.display = 'flex';

        setTimeout(() => {
            sideMobNav.style.opacity = '1';
            sideNav.style.transform = 'translate(0%)';
        }, 100);
    }


}

// video play and pause
const video = document.querySelector('video');
const playBtn = document.querySelector('#video-player');
const MuteBtn = document.querySelector('#mute-btn');

function playVideo() {
    if (video.paused) {
        video.play();
        // replace  <i class="fa-solid fa-play"></i> with <i class="fa-solid fa-pause"></i>
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playBtn.style.opacity = '.5';
        MuteBtn.style.opacity = '.5';


    } else {
        video.pause();
        // replace  <i class="fa-solid fa-pause"></i> with <i class="fa-solid fa-play"></i>
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        MuteBtn.style.opacity = '0';

    }
}
function muteVideo() {
    if (video.muted) {
        video.muted = false;
        MuteBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    } else {
        video.muted = true;
        MuteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
}

// play-movie display
const playMovieYoutube = document.querySelector('.play-movie-in-youtube');

// play-movie display block and play video in youtube embed
function playMovieDisplay() {
    playMovieYoutube.style.display = 'block';

}
// sendEmail function

const bodyElement = document.getElementById('message');

function sendEmail(e) {
    e.preventDefault();
    // Trim input values to remove leading/trailing spaces
    const body = bodyElement.value.trim();


    if (!body) {
        bodyElement.focus();
        return;
    }

    const encodedSubject = "message from your website";
    const encodedBody = encodeURIComponent(body);
    const email = "info@aplusmultimedia.com";

    // Construct and open the mailto link
    const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;
    // send-btn span remove and add loading gif path assets/images/Animation.gif
    const sendBtn = document.querySelector('#send-btn');

    sendBtn.innerHTML = '<img src="assets/images/icons/Animation.gif" alt="loading" class="loading-gif">';
    // after 5seconds redirect to the mailto link
    setTimeout(() => {

        sendBtn.innerHTML = '<span class="fa fa-arrow-right" aria-hidden="true"></span>';
        bodyElement.value = '';
        window.location.href = mailtoLink;

    }, 1500);

}

function focusedInput() {
    bodyElement.focus();
}



const programArray = [
    { programType: 'Movies', programName: 'One Shoot', image: 'assets/images/Art.jpg' },
    { programType: 'TV Show', programName: 'Shark Tank', image: 'assets/images/shark-tank.jpg' },
    { programType: 'Movies', programName: 'Lioness', image: 'assets/images/lioness1.jpg' },
    { programType: 'Series Movies', programName: 'The Last of us', image: 'assets/images/s-l1200.jpg' },

];
const heroImage = document.querySelector('.hero-image');
const heroProgramType = document.querySelector('.hero-program-type');
const heroProgramName = document.querySelector('.hero-program-name');
const progressBar = document.querySelector('.progress-bar');

// change the hero hero-image,hero-program-type, hero-program-name, every 5 seconds
let currentIndex = 0;
let progress = 0;

heroImage.src = programArray[currentIndex].image;
heroProgramType.innerHTML = programArray[currentIndex].programType;
heroProgramName.innerHTML = programArray[currentIndex].programName;

function changeHero() {
    const program = programArray[currentIndex];

    heroImage.src = program.image;
    heroProgramType.innerHTML = program.programType;
    heroProgramName.innerHTML = program.programName;
    currentIndex = (currentIndex + 1) % programArray.length;
    heroProgramName.style.transform = 'translateY(0%)';
    heroProgramName.style.opacity = '1';
    heroProgramType.style.opacity = '1';

    setTimeout(() => {
        heroProgramName.style.transform = 'translateY(10%)';
        heroProgramName.style.opacity = '0';
        heroProgramType.style.opacity = '0';
    }, 9500);

}




// css --progress variable  bar update use programArray CurrentIndex
function updateProgressBar() {
    progress += 1;
    if (progress >= 100) {
        progress = 0;
        currentIndex = (currentIndex + 1) % programArray.length;
        changeHero();
    }
    progressBar.style.setProperty('--progress', `${progress}`);
}
setInterval(updateProgressBar, 100);





document.addEventListener('DOMContentLoaded', function () {
    const sections = {
        'about-page': document.getElementById('about-page'),
        'shows-page': document.getElementById('shows-page'),
        'movies-page': document.getElementById('movies-page')
    };

    const navLinks = {
        'about-page': document.querySelector('a[href="#about-page"]'),
        'shows-page': document.querySelector('a[href="#shows-page"]'),
        'movies-page': document.querySelector('a[href="#movies-page"]')
    };

    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.id;
            const navLink = navLinks[sectionId];

            if (entry.isIntersecting) {
                // Add active class
                navLink.classList.add(
                    'active'
                );
                navLink.classList.remove(
                    ''
                );
            } else {
                navLink.classList.remove(
                    'active'
                );
                navLink.classList.add(
                    '',

                );
            }
        });
    }, observerOptions);

    // Observe all sections
    Object.values(sections).forEach(section => {
        if (section) observer.observe(section);
    });
});



