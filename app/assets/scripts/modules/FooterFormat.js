import $ from 'jquery';

class FooterFormat {
    constructor() {
        this.switchTheFooter();
    }

    switchTheFooter() {
        $(window).resize(function() {
            this.footer = $('.copyright-footer');

            if ($(window).width() < 400) {
                this.footer.text("COPYRIGHT © 2015 DIWANEE SERBIA");
            }
            else {
                this.footer.text("COPYRIGHT © 2015 DIWANEE SERBIA ALL RIGHTS RESERVED");
            }
        });
    }
}

export default FooterFormat;