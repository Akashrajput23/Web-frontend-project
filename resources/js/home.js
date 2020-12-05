// $(document).ready(function () {

//     $('.js--wp-1').waypoint(function (direction) {
//         $('.js--wp-1').addClass('animated fadeIn');

//     });

// });
const element = document.querySelector('.js--wp-1');
element.addEventListener('click', () => {
    element.classList.add('animate__animated', 'animate__bounce');
});