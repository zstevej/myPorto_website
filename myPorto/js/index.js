const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = (e) => {
  navbarNav.classList.toggle("active");
  hamburgerMenu.classList.toggle("hamburger-menu-active");
  e.preventDefault();
};

const searchform = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
  searchform.classList.toggle("active");
  searchBox.focus();
  searchButton.classList.toggle("search-button-active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburgerMenu.classList.remove("hamburger-menu-active");
  }

  if (!searchButton.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
    searchButton.classList.remove("search-button-active");
  }
});

// slide section about image
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector("#about");
  const img = document.querySelector(".row_about img");

  const handleScroll = () => {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight) {
      img.style.transform = "translateX(0)";
    } else {
      img.style.transform = "translateX(-106%)";
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

// send message email function
function openPopup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Form tidak boleh kosong!");
  } else {
    const popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = `<table class="styled-table">
    <tbody>
      <tr>
        <td><h4>Name:</h4></td>
        <td><p>${name}</p></td>
      </tr>
      <tr>
        <td><h4>Email:</h4></td>
        <td><p>${email}</p></td>
      </tr>
      <tr>
        <td><h4>Number:</h4></td>
        <td><p>${phone}</p></td>
      </tr>
    </tbody>`;
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
  }
}

function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const subject = "Tanyakan sesuatu!";
  const body = `Nama: ${name}\nEmail: ${email}\nNo Telepon: ${phone}`;
  const mailtoLink = `mailto:zakariaramadhan1101@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  document.getElementById("popupOverlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
}

document.getElementById("popupOverlay").addEventListener("click", function () {
  document.getElementById("popupOverlay").style.display = "none";
  document.getElementById("popup").style.display = "none";
});

// glass toogle card
function toggleCard(cardId) {
  const card = document.getElementById(cardId);
  const isCardVisible = card.style.display === "block";

  // Tutup semua card yang sedang terbuka
  const glassCards = document.querySelectorAll(".glass-card");
  glassCards.forEach((card) => (card.style.display = "none"));

  // Jika card sebelumnya tidak terlihat, maka tampilkan card yang diminta
  if (!isCardVisible) {
    card.style.display = "block";
  }
}

document.addEventListener("click", function (event) {
  const activeCard = document.querySelector(
    '.glass-card[style*="display: block"]'
  );

  if (
    activeCard &&
    !activeCard.contains(event.target) &&
    !event.target.matches("button")
  ) {
    activeCard.style.display = "none";
  }
});
