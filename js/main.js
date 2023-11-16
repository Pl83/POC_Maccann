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

if (window.location.pathname.includes('connexion.html')) {
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
}

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

// Update Navbar active tabs

const navLinks = document.querySelectorAll('.navlink');
const path = window.location.pathname;

const sections = ['index', 'conger', 'fdt', 'racourcis', 'dmat', 'guide'];

for (let i = 0; i < navLinks.length; i++) {
    const section = sections[i];
    const isSelected = path.includes(section);
    
    if (isSelected) {
        navLinks[i].classList.add('selected');
    } else {
        navLinks[i].classList.remove('selected');
    }
}

// Génaration contenu racourcis

if (window.location.pathname.includes('racourcis.html')) {
    const order = document.getElementById('order');
    
    const boxTypes = [
        { image: 'img/Racou_Teams.png', label: 'Teams', code: 'T' },
        { image: 'img/Racou_Mail.png', label: 'Mail', code: 'M' },
        { image: 'img/Racou_Linkdin.png', label: 'Linkdin', code: 'L' }
    ];

    for (let i = 0; i < 17; i++) {
        const randomBoxType = boxTypes[Math.floor(Math.random() * boxTypes.length)];

        const box = document.createElement('div');
        box.classList.add('Box');

        const firstImage = document.createElement('img');
        firstImage.src = randomBoxType.image;

        const p = document.createElement('p');
        p.innerHTML = randomBoxType.label;

        const underBox = document.createElement('div');
        underBox.classList.add('UnderBox');

        const secondImage = document.createElement('img');
        secondImage.src = 'img/Racou_CM.png';

        const p2 = document.createElement('p');
        p2.innerHTML = ` + ${randomBoxType.code}`;

        underBox.appendChild(secondImage);
        underBox.appendChild(p2);
        box.appendChild(firstImage);
        box.appendChild(p);
        box.appendChild(underBox);
        box.tabIndex = i+1;

        order.appendChild(box);
    }

    let box = document.createElement('div');
    box.classList.add('Box');
    let add = document.createElement('img');
    add.src = 'img/Racou_Add.png';
    box.appendChild(add);
    box.tabIndex = 18;
    order.appendChild(box);

}


// Demande de matériel contenue interactif, changement d'étape

if (window.location.pathname.includes('dmat.html')) {
    const btn = document.getElementById('FormNext');
    const dots = document.querySelectorAll('.Dot');
    const FirstImg = document.getElementById('FirstImg');
    const SecondImg = document.getElementById('SecondImg');
    const titre = document.querySelector('#form h4');
    const form = document.querySelector('#form form');
    var step = 1;

    btn.addEventListener('click', () => {
        if (step === 1){
            dots[0].classList.remove('CurrentDot');
            dots[1].classList.add('CurrentDot');
            FirstImg.src = 'img/full_line.png';
            SecondImg.src = 'img/dashed_line.png';
            titre.innerHTML = 'Etape 2 : Choix du matériel';
            form.style.opacity = '0';
            step = 2;
        } else if (step === 2){
            dots[1].classList.remove('CurrentDot');
            dots[2].classList.add('CurrentDot');
            SecondImg.src = 'img/full_line.png';
            titre.innerHTML = 'Etape 3 : Finalisation';
            step = 3;
        }
    });
}

// Fin javascript