function showShop() {
  document.querySelectorAll('.bg').forEach(e => {
    e.style.display = 'none';
  });
  shop.style.display = 'block';
}

document.querySelectorAll('.ti-shopping-cart').forEach(e => {
  e.onclick = showShop;
});

/* Just in case anyone looks at the source code and thinks this is a sign of
   upcoming monetization. It's not! My kids just want to be able to buy skins
   that they missed in the battle pass. You will spend the same stars here as
   on the battle pass page.
*/
