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