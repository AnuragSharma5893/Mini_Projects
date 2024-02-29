const currentTime = document.querySelector("h1"),
// const ringtone = document.getElementById("myaudio"),
constent = document.querySelector(".content"),
selectMenu = document.querySelectorAll("Select"),
setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet = false;
const ringtone = new Audio("./audio/ringtone1.mp3");

for(let i= 12 ; i > 0 ; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value = "${i}"> ${i}</option>`;
    // [0] index selects the first select tag
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend" , option);
} 

for(let i= 59 ; i >= 0 ; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value = "${i}"> ${i}</option>`;
    // [1] index selects the first select tag
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend" , option);
} 

for(let i= 2 ; i > 0 ; i--) {
    // if i == 1 set the ampm value to "AM" else set "PM"
    let ampm = i==1 ? "AM" : "PM";
    let option = `<option value = "${ampm}"> ${ampm}</option>`;
    // [2] index selects the first select tag
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend" , option);
} 


// showing original time to the display 
// This callback function will call after every 1000 milliseconds 
setInterval(() => {
    // a digital clock 
    // getting hours , mins , secs 
    let date = new Date();
    h = date.getHours(),
    m = date.getMinutes();
    s = date.getSeconds();
    ampm = "AM"

    if(h>12) {
        h = h-12;
        ampm = "PM";
    }

    // if hour value is 0 , set this value to 12
    h = h==0 ? h = 12 : h;
    // addding 0 before hr, min, sec if this value is less than 10
    h = h < 10 ? "0" + h : h ;
    m = m < 10 ? "0" + m : m ;
    s = s < 10 ? "0" + s: s;

      // console.log(`${h}:${m} : ${s} ${ampm}`);
        currentTime.innerText = `${h}:${m} : ${s} ${ampm}`;

        // setting ringtone 
        if(alarmTime == `${h}: ${m}  ${ampm}`){
            // console.log("Alarm ringing...");
            ringtone.play();
            ringtone.loop = true;
        }
}, 1000); // 1000 will tell us about the every millisecond of clock


// Working on Alarm 
function setAlarm(){
        
        if(isAlarmSet) { // if Alarm is true 
            alarmTime = ""; // clear the vlue of alarmTime 
            ringtone.pause(); // pause the ringtone
            constent.classList.remove("disble");
            setAlarmBtn.innerText  = "Set Alarm";
            return isAlarmSet = false;  // return isAlarm value is false 
        }

    // getting hours , minutes , ampm select tag value
    let time = `${selectMenu[0].value} : ${selectMenu[1].value} : ${selectMenu[2].value}`;
    
    // alert if show's , if the user hasn't select any time for alarm
    if(time.includes("Hours") || time.includes("Minutes") || time.includes("AM/PM")) {
        return alert("Invalid Time \n Please, select a valid time to set Alarm! ");
    }

    isAlarmSet = true;
    alarmTime = time;
    // setting diaplay menu if the alarm is set 
    constent.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    // console.log(time)
}

setAlarmBtn.addEventListener("click", setAlarm);