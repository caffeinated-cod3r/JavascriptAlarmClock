console.log('hello world');





const alarmSubmit = document.getElementById('alarmSubmit');
var audio = new Audio('Into-The-Blue.mp3');


// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm)



// function to play the alarm ringtone
function ringBell() {
    audio.play();

}


// This function will run whenever  alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value)
    console.log(`Setting alarm for ${alarmDate}...`);
    now = new Date();

    let timetoAlarm = alarmDate - now;
    console.log(timetoAlarm);
    if(timetoAlarm>=0){
    setTimeout(() => {
        ringBell();
    }, timetoAlarm);
    
}}