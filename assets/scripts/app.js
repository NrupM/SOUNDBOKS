// Set the date we're counting down to
const countDownDate = new Date("Dec 11, 2017 23:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

    const now = new Date().getTime();

    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "SOLD OUT";
    }

}, 1000);