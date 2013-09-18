
(function($) {

          var settings = new Array;

          $.fn.mdrop = function(options) {

                    init = function(el) {

                              settings = $.extend({}, $.fn.mdrop.defaults, options);

                              var id = el.attr('id');
                              $('#' + id + '> li').bind('mouseover', $.mopen);
                              $('#' + id + '> li').bind('mouseout', $.mtimer);

                    };


                    $.mopen = function() {
                              $.mcanceltimer();
                              $.mclose();
                              settings.open = 1;
                              settings.menuitem = $(this).find('ul').eq(0).css('display', 'block');
                    };

                    $.mclose = function() {
                              if (settings.menuitem) {
                                        settings.menuitem.css('display', 'none');
                              }
                    };

                    $.mtimer = function() {
                              settings.timeoutID = window.setTimeout($.mclose, settings.timeout);
                    };
                    $.mcanceltimer = function() {
                              if (settings.timeoutID)
                              {
                                        window.clearTimeout(settings.timeoutID);
                                        settings.timeoutID = null;
                              }
                    };
                    init(this);

          };
          $.fn.mdrop.defaults = {
                    timeout: 600,
                    menuitem: 0,
                    timeoutID: null,
                    open: 0
          };
}(jQuery));
