//Redirect to connexion page if not connected
const token = localStorage.getItem('token');
// check if token doesn't exist and the page is not connexion page then redirect to connexion page
if (!token && window.location.pathname.includes('connexion.html') === false) {
    window.location.href = 'connexion.html';
}

// To connecte 
function Save() {
    localStorage.setItem('token', 'token');
    window.location.href = 'index.html';
}

//To disconnecte
function UnSave() {
    localStorage.removeItem('token');
    window.location.href = 'connexion.html';
}

// Switch de form inscription/connexion sur la page de connexion
const inscrip = document.getElementById('inscrip');
const connec = document.getElementById('connec');
const SwitchForm = document.getElementById('SwitchForm');
const ToSwitch = document.getElementById('ToSwitch');

SwitchForm.addEventListener('click', () => {
    if (inscrip.style.display === 'none') {
        inscrip.style.display = 'block';
        connec.style.display = 'none';
        SwitchForm.innerHTML = 'connecter vous.';
        ToSwitch.innerHTML = 'déjà membre ?';
    } else {
        inscrip.style.display = 'none';
        connec.style.display = 'block';
        SwitchForm.innerHTML = 'inscriver vous.';
        ToSwitch.innerHTML = 'pas encore membre ?';
    }
});

// Talk To Text for input
const OpenMics = document.querySelectorAll('.micro');

OpenMics.forEach((OpenMic) => {
    OpenMic.addEventListener('click', () => {
        console.log(OpenMic.previousElementSibling)
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'fr-FR';
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.start();
            recognition.onresult = function (e) {
                OpenMic.previousElementSibling.value = e.results[0][0].transcript;
                recognition.stop();
            };
            recognition.onerror = function (e) {
                recognition.stop();
            };
        }
    });
});