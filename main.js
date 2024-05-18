let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours() * 30;
  let mins = date.getMinutes() * 6;
  let secs = date.getSeconds() * 6;

  hr.style.transform = `rotatez(${hour + mins / 12}deg)`;
  min.style.transform = `rotatez(${mins}deg)`;
  sec.style.transform = `rotatez(${secs}deg)`;
});

//digital-clock

let Hours = document.querySelector("#hours");
let Minutes = document.querySelector("#minutes");
let Seconds = document.querySelector("#seconds");
let timeFormat = document.querySelector("#ampm");

let date = new Date();
let Hour = date.getHours();
let Mins = date.getMinutes();
let Sec = date.getSeconds();
let ampm = Hour >= 12 ? "PM" : "AM";
if (Hour > 12) {
  Hour = Hour - 12;
}
Hour = Hour < 10 ? "0" + Hour : Hour;
Mins = Mins < 10 ? "0" + Mins : Mins;
Sec = Sec < 10 ? "0" + Sec : Sec;

Hours.innerText = `${Hour}`;
Minutes.innerText = `${Mins}`;
Seconds.innerText = `${Sec}`;
timeFormat.innerText = `${ampm}`;
