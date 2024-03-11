// Memilih elemen <nav> dari dokumen
var nav = document.querySelector("nav");

// Menambahkan event listener untuk mengontrol efek scroll
window.addEventListener("scroll", function () {
  // Memeriksa apakah halaman telah di-scroll hingga 100px atau lebih dari atas
  if (window.pageYOffset >= 100) {
    // Jika iya, tambahkan kelas "scroll" ke elemen <nav>
    nav.classList.add("scroll");
    // Juga tambahkan kelas "bg-custom-nav" dan "shadow" untuk mengubah tampilan
    nav.classList.add("bg-custom-nav", "shadow");
  } else {
    // Jika tidak, hapus kelas "scroll" dari elemen <nav>
    nav.classList.remove("scroll");
    // Juga hapus kelas "bg-custom-nav" dan "shadow"
    nav.classList.remove("bg-custom-nav", "shadow");
  }
});

// Inisialisasi objek Swiper untuk slider carousel
var swiper = new Swiper(".carouse-content", {
  // Aktifkan loop agar slider dapat berputar kembali setelah mencapai slide terakhir
  loop: true,
  // Menetapkan jumlah slide yang terlihat secara otomatis sesuai lebar kontainer
  slidesPerView: "auto",
  // Mengaktifkan mode centeredSlides untuk menyajikan slide tengah
  centeredSlides: true,
  // Mengatur tinggi slide otomatis berdasarkan konten
  autoHeight: true,
  // Menambahkan tombol navigasi ke slider
  navigation: {
    // Menentukan elemen yang bertindak sebagai tombol berikutnya
    nextEl: ".swiper-button-next",
    // Menentukan elemen yang bertindak sebagai tombol sebelumnya
    prevEl: ".swiper-button-prev",
  },
});
