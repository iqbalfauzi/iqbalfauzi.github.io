function countComm(val) {
    var len = val.value.length;
    if (len >= 250) {
        val.value = val.value.substring(0, 250);
    } else {
        $('#charNum').text(250 - len);
    }
};

function countName(val) {
    var len = val.value.length;
    if (len >= 30) {
        val.value = val.value.substring(0, 30);
    } else {
        $('#charName').text(30 - len);
    }
};

document.getElementById('mute-sound').style.display = 'none';
document.getElementById('unmute-sound').addEventListener('click', function(event) {
    document.getElementById('unmute-sound').style.display = 'none';
    document.getElementById('mute-sound').style.display = 'inline-block';
    document.getElementById('song').pause();
});

document.getElementById('mute-sound').addEventListener('click', function(event) {
    document.getElementById('mute-sound').style.display = 'none';
    document.getElementById('unmute-sound').style.display = 'inline-block';
    document.getElementById('song').play();
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 21, 2021 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

message = "Fathul & Ririn Wedding Invitation ";
function step() {
    message = message.substr(1) + message.substr(0,1);
    document.title = message.substr(0,15);
}
