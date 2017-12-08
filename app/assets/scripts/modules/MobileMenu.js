import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.nav-mobile');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('mobnav-visible');
    }
}

export default MobileMenu;