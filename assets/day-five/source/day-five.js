//AIGLE

function toggleClass(event)
{
    let element = event.target;
    element.classList.toggle('after-change');
    element.classList.toggle('before-change');
}
let panels = document.querySelectorAll('.image');

panels.forEach(image => image.addEventListener('click', toggleClass));