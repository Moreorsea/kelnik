function initSelect() {
  let allSelects = document.querySelectorAll('.custom-select__input');
  allSelects.forEach((item) => {
    item.addEventListener('click', e => {
      let parent = e.currentTarget.parentNode;
      parent.classList.toggle('show');
    });
  });
}

initSelect();
