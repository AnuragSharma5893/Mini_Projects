const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days"),
prevNextIcon = document.querySelectorAll(".icons span");


// getting new data, current year and month 
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const months = ["January" , "February", "March", "April", "May", "June",
                "july", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    // if we don't add + 1 it'll give previous month last date  
    let firstDateofMonth = new Date(currYear, currMonth , 1).getDay(), //...getDay() returns the day of the week(0 to 6) of a date 
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //...getting last  date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //...getting last  day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();//...getting last date of previous month
    let liTag  = "";

    for(let i= firstDateofMonth; i>0 ; i--) { // creating li of previous month last days
        liTag += `<li class= "inactive">${lastDateofLastMonth -i + 1}</li>`;
    }

    for(let i=1; i<= lastDateofMonth ; i++){ // creating li of all days of current month 
        // adding active  class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                    && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class = "${isToday}">${i}</li>`;
    }

    for(let i= lastDayofMonth; i < 6; i++){ // creating li of next month first days
        liTag += `<li class="inactive">${i- lastDayofMonth + 1}</li>`;
    }


    currentDate.innerText = `${months[currMonth]} ${currYear}`; // getMonth() returns the month(0 to 11) of a date
     daysTag.innerHTML = liTag;
}

renderCalendar();


prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => { // adding click event on both the icons
        // console.log(icon);
        // if clicked icon is previous icon then decrement month by 1 else increment by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

         if(currMonth < 0 || currMonth > 11){ // if current month is less than 0 or greater than 11
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); //.. updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month 
        }   else{   //... else passing new date as date value
            date = new Date();
        } 

        renderCalendar();
    })
});