<template>
	<div class="SwipePageContainer">
		<div class="SwipeName">{{SinglePerson.Username}}</div>
		<div v-if="BioVisible" class="SwipeImageSelector"></div>
		<div @click="ShowBio()" v-html="CurrentImage" class="SwipeImage"></div>
		<div v-if="BioVisible" v-html="SinglePerson.Bio" class="SwipeBio"></div>
		<div class="SwipeButtons">
			<button @click="LikeAndDislike('Like')">Like</button>
			<button @click="LikeAndDislike('fucking not')">Dislike</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
        ListOfSingles:
        [
					{ Username: "Ole Kristiansen", Password: "Lekebil", Email: "OleKri@hotmail.com", Age: 21, Birthday: new Date(1997, 2, 3),DatingPreference: "Women", ProfilePictures: [ "https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png", "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" ], Bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					{ Username: 'Ola Normann', Password: 'Brunost', Email: 'LangrennMannen@hotmail.com', Age: 30, Birthday: new Date(1989, 6, 4), DatingPreference: 'Women', ProfilePictures: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQntWDc40PuyKsnKYwySGh6HWDc0pDlo_6VFyTUQMeP4ZPZ-4xb', 'https://previews.123rf.com/images/zrestudiorus/zrestudiorus1610/zrestudiorus161000006/66876109-profile-icon-male-avatar-man-hipster-style-fashion-cartoon-guy-beard-glasses-portrait-casual-person-.jpg'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a diam maecenas. Felis donec et odio pellentesque diam volutpat commodo sed. Et magnis dis parturient montes. Odio eu feugiat pretium nibh. Volutpat consequat mauris nunc congue nisi vitae. Placerat vestibulum lectus mauris ultrices eros. Cras ornare arcu dui vivamus arcu felis bibendum ut. Tempor orci dapibus ultrices in. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. At imperdiet dui accumsan sit. Amet nisl purus in mollis nunc sed id semper. Pharetra et ultrices neque ornare aenean euismod elementum. Arcu ac tortor dignissim convallis aenean et tortor. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Morbi tincidunt augue interdum velit euismod in pellentesque massa.' },
					{ Username: 'Ibrahim Ibrahimsen', Password: 'Bordtennis', Email: 'IbrahimPong@hotmail.com', Age: 22, Birthday: new Date(1996, 10, 17), DatingPreference: 'Women', ProfilePictures: ['https://st2.depositphotos.com/2777531/6505/v/950/depositphotos_65058673-stock-illustration-hipster-man-avatar-user.jpg', 'http://bootdey.com/img/Content/avatar/avatar7.png'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Varius duis at consectetur lorem donec. Risus in hendrerit gravida rutrum. Mi ipsum faucibus vitae aliquet nec ullamcorper. Habitant morbi tristique senectus et netus et. Pharetra magna ac placerat vestibulum. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Enim facilisis gravida neque convallis a cras semper auctor neque. Sapien faucibus et molestie ac feugiat sed. Nunc scelerisque viverra mauris in aliquam sem fringilla. Lacus sed viverra tellus in hac habitasse platea dictumst. Tellus mauris a diam maecenas sed enim ut sem viverra. Dictum varius duis at consectetur lorem donec massa sapien.' },
					{ Username: 'Jonas Gledesdreper', Password: 'KlumperIMelka', Email: 'KlumpeLumpen@hotmail.com', Age: 25, Birthday: new Date(1994, 8, 7), DatingPreference: 'Alien', ProfilePictures: ['https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Bearded_Man-17-512.png', 'https://cdn.pixabay.com/photo/2018/05/19/22/03/man-3414477__340.png'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Viverra aliquet eget sit amet. Eleifend donec pretium vulputate sapien nec sagittis. Leo urna molestie at elementum eu facilisis. Amet mauris commodo quis imperdiet. Tortor at auctor urna nunc id cursus. Auctor eu augue ut lectus arcu bibendum at varius vel.' },
					{ Username: 'Hermann Hermannsen', Password: 'Karsk', Email: 'HermannJobb12@hotmail.com', Age: 50, Birthday: new Date(1969, 1, 10), DatingPreference: 'Men & Alien & Women', ProfilePictures: ['https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Panda-512.png', 'https://previews.123rf.com/images/gennadiikorchuganov/gennadiikorchuganov1702/gennadiikorchuganov170200069/71033969-mod%C3%A8le-de-logo-baby-panda-face-ic%C3%B4ne-du-visage-panda-b%C3%A9b%C3%A9-ours-asiatique-panda-t%C3%AAte-isol%C3%A9-sur-fond-blanc.jpg'], Bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit. Nisl nunc mi ipsum faucibus vitae aliquet nec. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Massa eget egestas purus viverra accumsan in. Ac felis donec et odio pellentesque diam volutpat. Est ante in nibh mauris cursus. Sodales neque sodales ut etiam. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Sit amet aliquam id diam maecenas ultricies. Sed egestas egestas fringilla phasellus faucibus. Vestibulum rhoncus est pellentesque elit ullamcorper. Ac tortor dignissim convallis aenean et tortor at. Nulla aliquet enim tortor at auctor urna nunc id cursus. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Ac tortor dignissim convallis aenean et tortor at risus viverra. Malesuada pellentesque elit eget gravida cum.' }
        ],

				BioVisible: false,
				SinglePerson: null,
				ImageButtons: null,
				CurrentImage: null,
			};
		},

		methods: {
			RandomSinglePerson() {
				return this.ListOfSingles[this.RandomNumber(0, 5)];
			},

      RandomNumber: function (min, max)
      {
      return Math.floor(Math.random() * (max - min) + min)
      },
			ShowBio() {
				if (!this.BioVisible) {
					let Cache = "";
					for (let i = 0; i < this.SinglePerson.ProfilePictures.length; i++) {
						Cache += `<button onclick="ChangeImage('${
							this.SinglePerson.ProfilePictures[i]
						}')" ></button>`;
					}
					this.ImageButtons = Cache;
					this.BioVisible = true;
				} else if (this.BioVisible) {
					this.CurrentImage = `<img src="${this.SinglePerson.ProfilePictures[0]}" />`;
					this.BioVisible = false;
				}
			},

			LikeAndDislike(Button) {
        console.log("my button " + Button);
				this.SinglePerson = this.RandomSinglePerson();
				this.CurrentImage = `<img src="${this.SinglePerson.ProfilePictures[0]}" />`;
				this.BioVisible = false;
				if (Button == "Like" && Math.random() >= 0.5) {
					alert(`You Matched With Someone, Go Talk To Them!!!`);
				}
			},
    },
    created(){
      this.SinglePerson = this.ListOfSingles[0];
      this.CurrentImage = `<img src="${this.SinglePerson.ProfilePictures[0]}" />`;
    },
	};
</script>

<style>
	.SwipePageContainer {
		overflow-y: scroll;
    height: 100%;
		display: grid;
		grid-template-columns: 35% 30% 35%;
		grid-template-rows: 10% auto 80% auto 10%;
		grid-template-areas:
    "EmptyLeft SwipeName EmptyRight"
    "EmptyLeft SwipeImageSelector EmptyRight"
    "EmptyLeft SwipeImage EmptyRight"
    "EmptyLeft SwipeBio EmptyRight"
    "EmptyLeft SwipeButtons EmptyRight";
	}

	.EmptyLeft {
		grid-area: EmptyLeft;
		width: 100%;
		height: 100%;
	}

	.SwipeName {
		grid-area: SwipeName;
		text-align: center;
		font-size: 20px;
		font-weight: bolder;
		text-shadow: 1px 0 0 #ad00ff, -1px 0 0 #ad00ff, 0 1px 0 #ad00ff,
			0 -1px 0 #ad00ff, 1px 1px #ad00ff, -1px -1px 0 #ad00ff, 1px -1px 0 #ad00ff,
			-1px 1px 0 #ad00ff;
	}

	.SwipeImageSelector {
		grid-area: SwipeImageSelector;
		text-align: center;
	}

	.SwipeImageSelector > button {
		border-radius: 20px;
		height: 2.5%;
		width: 10%;
		padding: 0px;
		margin-left: 1px;
		margin-right: 1px;
	}

	.SwipeImage {
		grid-area: SwipeImage;
		width: 100%;
		height: 100%;
	}

	.SwipeImage > img {
		max-height: 90%;
		border-radius: 20px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	.SwipeBio {
		grid-area: SwipeBio;
		text-align: center;
		background: rgba(236, 68, 251, 0.75);
		border-radius: 20px;
	}

	.SwipeButtons {
		grid-area: SwipeButtons;
		text-align: center;
		border-radius: 20px;
		margin: 5px;
	}

	.EmptyRight {
		grid-area: EmptyRight;
		width: 100%;
		height: 100%;
	}
</style>
