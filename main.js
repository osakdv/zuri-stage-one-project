const currentDay = document.querySelector(".current-day")
const currentTime = document.querySelector(".current-time")

const date = new Date()

// Day of the week
const dayOfTheWeek = date.getDay()
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
currentDay.textContent = weekDays[dayOfTheWeek]


// UTC time
const UTC = date.toUTCString();
const currentTimeInMilliseconds = new Date(UTC).getTime();
currentTime.textContent = currentTimeInMilliseconds;
