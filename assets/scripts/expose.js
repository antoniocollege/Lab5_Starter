window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById('horn-select');
  let img = document.querySelector('#expose img');
  let audio = document.querySelector('audio');
  let slider = document.getElementById('volume');
  let icon = document.querySelector('#volume-controls img');
  let button = document.querySelector('button');

  let confetti = new JSConfetti();

  //change horn
  hornSelect.addEventListener('change', function() {
    let val = hornSelect.value;

    if (val === 'air-horn') {
      img.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } else if (val === 'car-horn') {
      img.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } else if (val === 'party-horn') {
      img.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  //volume slider
  slider.addEventListener('input', function() {
    let v = slider.value;

    audio.volume = v / 100;

    if (v == 0) {
      icon.src = 'assets/icons/volume-level-0.svg';
    } else if (v < 33) {
      icon.src = 'assets/icons/volume-level-1.svg';
    } else if (v < 67) {
      icon.src = 'assets/icons/volume-level-2.svg';
    } else {
      icon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  //play sound
  button.addEventListener('click', function() {
    audio.play();

    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
}
