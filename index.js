const days =document.querySelector('#days');
const hours =document.querySelector('#hours');
const minutes =document.querySelector('#minutes');
const seconds =document.querySelector('#seconds');

const currentYear =new Date().getFullYear();
const nextYear =currentYear+1;

console.log("currentYear",nextYear)
console.log("nextYear",nextYear)

setInterval(()=>{
    const curreentDate =new Date();
    const newYearDate =new Date(`january 01 ${nextYear} 00:00:00`);
    const totalSeconds =(newYearDate-curreentDate)/1000;

    const daysLeft =Math.floor(totalSeconds/3600/24);
    const hoursLeft =Math.floor(totalSeconds/3600)%24;
    const minutesLeft =Math.floor(totalSeconds/60)%60
    const secndsLeft =Math.floor(totalSeconds)%60;

    days.innerHTML=daysLeft;
    hours.innerHTML=hoursLeft;
    minutes.innerHTML=minutesLeft;
    seconds.innerHTML=secndsLeft

},1000)