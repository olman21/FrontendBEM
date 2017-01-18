import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header-menu-icon");
        this.menuContent = $(".site-header-content");
        this.events();
    }

    events(){
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu(){
        this.menuContent.toggleClass('site-header-content-visible');
        this.siteHeader.toggleClass('site-header-expanded');
        this.menuIcon.toggleClass('site-header-menu-icon-close-x');
    }
}

export default MobileMenu;
