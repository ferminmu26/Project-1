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

// Pop up window

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
// Card's data object
name: "Submarine game",
description: "A Phaser3 plataformer game built as part of the Microverse JavaScript program.",
image: "link_to_image.jpg",
technologies: ["Phaser3", "JavaScript", "Jest"],
link: "link_to_live_version.com",
const portfolio = [
  {
    id: 'c1',
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    featuring image: 'url("icons/c1d.png")',
    technologies: ["html", "css", "javaScript"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  },
  {
    id: 'c2',
    name: 'Multi-Post Stories',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    featuring image: 'url("icons/c2d.png")',
    technologies: ["html","Ruby on rails", "css", "javaScript"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  },
  {
    id: 'c3',
    name: 'Facebook 360',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    featuring image: 'url("icons/c3d.png")',
    technologies: ["html","Ruby on rails", "css", "javaScript"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  },
  {
    id: 'c4',
    name: 'Uber Navigation',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    featuring image: 'url("icons/c4d.png")',
    technologies: ["html","Ruby on rails", "css", "javaScript"],
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  },

];

const popupObject = [
    {
      id: 'c1',
      name: 'Tonic',
      client: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
      featuring image: 'url("icons/c1d.png")',
      technologies: ["html", "css", "javaScript"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    {
      id: 'c2',
      name: 'Multi-Post Stories',
      client: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
      technologies: ["html","Ruby on rails", "css", "javaScript"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 'c3',
      name: 'Facebook 360',
      client: 'FACEBOOK',
      role: 'Full Stack Dev',
      year: '2015',
      featuring image: 'url("icons/c3d.png")',
      technologies: ["html","Ruby on rails", "css", "javaScript"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
    {
      id: 'c4',
      name: 'Uber Navigation',
      client: 'Uber',
      role: 'Lead Developer',
      year: '2018',
      featuring image: 'url("icons/c4d.png")',
      technologies: ["html","Ruby on rails", "css", "javaScript"],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    },
  
  ];

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
const container = document.getElementById('portfolio');
const cards = [].slice.call(container.querySelectorAll('.click'), 0);

// getting index from cards buttons
container.addEventListener('click', (e) => {
  const index = cards.indexOf(e.target);
  project.innerHTML = popupObject[index].title;
  client.innerHTML = popupObject[index].client;
  role.innerHTML = popupObject[index].role;
  year.innerHTML = popupObject[index].year;
  description.innerHTML = popupObject[index].description;
  picture.style.background = popupObject[index].image;
});