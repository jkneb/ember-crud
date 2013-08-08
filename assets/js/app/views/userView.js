App.UserView = Ember.View.extend({

    // touch gestures properties
    startX      : 0,
    dist        : 0,
    active      : null,
    threshold   : 40,

    didInsertElement: function(){
        // the didInsertElement hook is the guarantee 
        // that the view is in the DOM. 
        // So from here, you can perform any DOM manipulation 
        // or what ever you wish with or without jQuery.
    }, 
    
    touchStart: function(event){
        var touchEvent = event.originalEvent.changedTouches[0];
        console.log($(touchEvent.target)[0]);
        var layer = $(touchEvent.target).closest('.user-edit')[0];
        if (layer) {
            this.active = layer;
            this.onStart(event, touchEvent);
        }
    },
    
    touchMove: function(event){
        event.preventDefault();
        if (!this.active) return;
        this.onMove(event, event.originalEvent.changedTouches[0]);
    },
    
    touchEnd: function(event){
        if (!this.active) return;
        this.onEnd(event);
    }, 
    
    onStart: function(e,d) {
        e.stopPropagation();
        this.startX = d.pageX;
        this.active.classList.add('drag');
    },

    onMove: function(e,d) {
        e.stopPropagation();
        this.dist = (d.pageX - this.startX) / 2;
        var pct, r;
        
        this.active.classList.remove('webkit-transform');
        
        // drag from left to right
        if (this.dist > 0) { 
            this.active.style.webkitTransform = 'translate3d(' + this.dist + 'px, 0, 0)';
        } 
        else { // drag from right to left
            this.active.style.webkitTransform = 'translate3d(' + this.dist + 'px, 0, 0)';
        }
    },

    onEnd: function(e) {
        e.stopPropagation();
        this.active.classList.remove('drag');

        // dragged from left to right
        if (this.dist >= this.threshold) { 
            this.active.classList.add('webkit-transform');
            this.active.style.webkitTransform = 'translate3d(' + $('.user-edit').outerWidth() + 'px, 0, 0)';
            this.active.classList.remove('active');

            this.sendCloseEvent();
        } 
        // cancel
        else if (this.dist > -this.threshold && this.dist < this.threshold) { 
            this.active.classList.add('webkit-transform');
            this.active.style.webkitTransform = 'translate3d(0px, 0, 0)';
        } 
        // dragged from right to left
        else { 
            console.log('canceled');
            
            this.active.classList.add('webkit-transform');
            this.active.style.webkitTransform = 'translate3d(0px, 0, 0)';
        }
        
        this.dist = 0;
        this.active = null;
    }    
});
