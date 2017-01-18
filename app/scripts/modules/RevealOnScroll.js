import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(el,offset){

        this.itemsToReveal = el;
        this.hideInitially();
        this.createWaypoints(offset);
    }

    hideInitially(){
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints(offset){
         this.itemsToReveal.each(function(){
             var el = this;
             new Waypoint({
                element: el,
                 handler: function(){
                    $(el).addClass('reveal-item-is-visible');
                 },
                 offset: offset
             });
         });
    }
}

export default RevealOnScroll;