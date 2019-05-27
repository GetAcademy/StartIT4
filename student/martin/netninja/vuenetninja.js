new Vue({
    el: '#vue-app',
    data: {
        name: 'Martin',
        job: 'Aner ikke',
        website: 'https://www.vg.no/',
        websiteTag: '<a href="https://www.vg.no/">Enda en link til Vg</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good' + time + ' ' + this.name;
        }
    }
});

new Vue({
    el: '#vue-app-two',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        add: function(inc) {
            this.age +=inc;
        },
        subtract: function(dec) {
            this.age -=dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function() {
            alert('ERROR');
        }
    }
});

new Vue({
    el: '#vue-app-three',
    data: {
        name: '',
        age: ''
    },
    methods: {
        logName: function() {
            console.log('you entered your name');
        },
        logAge: function() {
            console.log('You entered your age');
        }
    }
});

new Vue({
    el: '#vue-app-four',
    data: {
        age: 20,
        a: 0,
        b: 0,
    },
    // methods: {
    //     addToA: function() {
    //         return this.a + this.age
    //     },
    //     addToB: function() {
    //         return this.b + this.age;
    //     }
    // },
    computed: {
        addToA: function() {
            return this.a + this.age
        },
        addToB: function() {
            return this.b + this.age;
        },
    }
});

new Vue({
    el: '#vue-app-five',
    data: {
        available: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});

new Vue({
    el: '#vue-app-six',
    data: {
        error: false,
        sucess: false
    },
    methods: {

    },
    computed: {
        
    }
});

