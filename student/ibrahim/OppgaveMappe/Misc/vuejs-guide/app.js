new Vue({               // kan kontrollere hele programmet eller bare noen instanser
    el: "#vue-app",
    data: {
        name: 'Ibrahim',
        job: 'Idiot',
        website:'http://www.vg.no'
    },
    methods: {
        greet: function(lads){
            return 'Noob'+ ' ' + lads + ' ' + this.name;
        }
    },
}); 