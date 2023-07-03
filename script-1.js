let bts = document.getElementById("butn");

window.onscroll = () => {
  console.log(window.scrollY)
  window.scrollY
    ? 1000 >= bts.classList.add("show")
    : bts.classList.remove("show");
};

bts.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

// // ******************************************************

// let scrollup = document.getElementById("skill");
// let progress = document.querySelectorAll(".progress");
// // ****************** the result one ***************
// function reached() {
//   progress.forEach((progressBar) => {
//     let value = progressBar.dataset.progress;
//     //  data-progres in html section progress  دي بتاعت اال ( dataset )  ال 
//     console.log(value);
//     progressBar.style.transtion = "5s";
//     progressBar.style.opacity = 1;
//     progressBar.style.width = `${value}%`;
//   });
// }
// // ********************** the result two **********************
// function unreached() {
//   // ده بقا لو الشرط متحققش تبقي الامور كما هي 
//   progress.forEach((p) => {
//     p.style.opacity = 0;
//     p.style.width = 0;
//   });
// }

// window.addEventListener("scroll", () => {
//   let scroling = scrollup.getBoundingClientRect().top;
//   //  scrolling up  ده ال من خلاله هتعرف قيمه ال سكرول بتاع .getBoundingClientRect() ال 
//   // المتغير ده انتا عاوزه عشان تعرف بظبط قيمه ال سكرول ف سيكش بتاع ال بروجريسس
//   let scrool = window.innerHeight;
//   // اما ده ف انتا بقا عاوزه عشان تقارن ال ويندو لناع الموقع كامل و ال قيمه ال سكرول بناع البروجريسس
//   if (scroling < scrool) {
//     reached();
//   } else {
//     unreached();
//   }
// });
// // الشرط ده انتا عاوؤه عشان تقدر تبين او تخفي ال بروجريسس بناءا علي الشرط هيتحقق ولا لا 


// sign in

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});