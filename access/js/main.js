$('.kindroom-item').slick({
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    speed: 1500,
    autoplay: true,  
    autoplaySpeed: 2000,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    prevArrow: '<button class="chevron-prev"><ion-icon name="arrow-back-outline"></ion-icon></button>',
    nextArrow: '<button class="chevron-next"><ion-icon name="arrow-forward-outline"></ion-icon></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: false,
            arrows: true,
            centerMode: true,
            slidesToShow: 3
          }
        }
      ]
  });

  $('.culinary-list-item').slick({
    centerMode: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth: true,
    // adaptiveHeight: true,
    slidesToShow: 1,
    prevArrow: '<button class="chevron-prev"><ion-icon name="arrow-back-outline"></ion-icon></button>',
    nextArrow: '<button class="chevron-next"><ion-icon name="arrow-forward-outline"></ion-icon></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            // centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 1
          }
        }
      ]
  });
  $('.feed-back-content').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    dots:true,
    arrows:false,
    
  });

  $('.list-banner').slick({
    centerMode: true,
    centerPadding: '60px',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 3,
    dots:true,
    prevArrow: '<button class="chevron-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
    nextArrow: '<button class="chevron-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',

  });
  AOS.init();

  
  const listMenu = document.querySelector('.menu-repon')
  const menu = document.querySelectorAll('.repon-item')
  const itemMenu = document.querySelector('.list-menu')
  function changeMenu() {
    for( i = 0; i < menu.length; i++ ) {
      menu[i].classList.toggle('active')
    }
  }

  function showMenu() {
    itemMenu.classList.toggle('active');
  }

  listMenu.addEventListener('click' , showMenu)
  listMenu.addEventListener('click' , changeMenu)


  let inputnumber = 2 ;
  const people = document.querySelector('.people');
  const decrement = document.getElementById('decrement'); 
  const increment = document.getElementById('increment'); 
  function incrementNumber(){
    inputnumber += 1;
    document. querySelector('.people').value = inputnumber
  }
  function decrementNumber(){
    inputnumber -= 1;
    document. querySelector('.people').value = inputnumber
  }
  increment.addEventListener('click', incrementNumber)
  decrement.addEventListener('click', decrementNumber)



  let children = 2;
  const upChildren=document.querySelector('.upChildren')
  const downChildren=document.querySelector('.downChildren')
  function childrenUp(){
    children += 1;
    document. querySelector('.children').value = children
  }
  function ChildrenDown(){
    children -= 1;
    document. querySelector('.children').value = children
  }

  upChildren.addEventListener('click', childrenUp )
  downChildren.addEventListener('click', ChildrenDown )



  let room = 0;
  const upRoom=document.querySelector('.upRoom')
  const downRoom=document.querySelector('.downRoom')
  function roomUp(){
    room += 1;
    document. querySelector('.roomnumber').value = room
  }

  function RoomDown(){
    room -= 1;
    document. querySelector('.roomnumber').value = room
  }

  upRoom.addEventListener('click', roomUp )
  upRoom.addEventListener('click', RoomDown )

  const carIcon = document.querySelector('.car-icon')
  const listIcon = document.querySelectorAll('.icon')
  function accordionIcon (){
    for(i = 0; i < listIcon.length; i++){ 
      listIcon[i].classList.toggle('active')
  }
}
carIcon.addEventListener('click', accordionIcon);



// document.documentElement.scrollTop = document.body.scrollTop = 1000;



