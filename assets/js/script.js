'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


/////////////////////////////////////////
///////////////////////////////////////
/////////////////////////////////////
///////////////////////////////////




/////////////////////////////////////////
///////////////////////////////////////
/////////////////////////////////////
///////////////////////////////////
/////////////////////////////////

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }


// var canvas = document.getElementById('nokey'),
//    can_w = parseInt(canvas.getAttribute('width')),
//    can_h = parseInt(canvas.getAttribute('height')),
//    ctx = canvas.getContext('2d');

// // console.log(typeof can_w);
// var BALL_NUM = 30

// var ball = {
//       x: 0,
//       y: 0,
//       vx: 0,
//       vy: 0,
//       r: 0,
//       alpha: 1,
//       phase: 0
//    },
//    ball_color = {
//        r: 207,
//        g: 255,
//        b: 255
//    },
//    R = 2,
//    balls = [],
//    alpha_f = 0.03,
//    alpha_phase = 0,
    
// // Line
//    link_line_width = 2,
//    dis_limit = 260,
//    add_mouse_point = true,
//    mouse_in = false,
//    mouse_ball = {
//       x: 0,
//       y: 0,
//       vx: 0,
//       vy: 0,
//       r: 0,
//       type: 'mouse'
//    };

// // Random speed
// function getRandomSpeed(pos){
//     var  min = -1,
//        max = 1;
//     switch(pos){
//         case 'top':
//             return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
//             break;
//         case 'right':
//             return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
//             break;
//         case 'bottom':
//             return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
//             break;
//         case 'left':
//             return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
//             break;
//         default:
//             return;
//             break;
//     }
// }
// function randomArrayItem(arr){
//     return arr[Math.floor(Math.random() * arr.length)];
// }
// function randomNumFrom(min, max){
//     return Math.random()*(max - min) + min;
// }
// console.log(randomNumFrom(0, 10));
// // Random Ball
// function getRandomBall(){
//     var pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
//     switch(pos){
//         case 'top':
//             return {
//                 x: randomSidePos(can_w),
//                 y: -R,
//                 vx: getRandomSpeed('top')[0],
//                 vy: getRandomSpeed('top')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//         case 'right':
//             return {
//                 x: can_w + R,
//                 y: randomSidePos(can_h),
//                 vx: getRandomSpeed('right')[0],
//                 vy: getRandomSpeed('right')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//         case 'bottom':
//             return {
//                 x: randomSidePos(can_w),
//                 y: can_h + R,
//                 vx: getRandomSpeed('bottom')[0],
//                 vy: getRandomSpeed('bottom')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//         case 'left':
//             return {
//                 x: -R,
//                 y: randomSidePos(can_h),
//                 vx: getRandomSpeed('left')[0],
//                 vy: getRandomSpeed('left')[1],
//                 r: R,
//                 alpha: 1,
//                 phase: randomNumFrom(0, 10)
//             }
//             break;
//     }
// }
// function randomSidePos(length){
//     return Math.ceil(Math.random() * length);
// }

// // Draw Ball
// function renderBalls(){
//     Array.prototype.forEach.call(balls, function(b){
//        if(!b.hasOwnProperty('type')){
//            ctx.fillStyle = 'rgba('+ball_color.r+','+ball_color.g+','+ball_color.b+','+b.alpha+')';
//            ctx.beginPath();
//            ctx.arc(b.x, b.y, R, 0, Math.PI*2, true);
//            ctx.closePath();
//            ctx.fill();
//        }
//     });
// }

// // Update balls
// function updateBalls(){
//     var new_balls = [];
//     Array.prototype.forEach.call(balls, function(b){
//         b.x += b.vx;
//         b.y += b.vy;
        
//         if(b.x > -(50) && b.x < (can_w+50) && b.y > -(50) && b.y < (can_h+50)){
//            new_balls.push(b);
//         }
        
//         // alpha change
//         b.phase += alpha_f;
//         b.alpha = Math.abs(Math.cos(b.phase));
//         // console.log(b.alpha);
//     });
    
//     balls = new_balls.slice(0);
// }

// // loop alpha
// function loopAlphaInf(){
    
// }

// // Draw lines
// function renderLines(){
//     var fraction, alpha;
//     for (var i = 0; i < balls.length; i++) {
//         for (var j = i + 1; j < balls.length; j++) {
           
//            fraction = getDisOf(balls[i], balls[j]) / dis_limit;
            
//            if(fraction < 1){
//                alpha = (1 - fraction).toString();

//                ctx.strokeStyle = 'rgba(150,150,150,'+alpha+')';
//                ctx.lineWidth = link_line_width;
               
//                ctx.beginPath();
//                ctx.moveTo(balls[i].x, balls[i].y);
//                ctx.lineTo(balls[j].x, balls[j].y);
//                ctx.stroke();
//                ctx.closePath();
//            }
//         }
//     }
// }

// // calculate distance between two points
// function getDisOf(b1, b2){
//     var  delta_x = Math.abs(b1.x - b2.x),
//        delta_y = Math.abs(b1.y - b2.y);
    
//     return Math.sqrt(delta_x*delta_x + delta_y*delta_y);
// }

// // add balls if there a little balls
// function addBallIfy(){
//     if(balls.length < BALL_NUM){
//         balls.push(getRandomBall());
//     }
// }

// // Render
// function render(){
//     ctx.clearRect(0, 0, can_w, can_h);
    
//     renderBalls();
    
//     renderLines();
    
//     updateBalls();
    
//     addBallIfy();
    
//     window.requestAnimationFrame(render);
// }

// // Init Balls
// function initBalls(num){
//     for(var i = 1; i <= num; i++){
//         balls.push({
//             x: randomSidePos(can_w),
//             y: randomSidePos(can_h),
//             vx: getRandomSpeed('top')[0],
//             vy: getRandomSpeed('top')[1],
//             r: R,
//             alpha: 1,
//             phase: randomNumFrom(0, 10)
//         });
//     }
// }
// // Init Canvas
// function initCanvas(){
//     canvas.setAttribute('width', window.innerWidth);
//     canvas.setAttribute('height', window.innerHeight);
    
//     can_w = parseInt(canvas.getAttribute('width'));
//     can_h = parseInt(canvas.getAttribute('height'));
// }
// window.addEventListener('resize', function(e){
//     console.log('Window Resize...');
//     initCanvas();
// });

// function goMovie(){
//     initCanvas();
//     initBalls(BALL_NUM);
//     window.requestAnimationFrame(render);
// }
// goMovie();

// // Mouse effect
// canvas.addEventListener('mouseenter', function(){
//     console.log('mouseenter');
//     mouse_in = true;
//     balls.push(mouse_ball);
// });
// canvas.addEventListener('mouseleave', function(){
//     console.log('mouseleave');
//     mouse_in = false;
//     var new_balls = [];
//     Array.prototype.forEach.call(balls, function(b){
//         if(!b.hasOwnProperty('type')){
//             new_balls.push(b);
//         }
//     });
//     balls = new_balls.slice(0);
// });
// canvas.addEventListener('mousemove', function(e){
//     var e = e || window.event;
//     mouse_ball.x = e.pageX;
//     mouse_ball.y = e.pageY;
//     // console.log(mouse_ball);
// });