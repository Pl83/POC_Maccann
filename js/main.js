// Switch de form inscription/connexion sur la page de connexion
const inscrip = document.getElementById('inscrip');
const connec = document.getElementById('connec');
const SwitchForm = document.getElementById('SwitchForm');

SwitchForm.addEventListener('click', () => {
    if (inscrip.style.display === 'none') {
        inscrip.style.display = 'block';
        connec.style.display = 'none';
        SwitchForm.innerHTML = 'connecter vous.';
    } else {
        inscrip.style.display = 'none';
        connec.style.display = 'block';
        SwitchForm.innerHTML = 'inscriver vous.';
    }
});



