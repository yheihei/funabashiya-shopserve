document.addEventListener('DOMContentLoaded', function() {
  const drawer = document.querySelector('.drawer');
  if (!drawer) {
    return;
  }
  
  document.querySelectorAll('.js-drawer-button').forEach(function(drawerButton) {
    drawerButton.addEventListener('click', function() {
      if (drawer.classList.contains('drawer--active')) {
        drawer.classList.remove('drawer--active');
      } else {
        drawer.classList.add('drawer--active');
      }
    });
  });
});
