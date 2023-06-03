var app = new Vue({
    el: '#app',
    data: {
        name: 'Pyare',
        job: 'Software Development',
        website: 'pyare.com',
        website_tag: '<a href="www.gg.com">gg.com</a>'
    },
    methods: {
        greet: function(name='Pyare!') {
            return 'Hello World '+name+' great job '+this.job;
        }
    }
});
