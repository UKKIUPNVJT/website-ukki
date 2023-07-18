//  Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const spanElements = document.querySelectorAll("ul#navList li span");
const navLinks = document.querySelectorAll("#navList li .list-wrap a");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");

  navLinks.forEach((link) => {
    if (hamburger.classList.contains("hamburger-active")) {
      link.classList.add("hover:font-bold"); // Menambahkan hover:font-bold
    } else {
      link.classList.remove("hover:font-bold"); // Menghilangkan hover:font-bold
    }
  });
  spanElements.forEach((spanElement) => {
    if (hamburger.classList.contains("hamburger-active")) {
      spanElement.style.display = "none"; // Menghilangkan elemen span
    } else {
      spanElement.style.display = "block"; // Menampilkan elemen span
    }
  });
});

// Departemen
// lihat semua departemen
const allDepartements = document.getElementById("departemen-all");
// img departemen
const departemenImgs = document.querySelectorAll(".departemen-img");
// nama departemen
const namaDepartemens = document.querySelectorAll(".departemen-name");

// pembungkus departemen
const departemenWrap = document.querySelectorAll(".departemen-wrap");
departemenWrap.forEach(function (departemen, index) {
  departemen.id = "departemen-" + (index + 1);
});

//tampilkan semua img saat lihat semua departemen di klik
allDepartements.addEventListener("click", function () {
  departemenImgs.forEach(function (departemenImg) {
    departemenImg.classList.toggle("hidden");
  });
});

departemenWrap.forEach(function (departemen) {
  departemen.addEventListener("click", function () {
    const id = departemen.id;
    const img = departemen.querySelector(".departemen-img");
    img.classList.toggle("hidden");

    departemenImgs.forEach(function (gambar) {
      if (gambar !== img) {
        gambar.classList.add("hidden");
      }
    });
  });
});


// Popup
function openPopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('hidden');
  document.documentElement.classList.add('modal-open');
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
  document.documentElement.classList.remove('modal-open');
}