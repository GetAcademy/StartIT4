<template>
	<div class="BlindDatesGridContainer">
		<div class="BlindLeft"></div>

		<div class="InnerBlindDatesBody">
			<Date @ydate="HandleDate" v-for="date in Dates" v-bind:key="date.Key" v-bind:Instance="date"></Date>

		</div>

		<div class="BlindRight"></div>
	</div>
</template>

<script>
	import Date from "@/subcomponents/Date";
	export default {
		components: {
			Date
		},
		data() {
			return {
				Key: 0,
				Dates: [],
				FNames: [
					"John",
					"James",
					"Curly",
					"Bill",
					"Jack",
					"Jennifer",
					"Haley",
					"Margaret",
					"Gwen",
					"Tammy"
				],
				LNames: [
					"GryfWood",
					"Farquad",
					"Wood",
					"Johnson",
					"Smith",
					"Williams",
					"Jones",
					"Brown",
					"Miller",
					"Wilson"
				],
				Addresses: [
					"Ulåsveien 48, 3258 Larvik",
					"Byskogstredet 192, 3257 Larvik",
					"Frenvik 232, 3261 Larvik",
					"Askeveien 209, 3274 Larvik",
					"Ridesteinveien 36, 3261 larvik",
					"Torstadbakken 63, 3259 Larvik",
					"Antoniskogen 71, 3276 Larvik",
					"Ibsens gate 239, 3266 Larvik",
					"Breigata 250, 3260 Larvik",
					"Nordahl Griegs vei 224, 3269 Larvik"
				],
				Times: [
					"16 June 2019",
					"21 June 2019",
					"22 June 2019",
					"29 June 2019",
					"5 July 2019",
					"6 July 2019",
					"19 July 2019",
					"20 July 2019",
					"21 July 2019",
					"28 July 2019"
				]
			};
		},
		methods: {
			CreateDates() {
				for (let i = 0; i < this.RandomNumber(1, 21); i++) {
					this.Key++;
					let name =
						this.FNames[this.RandomNumber(0, 10)] +
						" " +
						this.LNames[this.RandomNumber(0, 10)];
					let address = this.Addresses[this.RandomNumber(0, 10)];
					let age = this.RandomNumber(18, 51);
					let time = this.Times[this.RandomNumber(0, 10)];

					this.Dates.push({
						Key: this.Key,
						Name: name,
						Address: address,
						Age: age,
						Time: time
					});
				}
			},

			RandomNumber: function(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
      },

      HandleDate(RecievedDate)
      {
      this.$emit('fucker', RecievedDate);
      },
		},



		created() {
			this.CreateDates();
		}
	};
</script>

<style>
	.BlindDatesGridContainer {
		display: grid;
		max-height: 80vh;
		height: 100%;
		overflow-y: hidden;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		justify-content: center;
		grid-template-areas: "BlindLeft InnerBlindDatesBody BlindRight";
	}

	.BlindLeft {
		grid-area: BlindLeft;
		width: 100%;
	}

	.InnerBlindDatesBody {
		grid-area: InnerBlindDatesBody;
		border-radius: 20px;
		background: rgba(236, 68, 251, 0.75);
		border: 1px solid #ad00ff;
		text-align: center;
		align-content: center;
		align-items: center;
		align-self: center;

		max-width: 100%;
		max-height: 50vh;
		width: 100%;
		height: 75%;
		overflow-y: auto;
		/*

		    */
		display: flex;
		flex-direction: column;
		/*grid-template-rows: 1fr;
		    grid-template-columns: 1fr;
		    grid-template-areas: 'BodyBorderBox';*/
	}

	.BlindRight {
		grid-area: BlindRight;
		width: 100%;
	}
</style>
