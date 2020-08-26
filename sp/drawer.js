document.addEventListener('DOMContentLoaded', function() {
  /**
   * 初期化処理
   *
   * @return {void}
   */
  function init() {
    // ドロワー要素を取得
    const drawer = document.querySelector('.drawer');
    if (!drawer) {
      // ドロワーがない場合は処理しない
      return;
    }
    // ドロワーの開閉ボタンの初期化
    document.querySelectorAll('.js-drawer-button').forEach(function(drawerButton) {
      drawerButton.addEventListener('click', {
        drawer: drawer,
        handleEvent: drawerButtonClickEvent
      });
    });
  }

  /**
   * ドロワーの開閉ボタンがクリックされた時の処理
   *
   * @return {void}
   */
  function drawerButtonClickEvent() {
    toggleDrawer(this.drawer);
  }

  /**
   * 指定の要素のドロワーを開閉する
   *
   * @param {Element} drawerElement
   * @return {void}
   */
  function toggleDrawer(drawerElement) {
    if (drawerElement.classList.contains('drawer--active')) {
      drawerElement.classList.remove('drawer--active');
    } else {
      drawerElement.classList.add('drawer--active');
    }
  }

  init();
});
