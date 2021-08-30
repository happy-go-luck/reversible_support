const slidBox = document.getElementById('slid-img');
const slidImgs = [
  './imgs/z-slide1.png',
  './imgs/z-slide2.png',
  './imgs/z-slide1.png',
  './imgs/z-slide2.png',
  './imgs/z-slide1.png',
];

let counter = -1;

slid();

function slid() {
  counter++;

  if(counter == slidImgs.length) {
    counter = 0;
  }

  slidBox.src = slidImgs[counter];

  setTimeout('slid()',4000);
}





const mainImg = document.getElementById('main-img');
const mainCopy = document.getElementById('h-copy');

mainCopy.animate([{opacity:'0'},{opacity:'1'}],4000);
mainImg.animate([{opacity:'0'},{opacity:'1'}],4000);
mainImg.animate([{width:'10%'},{position:'90%'}],2000);


// $(window).on('load',function(){
//   // $("#js-loader").fadeOut(); これだけでOK

//   // codepen用
//   function loaderClose(){
//     $("#loading").fadeOut();
//   }
//   setTimeout(loaderClose, 1000);
  
// });
