new Vue({
    el:'#vue-app',
    data:{
        name: 'shaun',
        job: 'pirate',
        website: 'https://www.youtube.com/',
        websiteTag: '<a href="https://www.youtube.com/">The Net Ninja Website</a>'
    },
    methods:{
        greet: function(time){
            return 'Good' + time + ' ' + this.name;
        }
    }
});

new Vue({
    el:'#bue-Blade',
    data:{
        age:25,
        x: 0,
        y: 0
    },
    methods:{
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(){
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})
new Vue({
    el:'#Keyboard',
    data:{
        name: '',
        age: ''

    },
    methods: {
        logName: function(){
            console.log('you entered your name');
        },
        logAge: function(){
            console.log('you entered your age');
        }
    }
})
new Vue ({
    el:'#Computed-Properties',
    data:{
        age: 20,
        a: 0,
        b: 0
    },
    methods: {

    }
})