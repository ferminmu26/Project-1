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
const OpenPopup = document.querySelectorAll('.click');
const ClosePopup = document.querySelector('.close-popup');
const PopWindow = document.querySelector('.popupcontainer');
// popup variables
const project = document.querySelector('.popupcontainer .project');
const client = document.querySelector('.popupcontainer .client');
const role = document.querySelector('.popupcontainer .role');
const year = document.querySelector('.popupcontainer .year');
const description = document.querySelector('.popupcontainer .descrdetail');
const picture = document.querySelector('.popup-img');
const check = false;

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
    image: 'url("icons/c1d.png")',
    technologies: ['html', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    id: 'c2',
    name: 'Multi-Post Stories',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'url("icons/c2d.png")',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 'c3',
    name: 'Facebook 360',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'url("icons/c3d.png")',
    technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    id: 'c4',
    name: 'Uber Navigation',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    image: 'url("icons/c4d.png")',
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
    cardStrings = cardStrings.replaceAll('CANOPY', portfolio[i].client);
    cardStrings = cardStrings.replaceAll('Back End Dev', portfolio[i].role);
    cardStrings = cardStrings.replaceAll('2015', portfolio[i].year);
    cardStrings = cardStrings.replaceAll('textereas', portfolio[i].description);

    for (let x = 0; x < portfolio[i].technologies.length; x += 1) {
      cardStrings = cardStrings.replace('tech', portfolio[i].technologies[x]);
    }
    cardStrings = cardStrings.replaceAll('<li class="tag">tech</li>', '');
    container.innerHTML += cardStrings;

    if (i === portfolio.length) {
      return check;
    }
  }
}
window.addEventListener('load', SectionBuilder);

function popup() {
  if (show === false) {
    PopWindow.style.visibility = 'visible';
    show = true;
  } else {
    PopWindow.style.visibility = 'hidden';
    show = false;
  }
}

// listening click for all butons
OpenPopup.forEach(
  (cbox) => {
    cbox.addEventListener('click', popup);
  },
);
ClosePopup.addEventListener('click', popup);

// identifying cards
/* const work = window.getElementById('.click'); */

const cards = [].slice.call(container.querySelectorAll('button'), 0);

// getting index from cards buttons and creating popup function
container.addEventListener('click', (e) => {
  const index = cards.indexOf(e.target);
  project.innerHTML = popupObject[index].name;
  client.innerHTML = popupObject[index].client;
  role.innerHTML = popupObject[index].role;
  year.innerHTML = popupObject[index].year;
  description.innerHTML = popupObject[index].description;
  picture.style.background = popupObject[index].image;
});
/* function cardPopup(){
    project.innerHTML = popupObject[index].name;
    client.innerHTML = popupObject[index].client;
    role.innerHTML = popupObject[index].role;
    year.innerHTML = popupObject[index].year;
    description.innerHTML = popupObject[index].description;
    picture.style.background = popupObject[index].image;

} */