import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader{
    constructor(){
        this.siteHeader = $('.site-header');
        this.triggerElement = $('.large-hero-subtitle');
        this.createHeaderWaypoint();
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.scrollSpyWaypoints();
        this.addSmoothScroll();
    }

    createHeaderWaypoint(){
            var el = this.triggerElement[0],
                target = this.siteHeader;
            new Waypoint({
                element: el,
                handler: function(direction){
                    if(direction === "down"){
                        target.addClass('site-header-dark');
                    }
                    else{
                        target.removeClass('site-header-dark');
                    }
                }
            });
    }

    scrollSpyWaypoints(){
        var links = this.headerLinks
        this.pageSections.each(function(){
            var el = this;
            new Waypoint({
                element: el,
                handler: function(direction){
                   if(direction==='down'){
                       links.removeClass('active-link');
                       var matchLinkSelector = el.getAttribute('data-target-link');
                       $(matchLinkSelector).addClass('active-link');
                   }
                },
                offset: "18%"
            });

            new Waypoint({
                element: el,
                handler: function(direction){
                    if(direction==='up'){
                        links.removeClass('active-link');
                        var matchLinkSelector = el.getAttribute('data-target-link');
                        $(matchLinkSelector).addClass('active-link');
                    }
                },
                offset: "-40%"
            });
        });
    }

    addSmoothScroll(){
        this.headerLinks.smoothScroll();
    }
}

export default StickyHeader;