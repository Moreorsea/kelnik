export const initClearFilter = () => {
  const clear = document.querySelector('.clear');
  clear.addEventListener('click', () => {
    window.location.reload();
  });
};