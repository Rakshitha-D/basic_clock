function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let ampm = document.getElementById('ampm');

    if(hrs >=12){
        ampm.innerHTML = 'PM';
    }
    else{
        ampm.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs -12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 1000);