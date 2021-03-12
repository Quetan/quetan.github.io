// countdown script
document.addEventListener("DOMContentLoaded", function (e) {
  function countDown() {
    var distance =
      new Date("Jun 18, 2021 00:00:00").getTime() - new Date().getTime();
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let daysWrapper = document.getElementById("countdown-days");
    daysWrapper = daysWrapper.innerHTML = days + "<br /> дн";
    let hoursWrapper = document.getElementById("countdown-hours");
    hoursWrapper = hoursWrapper.innerHTML = hours + "<br /> ч";
    let minutesWrapper = document.getElementById("countdown-minutes");
    minutesWrapper = minutesWrapper.innerHTML = minutes + "<br /> мин";
    let secsWrapper = document.getElementById("countdown-secs");
    secsWrapper = secsWrapper.innerHTML = seconds + "<br /> сек";
    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown-items").innerHTML =
        "Приемная комиссия ужа стартовала!";
    }
  }
  let timer = setInterval(countDown, 1000);
});
