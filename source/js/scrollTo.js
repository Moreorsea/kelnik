export const initScollTo = () => {
  const scrollButton = document.querySelector('.scroll-to');
  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  })
}