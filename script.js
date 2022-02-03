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
const portfolio = [
  {
    id: 'c1',
    title: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    image: 'url("icons/c1d.png")',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    id: 'c2',
    title: 'Multi-Post Stories',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'url("icons/c2d.png")',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 'c3',
    title: 'Facebook 360',
    client: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    image: 'url("icons/c3d.png")',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    id: 'c4',
    title: 'Uber Navigation',
    client: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    image: 'url("icons/c4d.png")',
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
  project.innerHTML = portfolio[index].title;
  client.innerHTML = portfolio[index].client;
  role.innerHTML = portfolio[index].role;
  year.innerHTML = portfolio[index].year;
  description.innerHTML = portfolio[index].description;
  picture.style.background = portfolio[index].image;
});
