document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    item.addEventListener('mouseover', function () {
      const subMenu = item.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.style.display = 'block';
      }
    });

    item.addEventListener('mouseout', function () {
      const subMenu = item.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.style.display = 'none';
      }
    });

    item.addEventListener('click', function () {
      const sectionId = item.getAttribute('data-section');
      const content = document.getElementById(sectionId);
      const container = document.querySelector('.container');

      container.style.marginLeft = `-${content.offsetLeft}px`;
    });
  });
});
  