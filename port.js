// Navigation Bar //
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const menuToggle = document.createElement("div");
  menuToggle.textContent = "☰";
  menuToggle.className = "menu-toggle";
  nav.insertBefore(menuToggle, nav.children[1]);

  menuToggle.addEventListener("click", function () {
    const ul = document.querySelector("nav ul");
    ul.style.display = ul.style.display === "block" ? "none" : "block";
  });
});

// Random Image Background //

const backgrounds = [
  "./images/pexels-shotbyrain-3010291.jpg",
  "./images/pexels-blooddrainer-1655901.jpg",
  "./images/pexels-daniel-maldonado-1864828-4119179.jpg",
  "./images/pexels-francesco-ungaro-1671325.jpg",
  "./images/pexels-vincent-ma-janssen-2302802.jpg",
  "./images/pexels-pixabay-414144.jpg",
  "./images/pexels-fariborzart-11007977.jpg",
  "./images/pexels-eva-bronzini-6072090.jpg",
  "./images/kyfant2.jpg",
];

const randomIndex = Math.floor(Math.random() * backgrounds.length);
const selectedBackground = backgrounds[randomIndex];

document.body.style.backgroundImage = `url('${selectedBackground}')`;
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

// Home Page //

document.addEventListener("DOMContentLoaded", function () {
    const recentWorksItems = document.querySelectorAll(".highlights .carousel-item");
    let currentIndex = 0;
  
    function showItem(index) {
      recentWorksItems.forEach((item) => item.classList.remove("active"));
      recentWorksItems[index].classList.add("active");
    }
  
    document.querySelector(".highlights .next1").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % recentWorksItems.length;
      showItem(currentIndex);
    });
  
    document.querySelector(".highlights .prev1").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + recentWorksItems.length) % recentWorksItems.length;
      showItem(currentIndex);
    });
  
    
    showItem(currentIndex);
  });
  
  
// Audio Player //
document.addEventListener("DOMContentLoaded", function () {
  var audioFiles = [
    "./Audio/ES_Barren Land - Farrell Wooten.mp3",
    "./Audio/ES_Chasing the Truth - Dream Cave.mp3",
    "./Audio/ES_Followers - Alec Slayne.mp3",
    "./Audio/ES_Peacekeepers - Dream Cave.mp3",
  ];

  function getRandomTrackIndex() {
    return Math.floor(Math.random() * audioFiles.length);
  }

  var currentTrackIndex = getRandomTrackIndex();

  var player = new Audio(audioFiles[currentTrackIndex]);
  player.volume = parseFloat(localStorage.getItem("currentVolume")) || 0.5;
  document.getElementById("volumeControl").value = player.volume;

  function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % audioFiles.length;
    player.src = audioFiles[currentTrackIndex];
    player.play();
    localStorage.setItem("currentTrackIndex", currentTrackIndex);
  }

  player.addEventListener("ended", function () {
    playNext();
  });

  window.onbeforeunload = function () {
    localStorage.setItem("currentVolume", player.volume);
  };

  player.play();

  window.togglePlay = function () {
    if (player.paused) {
      player.play();
    } else {
      player.pause();
    }
  };

  window.setVolume = function (volume) {
    player.volume = volume;
  };

  window.playNext = playNext;
});

// Footer //

document.addEventListener("DOMContentLoaded", function () {
  const magneticBtn = document.querySelector(".magnetic-btn");
  const area = 50;

  magneticBtn.addEventListener("mousemove", function (e) {
    const rect = magneticBtn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    if (Math.abs(x) < area && Math.abs(y) < area) {
      magneticBtn.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
    }
  });

  magneticBtn.addEventListener("mouseleave", function () {
    magneticBtn.style.transform = "translate(0, 0)";
  });
});

// Particle Effect //

document.addEventListener("mousemove", function (e) {
  createParticle(e.pageX, e.pageY);
});

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  particle.style.left = `${x - 3}px`;
  particle.style.top = `${y - 3}px`;

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 600);
}

// Project Page //

// Web Development / Graphic Design / Digital Art //

document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".web-dev-carousel");
  
    carousels.forEach((carousel) => {
      let currentIndex = 0;
      const images = carousel.querySelectorAll('img');
  
      images[currentIndex].classList.add("active");
  
      setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
      }, 3000);
    });
  });
  
  // Modal functions
  let currentImageIndex = 0;
  let currentImageSet = [];
  
  function openModal(img) {
      const modal = document.getElementById("imageModal");
      const modalImage = document.getElementById("modalImage");
      const carousel = img.parentNode; 
      currentImageSet = Array.from(carousel.querySelectorAll('img')); 
      currentImageIndex = currentImageSet.indexOf(img); 
  
      modal.style.display = "block";
      modalImage.src = img.src; 
  }
  
  function closeModal() {
      const modal = document.getElementById("imageModal");
      modal.style.display = "none";
  }
  
  function changeImage(direction) {
      currentImageIndex += direction;
  
      if (currentImageIndex >= currentImageSet.length) {
          currentImageIndex = 0; 
      } else if (currentImageIndex < 0) {
          currentImageIndex = currentImageSet.length - 1; 
      }
  
      const modalImage = document.getElementById("modalImage");
      modalImage.src = currentImageSet[currentImageIndex].src;
  }
  
  // Close modal if user clicks outside the image
  window.onclick = function(event) {
      const modal = document.getElementById("imageModal");
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };
  