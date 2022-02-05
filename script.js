const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');
const link = document.querySelector('.menu-container');
let show = false;
function MobileMenu() {
  if (show === false) {
    menu.style.display = 'flex';
    toggle.style.background = 'url("icons/exit.png")';
    show = true;
  } else {
    menu.style.display = 'none';
    toggle.style.background = 'url("icons/Hamburguer.png")';
    show = false;
  }
}
toggle.addEventListener('click', MobileMenu);
link.addEventListener('click', MobileMenu);

// Pop up window and portfolio cards
const container = document.getElementById('portfolio'); // work section
const PopWindow = document.querySelector('.popupcontainer');

// Card's data object

const portfolio = [
  {
    id: 'c1',
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    image: 'icons/c1d.png',
    technologies: ['html', 'css', 'javaScript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 'c2',
    name: 'Multi-Post Stories',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'icons/c2d.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 'c3',
    name: 'Facebook 360',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'icons/c3d.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    id: 'c4',
    name: 'Uber Navigation',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    image: 'icons/c4d.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },

];

const popupObject = [
  {
    id: 'c1',
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    image: 'icons/c1d.png',
    technologies: ['html', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    id: 'c2',
    name: 'Multi-Post Stories',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'icons/c2d.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 'c3',
    name: 'Facebook 360',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'icons/c3d.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    id: 'c4',
    name: 'Uber Navigation',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    image: 'icons/c4d.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },

];

function SectionBuilder() {
  let cardStrings = '<div class="card-container">'
        + '<a href="" '
        + ' ><img src="feature-img" alt="" class="portfoliocard" />'
        + ' <img src="feature-img" alt="" class="portfolio-desktop" />'
        + '</a>'
        + '<div class="c1-container">'
        + '<div> '
        + '<h2 class="project">Tonic</h2>'
        + '</div> '
        + '<div class="descrcontainer"> '
        + '<div> '
        + '<p class="client">CANOPY</p> '
        + ' </div> '
        + '<div class="mark"> '
        + '<img src="icons/Counter.png" alt="" /> '
        + '</div> '
        + '<div> '
        + '<p class="role">Back End Dev</p> '
        + '</div> '
        + '<div class="mark"> '
        + '<img src="icons/Counter.png" alt="" /> '
        + '</div> '
        + '<div> '
        + '<p class="year">2015</p> '
        + '</div> '
        + '</div> '
        + '<div> '
        + '<p class="descrdetail"> '
        + 'textereas '
        + '</p> '
        + '</div> '
        + '<ul class="tagcontainer">'
        + '<li class="tag">tech</li> '
        + '<li class="tag">tech</li> '
        + '<li class="tag">tech</li> '
        + '<li class="tag">tech</li> '
        + '<li class="tag">tech</li> '
        + '<li class="tag">tech</li> '
        + '</ul> '
        + '<div> '
        + '<button type="button" id="button-index" class="click" data-open="popupcontainer"> '
        + 'See Project '
        + '</button> '
        + '</div> '
        + '</div> '
        + '</div>  ';
  const cardWork = cardStrings;
  for (let i = 0; i < portfolio.length; i += 1) {
    cardStrings = cardWork;
    cardStrings = cardStrings.replace('card-container', portfolio[i].id);
    cardStrings = cardStrings.replaceAll('feature-img', portfolio[i].image);
    cardStrings = cardStrings.replaceAll('Tonic', portfolio[i].name);
    cardStrings = cardStrings.replaceAll('CANOPY', portfolio[i].client);
    cardStrings = cardStrings.replaceAll('Back End Dev', portfolio[i].role);
    cardStrings = cardStrings.replaceAll('2015', portfolio[i].year);
    cardStrings = cardStrings.replaceAll('textereas', portfolio[i].description);

    for (let x = 0; x < portfolio[i].technologies.length; x += 1) {
      cardStrings = cardStrings.replace('tech', portfolio[i].technologies[x]);
    }
    cardStrings = cardStrings.replaceAll('<li class="tag">tech</li>', '');
    container.innerHTML += cardStrings;
  }
}
function PopupBuilder(btn, index) {
  btn.addEventListener('click', () => {
    PopWindow.style.visibility = 'visible';
    let popupContent = '<div class="popup">'
              + '<div class="headContainer">'
              + '<div>'
              + '<h2 class="project">Tonic</h2>'
              + '</div><button class="close-popup">✕</button></div>'
              + '<div class="descrcontainer">'
              + '<div><p class="client">CANOPY</p></div>'
              + '<div class="mark"><img src="icons/Counter.png" alt="" /></div>'
              + '<div><p class="role">Back End Dev</p></div>'
              + '<div class="mark"><img src="icons/Counter.png" alt="" /></div>'
              + '<div><p class="year">2015</p></div>'
              + '</div>'
              + '<div class="pop-img"><img class="popup-img" src="feature-img" alt=""></div>'
              + '<div class="popup-container">'
              + '<div class="description-popup">'
              + '<p class="descrdetail">textereas</p></div>'
              + '<div class="footer-container">'
              + '<ul class="tagcontainer">'
              + '<li class="tag">tech</li> '
              + '<li class="tag">tech</li> '
              + '<li class="tag">tech</li> '
              + '<li class="tag">tech</li> '
              + '<li class="tag">tech</li> '
              + '<li class="tag">tech</li> '
              + '</ul>'
              + '<div class="button-container">'
              + '<button type="button" class="click1">'
              + 'See live<span><img src="icons/seem.png" alt="live" /></span>'
              + '</button>'
              + '<button type="button" class="click1">'
              + 'See Source<span><img src="icons/github.svg" alt="live"/></span>'
              + '</button>'
              + '</div>'
              + '</div>'
              + '</div>'
              + '</div>';

    popupContent = popupContent.replaceAll('feature-img', popupObject[index].image);
    popupContent = popupContent.replaceAll('Tonic', popupObject[index].name);
    popupContent = popupContent.replaceAll('CANOPY', popupObject[index].client);
    popupContent = popupContent.replaceAll('Back End Dev', popupObject[index].role);
    popupContent = popupContent.replaceAll('2015', popupObject[index].year);
    popupContent = popupContent.replaceAll('textereas', popupObject[index].description);

    for (let x = 0; x < popupObject[index].technologies.length; x += 1) {
      popupContent = popupContent.replace('tech', portfolio[index].technologies[x]);
    }
    popupContent = popupContent.replaceAll('<li class="tag">tech</li>', '');
    PopWindow.innerHTML = popupContent;
  });
}
function closePopup(btn) {
  btn.addEventListener('click', () => {
    PopWindow.style.visibility = 'hidden';
  });
}
document.addEventListener('DOMContentLoaded', SectionBuilder);

function close() {
  const ClosePopup = PopWindow.querySelectorAll('.close-popup');
  ClosePopup.forEach(closePopup);
}

/* for excecute an acton inside an dynamic content must be
created another fucntion that read the classes or what i need call */

function execute() {
  const btns = container.querySelectorAll('button');
  btns.forEach(PopupBuilder);
}
/* event triggers */
container.addEventListener('click', execute);
PopWindow.addEventListener('click', close);

// Form Validation
const form = document.getElementById('form');
const error = document.querySelector('.error');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  const message = [];
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    message.push('E-mail has to be in lowercase letters !!!');
  }
  if (message.length > 0) {
    error.innerText = message.join(', ');
  }
});

let formLocal = { name: '', email: '', message: '' };
if (localStorage.formLocal) {
  formLocal = JSON.parse(localStorage.formLocal);
  name.value = formLocal.name;
  email.value = formLocal.email;
  message.value = formLocal.message;
}
form.addEventListener('input', () => {
  localStorage.formLocal = JSON.stringify(formLocal);
  formLocal.name = name.value;
  formLocal.email = email.value;
  formLocal.message = message.value;
});

// Form Validation
const formContainer = document.getElementsByClassName('form-container');
const check = document.querySelector('.notification');
const mail = document.getElementsByClassName('email');

formContainer.addEventListener('submit', (e) => {
  const message = [];
  if (mail.value !== mail.value.toLowerCase()) {
    e.preventDefault();
    message.push('E-mail has to be in lowercase letters !!!');
  }
  if (message.length > 0) {
    check.innerText = message.join(', ');
  }
});
