function setDate()
{
    const now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let secondsDegree = ((seconds/60)*360)+90;
    let minutesDegree = ((minutes/60)*360)+90;
    let hoursDegree = ((hours/12)*360)+90;

    secondHand.style.transform = `rotate(${secondsDegree}deg);`;
    minuteHand.style.transform = `rotate(${minutesDegree}deg);`;
    hourHand.style.transform = `rotate(${hoursDegree}deg);`;
    console.log(hours);
}

const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let minutes = now.getMinutes();
let hours = now.getHours();

setInterval(setDate, 1000);