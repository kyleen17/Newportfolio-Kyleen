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

const backgrounds = [
  "./images/pexels-shotbyrain-3010291.jpg",
  "./images/pexels-blooddrainer-1655901.jpg",
  "./images/pexels-daniel-maldonado-1864828-4119179.jpg",
  "./images/pexels-francesco-ungaro-1671325.jpg",
  "./images/pexels-vincent-ma-janssen-2302802.jpg",
  "./images/pexels-pixabay-414144.jpg",
  "./images/pexels-fariborzart-11007977.jpg",
  "./images/pexels-eva-bronzini-6072090.jpg",
  "./images/kyfant2.jpg"
];

const randomIndex = Math.floor(Math.random() * backgrounds.length);
const selectedBackground = backgrounds[randomIndex];

document.body.style.backgroundImage = `url('${selectedBackground}')`;
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item) => item.classList.remove("active"));
        items[index].classList.add("active");
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var audioFiles = [
        './Audio/ES_Barren Land - Farrell Wooten.mp3',
        './Audio/ES_Chasing the Truth - Dream Cave.mp3',
        './Audio/ES_Followers - Alec Slayne.mp3',
        './Audio/ES_Peacekeepers - Dream Cave.mp3'
    ];

 
    function getRandomTrackIndex() {
        return Math.floor(Math.random() * audioFiles.length);
    }


    var currentTrackIndex = getRandomTrackIndex();

    var player = new Audio(audioFiles[currentTrackIndex]);
    player.volume = parseFloat(localStorage.getItem('currentVolume')) || 0.5;
    document.getElementById('volumeControl').value = player.volume;


    function playNext() {
        currentTrackIndex = (currentTrackIndex + 1) % audioFiles.length;
        player.src = audioFiles[currentTrackIndex];
        player.play();
        localStorage.setItem('currentTrackIndex', currentTrackIndex);
    }


    player.addEventListener('ended', function() {
        playNext();
    });


    window.onbeforeunload = function() {
        localStorage.setItem('currentVolume', player.volume);
    };

  
    player.play();

    window.togglePlay = function() {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    };

 
    window.setVolume = function(volume) {
        player.volume = volume;
    };

  
    window.playNext = playNext;
});

document.addEventListener('DOMContentLoaded', function() {
    const magneticBtn = document.querySelector('.magnetic-btn');
    const area = 50; 

    magneticBtn.addEventListener('mousemove', function(e) {
        const rect = magneticBtn.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        if (Math.abs(x) < area && Math.abs(y) < area) {
            magneticBtn.style.transform = `translate(${x / 5}px, ${y / 5}px)`;
        }
    });

    magneticBtn.addEventListener('mouseleave', function() {
        magneticBtn.style.transform = 'translate(0, 0)';
    });
});

document.addEventListener('mousemove', function(e) {
    createParticle(e.pageX, e.pageY);
});

function createParticle(x, y) {

    const particle = document.createElement('div');
    particle.classList.add('particle');
    

    particle.style.left = `${x - 3}px`; 
    particle.style.top = `${y - 3}px`; 
    

    document.body.appendChild(particle);
    
   
    setTimeout(() => {
        particle.remove();
    }, 600); 
}

// Project Page //

function openProject(projectType) {
    let url = '';
    
    switch (projectType) {
        case 'web-development':
            url = './webdevelopment.html'; 
            break;
        case 'graphic-design':
            url = './graphicdesign.html';
            break;
        case 'digital-art':
            url = './digitalart.html';
            break;
        default:
            return;
    }

    window.open(url, '_blank'); 
}



