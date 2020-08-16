new Vue({
    el:'#vue-app',
    data: {
        name: 'Sayed',
        job: 'Developer',
        website: 'http://www.facebook.com'
    },
    methods: {
        greet:function(time) {
            return 'Good' + time;
            
        }
    }
})