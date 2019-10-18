var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function play(){
    var frq=exp();
    playNote(frq,1000);
}
function playNote(frequency, duration) {
    duration = duration / 1000;

    // create Oscillator node
    var oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.value = frequency; // value in hertz
    oscillator.connect(audioCtx.destination);
    oscillator.start(0);
    oscillator.stop(audioCtx.currentTime + duration);
}
