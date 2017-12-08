import $ from 'jquery';

class MobileHeader {
    constructor() {
        this.switchTheHeader();
    }

    switchTheHeader() {
        $(window).resize(function() {
            this.textH3 = $('.header-h3');

            if ($(window).width() < 400) {
                this.textH3.text("DIGITAL MEDIA AGENCY");
            }
            else {
                this.textH3.text("Digital Media Agency always looking for motivated, multi-talented, and organized people to join our diverse team.");
            }
        });
    }
}

export default MobileHeader;