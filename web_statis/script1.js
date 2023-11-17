 //Toggle class active
 const navbarNav = document.querySelector
 ('.navbar-nav');

 //saat hamburger menu di click
 document.querySelector('#hamburger-menu').
 onclick = () => {
    navbarNav.classList.toggle('active');
 };

 //Click di luar agar sidebar menghilang
 const hamburger = document.querySelector
 ('#hamburger-menu');

 document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
 });





 function parfum1(event) {
   event.preventDefault();
   const parfum1 = document.getElementById("parfum1");
   if (
     parfum1.style.display === "none" ||
     parfum1.style.display === ""
   ) {
     parfum1.style.display = "block";
   } else {
     parfum1.style.display = "none";
   }
 }

 function parfum2(event) {
   event.preventDefault();
   const parfum2 = document.getElementById("parfum2");
   if (
     parfum2.style.display === "none" ||
     parfum2.style.display === ""
   ) {
     parfum2.style.display = "block";
   } else {
     parfum2.style.display = "none";
   }
 }
 
 function parfum3(event) {
   event.preventDefault();
   const parfum3 = document.getElementById("parfum3");
   if (
     parfum3.style.display === "none" ||
     parfum3.style.display === ""
   ) {
     parfum3.style.display = "block";
   } else {
     parfum3.style.display = "none";
   }
 }

 function parfum4(event) {
   event.preventDefault();
   const parfum4 = document.getElementById("parfum4");
   if (
     parfum4.style.display === "none" ||
     parfum4.style.display === ""
   ) {
     parfum4.style.display = "block";
   } else {
     parfum4.style.display = "none";
   }
 }

 function parfum5(event) {
   event.preventDefault();
   const parfum5 = document.getElementById("parfum5");
   if (
     parfum5.style.display === "none" ||
     parfum5.style.display === ""
   ) {
     parfum5.style.display = "block";
   } else {
     parfum5.style.display = "none";
   }
 }

 function parfum6(event) {
   event.preventDefault();
   const parfum6 = document.getElementById("parfum6");
   if (
     parfum6.style.display === "none" ||
     parfum6.style.display === ""
   ) {
     parfum6.style.display = "block";
   } else {
     parfum6.style.display = "none";
   }
 }

 function parfum7(event) {
   event.preventDefault();
   const parfum7 = document.getElementById("parfum7");
   if (
     parfum7.style.display === "none" ||
     parfum7.style.display === ""
   ) {
     parfum7.style.display = "block";
   } else {
     parfum7.style.display = "none";
   }
 }

 function parfum8(event) {
   event.preventDefault();
   const parfum8 = document.getElementById("parfum8");
   if (
     parfum8.style.display === "none" ||
     parfum8.style.display === ""
   ) {
     parfum8.style.display = "block";
   } else {
     parfum8.style.display = "none";
   }
 }

 function parfum9(event) {
   event.preventDefault();
   const parfum9 = document.getElementById("parfum9");
   if (
     parfum9.style.display === "none" ||
     parfum9.style.display === ""
   ) {
     parfum9.style.display = "block";
   } else {
     parfum9.style.display = "none";
   }
 }

 function parfum10(event) {
   event.preventDefault();
   const parfum10 = document.getElementById("parfum10");
   if (
     parfum10.style.display === "none" ||
     parfum10.style.display === ""
   ) {
     parfum10.style.display = "block";
   } else {
     parfum10.style.display = "none";
   }
 }
