// Splash screen atau intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
    });

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300);

});



// Animasi navbar
window.addEventListener("load", function () {
    const splashScreen = document.querySelector(".intro");
    const navbar = document.querySelector(".navbar");

    setTimeout(function () {
        splashScreen.style.opacity = "0";
        splashScreen.style.visibility = "hidden";
        navbar.style.visibility = "visible";
        navbar.style.opacity = "1";
    }, 3000); // 3 seconds delay before showing navbar
});


// toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
// klik hamburger
document.querySelector('#hamburger').
    onclick = () => {
        navbarNav.classList.toggle('active')
    }



// klik diluar side bar
const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});



// Typing efek
const typed = new Typed('.multiple-text', {
    strings: ['Mahasiswa', 'Junior Web Developer', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});


// Ambil semua link navbar
const navLinks = document.querySelectorAll('.navbar-nav a');

// Fungsi untuk mengaktifkan link navbar
function activateLink() {
    let fromTop = window.scrollY;

    // Loop untuk setiap link dan tentukan link mana yang aktif berdasarkan posisi scroll
    navLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Jalankan fungsi `activateLink` saat user scroll
window.addEventListener('scroll', activateLink);

// Fungsi agar link aktif langsung setelah diklik (tanpa scroll)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active')); // Hilangkan class active dari semua link
        link.classList.add('active'); // Tambahkan class active pada link yang diklik
    });
});



// Ambil elemen gambar dan tombol code
const landingImage = document.getElementById('landingImage');
const codeButton = document.querySelector('.cta1');

// Gambar asli dan gambar baru yang ingin digunakan
const originalImageSrc = 'img/landing-1.png';
const newImageSrc = 'img/landing-2.png'; // Ganti dengan gambar baru yang diinginkan

// Fungsi untuk mengganti gambar dengan animasi fade
function changeImageWithFade(newSrc) {
    // Tambahkan kelas fade-out untuk memulai animasi menghilang
    landingImage.classList.add('fade-out');

    // Tunggu animasi fade-out selesai (0.5s) sebelum mengganti gambar
    setTimeout(() => {
        landingImage.src = newSrc;
        landingImage.classList.remove('fade-out'); // Reset fade-out

        // Setelah gambar berubah, tambahkan kelas fade-in untuk memulai animasi muncul
        landingImage.classList.add('fade-in');

        // Hapus kelas fade-in setelah animasi selesai (0.5s), sehingga bisa diulang lagi
        setTimeout(() => {
            landingImage.classList.remove('fade-in');
        }, 150); // Durasi fade-in sama dengan durasi animasi CSS (0.5s)
    }, 150); // Durasi fade-out sama dengan durasi animasi CSS (0.5s)
}

// Ubah gambar saat tombol Code di-hover
codeButton.addEventListener('mouseover', () => {
    changeImageWithFade(newImageSrc);
});

// Kembalikan ke gambar asli saat kursor keluar dari tombol Code
codeButton.addEventListener('mouseout', () => {
    changeImageWithFade(originalImageSrc);
});



// Fungsi untuk menambahkan kelas show ketika skill box terlihat
function revealSkills() {
    var skillsBoxes = document.querySelectorAll('.skills-box');
    var windowHeight = window.innerHeight;

    skillsBoxes.forEach(function (box) {
        var boxTop = box.getBoundingClientRect().top;

        // Jika jarak bagian atas skill box dari atas viewport kurang dari 80% dari tinggi jendela
        if (boxTop < windowHeight * 0.8) {
            box.classList.add('show');
        }
    });
}

// Event listener untuk men-trigger saat user scroll
window.addEventListener('scroll', revealSkills);

// Memanggil fungsi saat halaman dimuat untuk memeriksa apakah ada elemen yang harus ditampilkan
window.addEventListener('load', revealSkills);


// Fungsi untuk menambahkan kelas show dengan delay dinamis
function revealSkills() {
    var skillsBoxes = document.querySelectorAll('.skills-box');
    var windowHeight = window.innerHeight;

    skillsBoxes.forEach(function(box, index) {
        var boxTop = box.getBoundingClientRect().top;

        // Jika jarak bagian atas skill box dari atas viewport kurang dari 80% dari tinggi jendela
        if (boxTop < windowHeight * 0.8) {
            // Menambahkan delay berdasarkan urutan index dari elemen
            box.style.transitionDelay = `${index * 0.1}s`;
            box.classList.add('show');
        }
    });
}

// Event listener untuk men-trigger saat user scroll
window.addEventListener('scroll', revealSkills);

// Memanggil fungsi saat halaman dimuat untuk memeriksa apakah ada elemen yang harus ditampilkan
window.addEventListener('load', revealSkills);


