const gallery = document.getElementById('gallery');
const totalImages = 15;
let currentIndex = 0;

// Dynamically generate slides
for (let id = 1000; id < 1000 + totalImages; id++) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.style.backgroundImage = `url('https://picsum.photos/id/${id}/1200/800')`;
    gallery.appendChild(slide);
}

function showSlide(index) {
    gallery.style.transform = `translateX(-${index * 100}vw)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, totalImages - 1);
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    showSlide(currentIndex);
});

document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) { // Checks if the browser supports the standard Fullscreen API and activates it.
        docElm.requestFullscreen();
    } else if (docElm.webkitRequestFullscreen) { // Fallback for Safari, which uses a vendor-prefixed version.
        docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { // Fallback for older Microsoft browsers.
        docElm.msRequestFullscreen();
    }
});

// Swipe support
let startX = 0;
gallery.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

gallery.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50 && currentIndex < totalImages - 1) {
        currentIndex++;
        showSlide(currentIndex);
    } else if (endX - startX > 50 && currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
});
