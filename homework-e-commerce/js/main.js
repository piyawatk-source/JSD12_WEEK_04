function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  const map = { home: 0, products: 1, about: 2 };
  document.querySelectorAll(".nav-links a")[map[id]]?.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function addToCart(name) {
  const toast = document.getElementById("toast");
  toast.textContent = `✓ เพิ่ม ${name} ลงตะกร้าแล้ว!`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function filterProducts(btn, cat) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll("#products-grid .product-card").forEach((card) => {
    card.style.display =
      cat === "all" || card.dataset.cat === cat ? "block" : "none";
  });
}
