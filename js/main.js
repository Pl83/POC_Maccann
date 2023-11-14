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

// Connexion  not working
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const btnConnec = document.getElementById('btnConnec');

// btnConnec.addEventListener('click', (e) => {
//     //check si les champs sont remplis
//     if (email.value === '' || password.value === '') {
//         e.preventDefault();
//         alert('Veuillez remplir tous les champs.');
//     }
//     //check si le mail est valide
//     else if (!email.value.includes('@')) {
//         e.preventDefault();
//         alert('Veuillez entrer un email valide.');
//     }
//     //check si le mot de passe est valide
//     else if (password.value.length < 6) {
//         e.preventDefault();
//         alert('Veuillez entrer un mot de passe de 6 caractères minimum.');
//     }
//     window.location.href = 'index.html';
// });
