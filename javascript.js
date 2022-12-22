setInterval(() => {
    let dt = new Date();
    let dis = document.getElementById('time');
    dis.innerHTML = "Current time is " + dt;


    let hourstime = dt.getHours();
    let minutestime = dt.getMinutes();
    let secondstime = dt.getSeconds();
    let hrotation = 30 * hourstime + (minutestime / 2);
    let mrotation = 6 * minutestime;
    let srotation = 6 * secondstime;
    let h = document.getElementById('hours');
    let m = document.getElementById('minutes');
    let s = document.getElementById('seconds');
    h.style.transform = `rotate(${hrotation}deg)`;
    m.style.transform = `rotate(${mrotation}deg)`;
    s.style.transform = `rotate(${srotation}deg)`;

    audio.currentTime = 0;
	audio.play();
}, 1000);

let b = document.getElementById('btn');
let aud = document.getElementById('audi');
function pauseAudio()
{

    if(b.innerHTML=="Without Audio")
    {
        aud.pause();
        b.innerHTML="With Audio"
    }
    else
    {
        aud.play();
        b.innerHTML="Without Audio";
        b.style.fontSize='1.5rem'
    }
}