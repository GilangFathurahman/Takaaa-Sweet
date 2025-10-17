// Login system
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();
    if (email === "takaaa@gmail.com" && password === "12345") {
      localStorage.setItem("user", email);
      window.location.href = "index.html";
    } else alert("Email atau password salah! 🍪");
  });
}

const signupBtn = document.getElementById("signupBtn");
if (signupBtn) signupBtn.addEventListener("click", () => {
  alert("Fitur daftar belum aktif.\nGunakan akun demo:\nEmail: takaaa@gmail.com\nPassword: 12345");
});

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
});

// ===== Password show/hide toggle =====
const togglePasswordBtn = document.getElementById('togglePassword');
if (togglePasswordBtn) {
  togglePasswordBtn.addEventListener('click', () => {
    const pwd = document.getElementById('password');
    if (!pwd) return;
    if (pwd.type === 'password') {
      pwd.type = 'text';
      togglePasswordBtn.textContent = '🙈';               // berubah ikon
      togglePasswordBtn.setAttribute('aria-label', 'Sembunyikan kata sandi');
      togglePasswordBtn.title = 'Sembunyikan kata sandi';
    } else {
      pwd.type = 'password';
      togglePasswordBtn.textContent = '👁️';
      togglePasswordBtn.setAttribute('aria-label', 'Tampilkan kata sandi');
      togglePasswordBtn.title = 'Tampilkan kata sandi';
    }
    // fokus kembali ke input biar UX tetap nyaman
    pwd.focus();
  });
}


// Produk data
const produkData = [
  { name:"Oreo Cookies", price:"Rp 15.000", desc:"Cookies klasik dengan rasa Oreo & krim lembut.", img:"image/orea.png" },
  { name:"Good Time", price:"Rp 17.000", desc:"Cookies renyah dengan cokelat chip.", img:"image/good time.png" },
  { name:"Lotus Biscoff", price:"Rp 22.000", desc:"Cookies karamel renyah khas Biscoff.", img:"image/lotus.png" },
  { name:"Roma Kelapa", price:"Rp 12.000", desc:"Cookies aroma kelapa yang lembut.", img:"image/roma.png" },
  { name:"Slai O’lai", price:"Rp 13.000", desc:"Cookies isi selai stroberi manis.", img:"image/slai.png" }
];

// Tampilkan produk
const container = document.getElementById("produkContainer");
if (container) {
  produkData.forEach((p, i) => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card shadow-sm">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.price}</p>
            <button class="btn btn-cta" data-bs-toggle="modal" data-bs-target="#produk${i}">Lihat Detail</button>
          </div>
        </div>
      </div>

      <div class="modal fade" id="produk${i}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header"><h5 class="modal-title">${p.name}</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button></div>
            <div class="modal-body text-center">
              <img src="${p.img}" class="img-fluid rounded mb-3">
              <p>${p.desc}</p>
              <a href="https://tk.tokopedia.com/ZSUQ2s2x5/ " target="_blank" class="btn btn-cta me-2">Tokopedia</a>
              <a href="https://shopee.co.id" target="_blank" class="btn btn-cta">Shopee</a>
            </div>
          </div>
        </div>
      </div>`;
  });
}

// Contact ke WhatsApp
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    window.open(`https://wa.me/6281317396603?text=Halo%20Takaaa%20Sweet!🍪%0ASaya%20${nama}%20(${email})%0A${pesan}`);
  });
}

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}
