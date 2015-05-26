/**
 * Created by piggy on 2015/5/26.
 */

+function ($) {
    'use strict';
var Tab = function(element) {
    this.element = $(element);
}

Tab.VERSION = "1.0.0";

Tab.prototype.show = function() {
    var $this = this.element;
    console.log("$this is: ", $this);
    var target = $this.data("target");
    var $td = $this.parent().find(".backcolors");
    console.log("td is: " , $td);

    if($this.hasClass("backColors")) return; // this is active

    var previous = "";


}

function plugin(option) {
    return this.each(function() {
        var $this = $(this);
        var data = $this.data("judy.tab");

        if(!data)  {
            data = new Tab(this);
            $this.data("judy.tab", data);
        }
        if(typeof option === "string")
            data[option]();
    })
}

    var old = $.fn.tab;

$.fn.tab = plugin;
$.fn.tab.Constructor = Tab;

    // TAB NO CONFLICT
    // ===============

    $.fn.tab.noConflict = function () {
        $.fn.tab = old
        return this
    }

var changeTabs = function(e) {
    e.preventDefault();
    plugin.call($(this), "show");
}

$(document).on("click.myTab", '[data-toggle="tab"]', changeTabs());

}(jQuery)