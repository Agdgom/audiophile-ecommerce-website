const cartBtn = document.querySelector('.cart');
if (cartBtn) {
  const cartModal = document.querySelector('.modal-cart');
  cartBtn.addEventListener('click', () => {
    if (cartModal) {
      cartModal.classList.toggle('hidden');
    }
  });
}

const checkOutBtn = document.querySelector('.summary__btn');

if (checkOutBtn) {
  const checkoutModal = document.querySelector('.check-modal');
  const checkoutModalContent = document.querySelector('.check-modal__content');
  checkOutBtn.addEventListener('click', () => {
    if (checkoutModal) {
      checkoutModal.classList.toggle('hidden');
      checkoutModalContent.classList.toggle('hidden');
    }
  });
  checkoutModal.addEventListener('click', ({ target }) => {
    if (checkoutModalContent && target === checkoutModal) {
      checkoutModal.classList.add('hidden');
      checkoutModalContent.classList.add('hidden');
    }
  });
}

// Menu
const burgerIcon = document.querySelector('.icon-menu');
if (burgerIcon) {
  burgerIcon.addEventListener('click', () => {
    const menuBody = document.querySelector('.menu__body');
    if (menuBody) {
      burgerIcon.classList.toggle('close-icon');
      menuBody.classList.toggle('active');
    }
  });
}
