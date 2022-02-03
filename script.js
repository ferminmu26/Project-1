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

//Pop up window

const OpenPopup = document.querySelectorAll('.click');
const ClosePopup = document.querySelector('.close-popup')
const PopWindow = document.querySelector('.popupcontainer');
function popup(){
  console.log('popup');
  if (show === false) {
    PopWindow.style.visibility = 'visible';
    show = true;
  }else{
    PopWindow.style.visibility = 'hidden';
    show = false;

  }
}


//listening click for all butons
OpenPopup.forEach(
  function(cbox) {
   cbox.addEventListener("click", popup);
  }
);
ClosePopup.addEventListener('click', popup);
const portfolio = [
  {
  'id': 'c1', 
  'title':'Tonic',
  'client':'CANOPY',
  'role':'Back End Dev',
  'year':'2015',
  'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
  },
  {
    'id': 'c2', 
    'title':'Multi-Post Stories',
    'client':'FACEBOOK',
    'role':'Full Stack Dev',
    'year':'2015',
    'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
    },
    {
      'id': 'c3', 
      'title':'Facebook 360',
      'client':'FACEBOOK',
      'role':'Full Stack Dev',
      'year':'2015',
      'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
      },
      {
        'id': 'c4', 
        'title':'Uber Navigation',
        'client':'Uber',
        'role':'Lead Developer',
        'year':'2018',
        'description':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent"
        },
      


]
