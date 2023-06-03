var app = new Vue({
    el: '#app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function (inc=1) {
            this.age +=inc;
        },
        sub: function (dec=1) {
            this.age -=dec;
        },
        updateXy: function(event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});
