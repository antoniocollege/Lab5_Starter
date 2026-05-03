window.addEventListener('DOMContentLoaded', init);

function init() {
 
  const synth = window.speechSynthesis;
  
  const face = document.querySelector('#explore img');
  const textBox = document.querySelector('#explore textarea');
  const voiceDropdown = document.querySelector('#explore select');
  const talkButton = document.querySelector('#explore button');

  let voices = [];

  function loadVoices() {
    voices = synth.getVoices();
    
    voiceDropdown.innerHTML = '<option value="" disabled selected>Select voice:</option>';
    
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = voice.name + " (" + voice.lang + ")";
      voiceDropdown.appendChild(option);
    });
  }

  loadVoices();
  
  synth.onvoiceschanged = loadVoices;
  setTimeout(loadVoices, 300);

  talkButton.addEventListener('click', function() {
    
    const text = textBox.value.trim();
    
    if (text === "") {
      alert("No text");
      return;
    }

    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const selected = parseInt(voiceDropdown.value);
    if (!isNaN(selected) && voices[selected]) {
      utterance.voice = voices[selected];
    }

    utterance.onstart = function() {
      face.src = "assets/images/smiling-open.png";
    };

    utterance.onend = function() {
      face.src = "assets/images/smiling.png";
    };

    synth.speak(utterance);
  });
}
