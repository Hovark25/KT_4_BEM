const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.site-header__toggle');
const navigation = document.querySelector('.site-header__nav');

if (header && menuButton && navigation) {
  // Без JavaScript ссылки меню остаются доступными
  header.classList.add('site-header_interactive');
  menuButton.hidden = false;

  function setMenu(isOpen) {
    header.classList.toggle('site-header_open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Закрыть' : 'Меню';
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenu(false);
    }
  });

  // Escape закрывает меню и возвращает фокус на кнопку
  document.addEventListener('keydown', (event) => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    if (event.key === 'Escape' && isOpen) {
      setMenu(false);
      menuButton.focus();
    }
  });
}
