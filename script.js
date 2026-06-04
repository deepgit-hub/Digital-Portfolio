
document.addEventListener("DOMContentLoaded", () => {

    /* ========== FLOATING WHATSAPP BUTTON ========== */
    const whatsappBtn = document.querySelector('.floating-whatsapp');

    if (whatsappBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                whatsappBtn.classList.remove('hidden');
            } else {
                whatsappBtn.classList.add('hidden');
            }
        });
    }

    /* ========== IMAGE GALLERY LIGHTBOX ========== */
    const images = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("lightbox-close");
    const caption = document.getElementById("lightbox-caption");

    let currentIndex = 0;
    let startX = 0;

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            lightboxImg.src = img.src;
            caption.textContent = img.nextElementSibling?.innerText || "";
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;

        if (e.key === "Escape") {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }

        if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
        }

        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }

        lightboxImg.src = images[currentIndex].src;
        caption.textContent =
            images[currentIndex].nextElementSibling?.innerText || "";
    });

    // Swipe Support for Mobile
    lightbox.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    lightbox.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                currentIndex = (currentIndex + 1) % images.length;
            } else {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }

            lightboxImg.src = images[currentIndex].src;
            caption.textContent =
                images[currentIndex].nextElementSibling?.innerText || "";
        }
    });

});
