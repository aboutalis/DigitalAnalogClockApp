//Get the current Date  
const currentDate = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayOfWeek = daysOfWeek[currentDate.getDay()];
const day = currentDate.getDate();
const month = months[currentDate.getMonth()];
const year = currentDate.getFullYear();

const dateString = `${dayOfWeek}, ${day} ${month} ${year}`;

date.textContent = dateString;

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day2 = new Date();
    let h = day2.getHours()*30;
    let m = day2.getMinutes()*deg;
    let s = day2.getSeconds()*deg;

    hr.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
    mn.style.transform = `rotateZ(${m}deg)`;
    sc.style.transform = `rotateZ(${s}deg)`;
})


