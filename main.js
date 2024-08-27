const btn = document.getElementById('menu');
const btn1 = document.getElementById('menu2');

btn.addEventListener('click', () => {

    btn.classList.toggle('isExpanded');

    btn1.classList.toggle('hidden'); /*Slider*/


    /*btn1.classList.toggle('open');*/ /*Pop Up*/

    document.body.classList.toggle('no-scroll');

});

