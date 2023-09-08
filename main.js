const currentDay = document.querySelector(".current-day");
const currentTime = document.querySelector(".current-time");

// Day of the week
const renderTimeAndDateDom = () => {
  const date = new Date();
  const dayOfTheWeek = date.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  currentDay.textContent = weekDays[dayOfTheWeek];

  const UTC = date.toUTCString();
  const currentTimeInMilliseconds = new Date(UTC).getTime();
  currentTime.textContent = currentTimeInMilliseconds;
};


renderTimeAndDateDom()
setInterval(renderTimeAndDateDom, 1000);
