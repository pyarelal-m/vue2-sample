var app = new Vue({
    el: '#app',
    data: {
        age:20,
        a:0,
        b:0
    },
    methods: {
        
    },
    computed: {
        addToA: function() {
            console.log('add to a');
            return this.age+this.a;
        },
        addToB: function() {
            console.log('add to b');

            return this.age+this.b;
        }
    }
});
