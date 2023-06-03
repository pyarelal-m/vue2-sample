var app = new Vue({
    el: '#app',
    data: {
        name: 'Pyare',
        job: 'Software Development'
    },
    methods: {
        greet: function(name='Pyare!') {
            return 'Hello World '+name+' great job '+this.job;
        }
    }
});
