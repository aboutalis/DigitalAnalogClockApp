const hours = document.getElementById("hours");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const date = document.getElementById("date");

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    
    //Add a zero in front of a zero digit number
    if(hr < 10) hr = '0' + hr;
    
    if(min < 10) min = '0' + min;
    
    if(sec < 10) sec = '0' + sec;
    
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
    
  })


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
  

  