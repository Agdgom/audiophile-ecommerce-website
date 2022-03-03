const cartBtn = document.querySelector('.cart');
cartBtn.addEventListener('click', () => {
  const cartModal = document.querySelector('.modal-cart');
  cartModal.classList.toggle('hidden');
});
