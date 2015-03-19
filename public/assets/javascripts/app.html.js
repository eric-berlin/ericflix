'use strict';

var appHtml = function() {

    var self = this;
    
    this.$header      = null;
    this.$fullHeight  = null;
    this.windowHeight = 0;
    this.headerHeight = 0;
    this.fullHeight   = 0;

    $(window).on('resize', function() {
        self.init();
    })

    this.init = function() {

        this.$header      = $('nav');
        this.$fullHeight  = $('.full-height');
        this.headerHeight = this.$header.height();
        this.windowHeight = $(window).height();
        this.fullHeight   = this.windowHeight - this.headerHeight;

        this.setFullHeight();
    }

    this.setFullHeight = function() {
        self.$fullHeight.css('height', self.fullHeight+'px');
    }

}