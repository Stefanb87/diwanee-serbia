import $ from 'jquery';

class ServicesHover {
    constructor() {
        this.menuContent = $('.services-development, .services-design, .services-team');
        this.hover();
    }

    hover() {
        this.menuContent.hover(function(){
            $(this).css("background-color", "#ededed");
            }, function(){
            $(this).css("background-color", "#f6f6f6");
        });
    }
}

export default ServicesHover;