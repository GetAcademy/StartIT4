Vue.component( 'person',
    {
        props: ["folk"],
        template: `<tr class="Borders, SpecialAdjust"><td class="Borders">{{folk.Navn}}</td> <td class="Borders"> <button v-on:click="$emit('delete-person')">X</button> </td> </tr>`,
    } );

Vue.component( 'vinner',
    {
        props: ["deltager"],
        data: function ()
        {
            return {
                dato: new Date().toLocaleDateString(),
                klokka: (new Date().getUTCHours() + 2) + ':' + new Date().getUTCMinutes(),
                premie: this.FindPrize(),
                
            };
        },
        methods:
        {
            FindPrize: function ()
            {
                let prize = '';
                let roll = Math.random();
                if ( roll > 0 && roll < 0.25 )
                {
                    prize = 'en flaske <b>Vin</b>';
                }
                else if ( roll > 0.25 && roll < 0.5 )
                {
                    prize = 'en kasse med <b>Guinness</b>';
                }
                else if ( roll > 0.5 && roll < 0.75 )
                {
                    prize = 'en kilo med <b>Smågodt</b>';
                }
                else
                {
                    prize = 'to gram med dank <b>Weed</b>';
                }
                return prize;
            },
        },
        template: `
<tr class="SpecialAdjust">
<td><b>{{deltager.Navn}}</b> vant <span v-html="premie"></span> den <b>{{dato}}</b> klokka <b>{{klokka}}</b></td>
</tr>`,
    } );

Vue.component( "Headline",
    {
        props: ["text"],
        template: `<tr><th class="BackgroundDetails">{{text}}</th></tr>`,
    } );

Vue.component( "toptext",
    {
        props: ["text"],
        template: `
            <div>
            <span class= "BackgroundDetails"> {{ text }} </span>
            </div>`,

    } );

new Vue
    ( {
        el: '#app',
        data:
        {
            leketest: [{ id: 0, text: 'VinLotto', }],
            showWinner: false,
            showPersons: false,
            KeyGen: 1,
            InputText: '',
            InputNumber: 0,
            personer:
                [

                ],

            vinnere:
                [

                ],
        },

        methods:
        {
            DeletePerson: function ( identification )
            {
                for ( let i = 0; i < this.personer.length; i++ )
                {
                    if ( this.personer[i].Navn == identification.Navn )
                    {
                        this.personer.splice( i, 1 );
                    }
                }
            },

            AddPerson: function ()
            {
                this.personer.push( { id: this.KeyGen, Navn: this.InputText } );
                this.KeyGen++;
            },

            RandomNumber: function ( min, max )
            {
                return Math.floor( Math.random() * ( max - min ) + min )
            },

            TrekkVinnere: function ()
            {
                if ( this.InputNumber < 1 )
                {
                    alert( "du må trekke minst 1 vinner!" );
                    return false;
                }
                if ( this.InputNumber > this.personer.length )
                {
                    alert( "du kan ikke trekke flere vinnere enn du har av deltagere" );
                    return false;
                }
                for ( let i = 0; i < this.InputNumber; i++ )
                {
                    let Index = this.RandomNumber( 0, this.personer.length )
                    let Winner = this.personer[Index];
                    this.vinnere.push( Winner );
                    this.personer.splice( Index, 1 );
                }
                this.vinnere.push()
            },
        },

        computed:
        {

        },
    } )



