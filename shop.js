function showShop() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  shop.style.display = 'block';
}

document.querySelectorAll('.ti-shopping-cart').forEach(e => {
  e.onclick = showShop;
});
